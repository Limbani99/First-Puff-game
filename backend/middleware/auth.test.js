const assert = require("node:assert/strict");
const jwt = require("jsonwebtoken");
const { test } = require("node:test");
const authMiddleware = require("./auth");

function createResponse() {
  return {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

test("rejects a request without a bearer token", () => {
  const response = createResponse();
  let continued = false;

  authMiddleware()({ headers: {} }, response, () => {
    continued = true;
  });

  assert.equal(response.statusCode, 401);
  assert.equal(continued, false);
});

test("accepts a valid token and enforces allowed roles", (t) => {
  const originalSecret = process.env.JWT_SECRET;
  process.env.JWT_SECRET = "middleware-test-secret";
  t.after(() => {
    if (originalSecret === undefined) delete process.env.JWT_SECRET;
    else process.env.JWT_SECRET = originalSecret;
  });

  const token = jwt.sign(
    { id: "player-1", role: "player" },
    process.env.JWT_SECRET,
    { expiresIn: "1m" }
  );
  const request = { headers: { authorization: `Bearer ${token}` } };
  const response = createResponse();
  let continued = false;

  authMiddleware("player")(request, response, () => {
    continued = true;
  });

  assert.equal(continued, true);
  assert.equal(request.user.id, "player-1");

  const forbiddenResponse = createResponse();
  authMiddleware("admin")(request, forbiddenResponse, () => {
    throw new Error("A player token must not pass the admin role check");
  });
  assert.equal(forbiddenResponse.statusCode, 403);
});

test("reports missing JWT configuration instead of accepting unverifiable tokens", (t) => {
  const originalSecret = process.env.JWT_SECRET;
  delete process.env.JWT_SECRET;
  t.after(() => {
    if (originalSecret !== undefined) process.env.JWT_SECRET = originalSecret;
  });

  const response = createResponse();
  authMiddleware()(
    { headers: { authorization: "Bearer token" } },
    response,
    () => {
      throw new Error("A token cannot be verified without a configured secret");
    }
  );

  assert.equal(response.statusCode, 503);
  assert.match(response.body.message, /not configured/);
});

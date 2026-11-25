const assert = require("node:assert/strict");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { test } = require("node:test");
const { login } = require("./authController");
const { User } = require("../models/users");

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

test("unknown email is rejected instead of creating an account", async (t) => {
  t.mock.method(User, "findOne", async () => null);
  const create = t.mock.method(User, "create", async () => {
    throw new Error("Login must not create accounts");
  });
  const response = createResponse();

  await login(
    { body: { email: " new@example.com ", password: "password123" } },
    response
  );

  assert.equal(response.statusCode, 401);
  assert.equal(response.body.message, "Invalid email or password");
  assert.equal(create.mock.callCount(), 0);
});

test("valid login normalizes email, verifies password, and returns a JWT", async (t) => {
  const originalSecret = process.env.JWT_SECRET;
  process.env.JWT_SECRET = "test-only-signing-secret";
  t.after(() => {
    if (originalSecret === undefined) delete process.env.JWT_SECRET;
    else process.env.JWT_SECRET = originalSecret;
  });

  const user = {
    _id: "user-123",
    username: "RiverCaptain",
    email: "user@example.com",
    role: "player",
    password: await bcrypt.hash("correct-password", 4),
    unlockedLevel: 4,
    totalStars: 2,
    stars: new Map([["1", 2]]),
    bestTimes: new Map([["1", 50]]),
    settings: { sound: true, vibration: true },
    save: async () => {},
    toObject() {
      return {
        _id: this._id,
        username: this.username,
        email: this.email,
        role: this.role,
        password: this.password,
        unlockedLevel: this.unlockedLevel,
        stars: this.stars,
        bestTimes: this.bestTimes,
        settings: this.settings,
      };
    },
  };
  const findOne = t.mock.method(User, "findOne", async () => user);
  const response = createResponse();

  await login(
    {
      body: {
        email: " USER@EXAMPLE.COM ",
        password: "correct-password",
        gameSave: {
          unlockedLevel: 6,
          stars: { 1: 3, 2: 1 },
          bestTimes: { 1: 55, 2: 70 },
        },
      },
    },
    response
  );

  assert.deepEqual(findOne.mock.calls[0].arguments[0], { email: "user@example.com" });
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.user.password, undefined);
  assert.equal(response.body.user.unlockedLevel, 6);
  assert.deepEqual(response.body.user.stars, { 1: 3, 2: 1 });
  assert.deepEqual(response.body.user.bestTimes, { 1: 50, 2: 70 });
  assert.equal(jwt.verify(response.body.token, process.env.JWT_SECRET).id, user._id);
});

test("wrong password is rejected without changing the user", async (t) => {
  const user = {
    password: await bcrypt.hash("correct-password", 4),
    save: async () => {
      throw new Error("Invalid login must not save the user");
    },
  };
  t.mock.method(User, "findOne", async () => user);
  const response = createResponse();

  await login(
    { body: { email: "user@example.com", password: "wrong-password" } },
    response
  );

  assert.equal(response.statusCode, 401);
  assert.equal(response.body.message, "Invalid email or password");
});

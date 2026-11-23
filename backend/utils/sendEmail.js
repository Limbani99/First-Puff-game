const nodemailer = require("nodemailer");

/**
 * Career-Bridge style email sender using nodemailer.
 * If credentials are not configured, it logs and skips gracefully.
 */
const sendEmail = async ({ to, subject, html }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Email credentials not configured in environment. Skipping email dispatch.");
    return null;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"First Puff Game" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error.message);
    return null;
  }
};

module.exports = sendEmail;

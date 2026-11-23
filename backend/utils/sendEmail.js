const nodemailer = require("nodemailer");

/**
 * Career-Bridge style email sender using nodemailer
 */
const sendEmail = async ({ to, subject, html }) => {
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
    // In development or when credentials are not configured, don't crash
    return null;
  }
};

module.exports = sendEmail;

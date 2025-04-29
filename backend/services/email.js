const nodemailer = require("nodemailer");

exports.sendTestEmail = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "createventure@flisionstudio.tech",
        pass: "CreateVenture@1",
      },
    });

    const mailOptions = {
      from: "createventure@flisionstudio.tech",
      to: "hardiktaneja838@gmail.com",
      subject: "create venture email test",
      text: "create venture email test.",
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};
const otpStore = new Map(); // Temporary in-memory store for OTPs

exports.sendVerificationOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    otpStore.set(email, otp); // Store OTP in memory (use a database in production)

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "createventure@flisionstudio.tech",
        pass: "CreateVenture@1",
      },
    });

    const mailOptions = {
      from: "createventure@flisionstudio.tech",
      to: email,
      subject: "Your Verification OTP",
      text: `Your OTP is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Failed to send OTP", error });
  }
};

exports.verifyOtp = (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const storedOtp = otpStore.get(email);
    if (storedOtp === otp) {
      otpStore.delete(email); // Remove OTP after successful verification
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid or expired OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Failed to verify OTP", error });
  }
};

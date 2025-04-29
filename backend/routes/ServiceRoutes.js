const express = require("express");
const router = express.Router();
const email = require("../services/email");

router.get("/test-email", email.sendTestEmail);
router.post("/send-verification", email.sendVerificationOtp);
router.post("/verify", email.verifyOtp);

module.exports = router;

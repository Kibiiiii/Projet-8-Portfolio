const express = require("express");
const { sendEmail } = require("../controllers/emailController");

const router = express.Router();

// Route pour envoyer un email
router.post("/send-email", sendEmail);

module.exports = router;



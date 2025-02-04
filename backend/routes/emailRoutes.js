import express from "express";
import { sendEmail } from "../controllers/emailController.js";

const router = express.Router();

// Route pour envoyer un email
router.post("/send-email", sendEmail);

export default router;  // ✅ Utilise 'export default'

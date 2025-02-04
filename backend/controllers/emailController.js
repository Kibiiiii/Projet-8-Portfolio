import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (req, res) => {
    console.log("Données reçues :", req.body);
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const msg = {
        to: email, // Destinataire
        from: process.env.EMAIL_FROM, // Expéditeur (doit être validé sur SendGrid)
        subject: subject,
        text: message,
        html: `<p>${message}</p>`, // Permet d'envoyer du HTML dans l'email
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: "Email envoyé avec succès !" });
    } catch (error) {
        console.error("Erreur d'envoi :", error.response?.body || error.message);
        res.status(500).json({ error: "Erreur lors de l’envoi de l’email.", details: error.response?.body || error.message });
    }
};




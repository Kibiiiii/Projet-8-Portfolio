const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  console.log("Données reçues :", req.body);
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: message,
        });

        res.status(200).json({ success: "Email envoyé avec succès !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l’envoi de l’email.", details: error.message });
    }
};



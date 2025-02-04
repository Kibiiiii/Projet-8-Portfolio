const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    // Configuration du transport Nodemailer
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tonemail@gmail.com",
            pass: "tonMotDePasse",
        },
    });

    let mailOptions = {
        from: email,
        to: "kibishiigaming@gmail.com",
        subject: `Message de ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email envoyé avec succès !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
});

app.listen(3001, () => console.log("Serveur backend sur port 3001"));


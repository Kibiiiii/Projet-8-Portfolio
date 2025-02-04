import React, { useState } from "react";
import { X } from "lucide-react";
import "../styles/form.scss";

function ContactForm({ onClose }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert("E-mail envoyé !");
                setName("");
                setEmail("");
                setMessage("");
                onClose();
            } else {
                alert("Erreur d'envoi.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Contactez-moi</h2>
                    <button onClick={onClose} className="close-button">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
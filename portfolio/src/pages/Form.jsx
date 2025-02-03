import React, { useState } from "react";
import { X, Mail } from "lucide-react";
import "../styles/form.scss";


function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
        setIsOpen(false); // Ferme la modale après soumission
    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="contact-button">
                <Mail size={24} />
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Contactez-moi</h2>
                            <button onClick={() => setIsOpen(false)} className="close-button">
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
            )}
        </div>
    );
}

export default ContactForm;
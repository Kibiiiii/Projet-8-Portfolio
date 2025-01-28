import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
    };

    return (
        <div className="contact-form">
            <h2>Contactez-moi</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default ContactForm;

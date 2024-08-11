import React, { useState } from 'react';

import './style.scss';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            event.target.reset();
        }, 2000);
    };

    return (
        <div id="contact" className="contact">
            <h2>Contact</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                    <div className="contact__form-group contact__form-group--half">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="contact__input"
                            placeholder="Prénom"
                            required
                        />
                    </div>
                    <div className="contact__form-group contact__form-group--half">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="contact__input"
                            placeholder="Nom de famille"
                            required
                        />
                    </div>
                </div>
                <div className="contact__form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="contact__input"
                        placeholder="E-mail"
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="contact__input"
                        placeholder="Sujet"
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="contact__textarea"
                        placeholder="Votre message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact__button">Envoyer</button>
            </form>
            {showModal && (
                <div className="modal">
                    <div className="modal__content">
                        <p>Votre message a été envoyé avec succès !</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;

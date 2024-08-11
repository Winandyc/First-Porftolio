import React from 'react';

import './style.scss';

const Presentation = () => {
    return (
        <div className="presentation">
            <div className="presentation__content">
                <div className="presentation__image">
                    <img
                        src={import.meta.env.VITE_PREFIX + "./images/me/me.home.webp"}
                        alt="Selfie de Winandy Christopher"
                    />
                </div>
                <div className="presentation__text">
                    <h2>Bienvenue sur mon portfolio !</h2>
                    <p>
                        Je suis Winandy Christopher, un développeur web FrontEnd passionné par la création d'expériences utilisateur exceptionnelles.
                        Mon objectif est de combiner ma créativité et mes compétences techniques pour développer des applications web innovantes et
                        engageantes.
                    </p>
                    <div className="download-cv">
                        <a
                            href="/src/assets/cvdevalternance.pdf"
                            download
                            className="download-button"
                        >
                            <i className="fa fa-download"></i>
                            <span>Téléchargez mon CV !</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;

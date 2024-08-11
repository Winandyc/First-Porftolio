import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                {/* Image */}
                <div className="footer__image">
                    <img src={import.meta.env.VITE_PREFIX + "images/footer/footer.img.jpg"} alt="" />
                </div>
                {/* Logos LinkedIn et Github */}
                <div className="footer__social">
                    <h4>Retrouvez moi ici, aussi !</h4>
                    <div className="footer__social-icons">
                        <a href="https://www.linkedin.com/in/christopher-winandy-7283032a3/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Winandyc" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                {/* Projets */}
                <div className="footer__projects">
                    <h4>Projets</h4>
                    <ul>
                        <li><a href="https://github.com/Winandyc/ArgentBank.p11">Argent Bank</a></li>
                        <li><a href="https://github.com/Winandyc/Kasa.p8">Kasa</a></li>
                        <li><a href="https://github.com/Winandyc/Sophie-Bluel.p6">Sophie Bluel</a></li>
                    </ul>
                </div>
                {/* Navigation */}
                <div className="footer__explore">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link smooth to="#home">Accueil</Link></li>
                        <li><RouterLink to="/about" className="nav-link">A propos</RouterLink></li>
                        <li><Link smooth to="#skills">Mes compétences</Link></li>
                        <li><Link smooth to="#projects">Mes projets</Link></li>
                        <li><Link smooth to="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2024 Winandy Christopher. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="brand">Winandy Christopher</div>
            <nav className="nav">
                <ul>
                    <li><Link to="#home" className="nav-link">Accueil</Link></li>
                    <li><RouterLink to="/about" className="nav-link">A propos</RouterLink></li>
                    <li><Link to="#skills" className="nav-link">Mes compétences</Link></li>
                    <li><Link to="#projects" className="nav-link">Mes projets</Link></li>
                    <li><Link to="#contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

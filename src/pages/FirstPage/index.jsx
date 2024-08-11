import React, { useEffect } from 'react';
import ButtonNavigate from '../../components/ButtonNavigate';

import './style.scss';

const image = import.meta.env.VITE_PREFIX + 'images/FirstPageImg/galaxy.webp';
const FirstPage = () => {
  useEffect(() => {
    // Ajoute la classe spécifique au corps du document
    document.body.classList.add('first-page');

    const title = document.querySelector('h1');
    title.innerHTML = title.textContent.replace(/\S/g, '<span>$&</span>');

    const spans = title.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });

    // Retire la classe spécifique du corps du document lorsque le composant se démonte
    return () => {
      document.body.classList.remove('first-page');
      title.innerHTML = title.textContent;
    };
  }, []);

  return (
    <div className='container' style={{ backgroundImage: `url(${image})` }}>
      <h1>Bienvenue sur mon Portfolio !</h1>
      <ButtonNavigate />
    </div>
  );
};

export default FirstPage;

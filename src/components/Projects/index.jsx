import React, { useState, useRef, useEffect } from 'react';

import './style.scss';

const projectsData = [
    {
        name: 'Projet Argent Bank',
        image: import.meta.env.VITE_PREFIX + 'images/projects/argentbank.p11.webp',
        description: `Argent Bank est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une maquette fournie, j'ai développé une application web avec authentification des utilisateurs en utilisant les technologies HTML, CSS, JavaScript, React, React Router, Redux, SASS (SCSS), une API pour récupérer les données et MongoDB pour stocker les informations des utilisateurs. Le résultat final est une application web sécurisée permettant aux utilisateurs de se connecter à leur compte et de visualiser leurs transactions bancaires. Ce projet m'a permis de renforcer mes compétences en développement front-end et de découvrir l'architecture Redux pour la gestion d'état dans les applications web.`,
        github: 'https://github.com/Winandyc/ArgentBank.p11',
    },

    {
        name: 'Projet Kasa',
        image: import.meta.env.VITE_PREFIX + 'images/projects/kasa.p8.webp',
        description: `
        Kasa est un projet sur lequel j'ai travaillé en tant que développeur front-end dans le cadre de ma formation chez OpenClassrooms. J'ai été chargé de réaliser plusieurs missions clés pour cette plateforme de location d'appartements. Tout d'abord, j'ai intégré les maquettes fournies en enrichissant le HTML pour offrir une expérience utilisateur immersive. Ensuite, j'ai développé la fonctionnalité de recherche d'appartements en utilisant les technologies HTML, CSS, JavaScript, React et React Router pour créer des interfaces dynamiques et interactives. J'ai également utilisé SASS (SCSS) pour organiser les styles de manière efficace. De plus, j'ai mis en place une API pour récupérer les données des appartements à afficher sur l'application. Le résultat final est une application web esthétique et fonctionnelle, qui m'a permis de renforcer mes compétences en développement front-end et d'approfondir ma compréhension de React.`,
        github: 'https://github.com/Winandyc/Kasa.p8',
    },

    {
        name: 'Projet Sophie Bluel',
        image: import.meta.env.VITE_PREFIX + 'images/projects/sophiebluel.p6.webp',
        description: `"Portfolio de Sophie Bluel" est un projet sur lequel j'ai travaillé en tant que développeur front-end chez ArchiWebos. À partir des maquettes fournies par Charlotte, la cheffe de projet, j'ai réalisé plusieurs missions essentielles. Tout d'abord, j'ai développé la page de présentation des travaux de l'architecte en enrichissant le HTML fourni pour offrir une expérience immersive. Ensuite, j'ai créé la page de connexion de l'administrateur du site à partir de zéro pour assurer une sécurité optimale. Enfin, j'ai conçu la modale permettant d'uploader de nouveaux médias en partant de rien. Pour ce faire, j'ai utilisé les meilleures pratiques de développement front-end ainsi que les technologies les plus adaptées. J'ai intégré les maquettes à l'aide de Figma, en respectant scrupuleusement les designs tout en garantissant une interactivité fluide. En parallèle, j'ai collaboré avec l'équipe back-end pour assurer une intégration harmonieuse. Ce projet m'a permis de mettre en pratique mes compétences en développement front-end, notamment en HTML, CSS et JavaScript. J'ai également eu l'opportunité de découvrir de nouvelles technologies, contribuant ainsi à renforcer mes compétences.`,
        github: 'https://github.com/Winandyc/Sophie-Bluel.p6',
    },

    {
        name: 'Projet Booki',
        image: import.meta.env.VITE_PREFIX + 'images/projects/booki.p3.webp',
        description: `Booki est un projet réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. J'ai travaillé à partir d'une maquette fournie pour intégrer la page d'accueil d'une agence de voyage fictive en utilisant les technologies HTML et CSS. J'ai également pris en compte les principes de conception adaptative pour assurer une expérience utilisateur optimale sur tous les types d'appareils (mobiles, tablettes, ordinateurs de bureau). Booki est un exemple de mon expertise en matière d'intégration web.`,
        github: 'https://github.com/Winandyc/Booki.p3',
        visiter: 'https://winandyc.github.io/Booki.p3/',
    },

    {
        name: 'Projet Oh My Food',
        image: import.meta.env.VITE_PREFIX + 'images/projects/ohmyfood.p4.webp',
        description: `OhMyFood est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une maquette fournie, j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique mes compétences en HTML et CSS, tout en utilisant SASS (SCSS) pour faciliter la gestion du code CSS. Le résultat final est un site web moderne qui met en avant les plats proposés par l'entreprise. Grâce à l'utilisation de SASS, j'ai pu gagner en productivité et en maintenabilité du code CSS, ce qui m'a permis de mieux organiser mon code et de le rendre plus facilement évolutif.`,
        github: 'https://github.com/Winandyc/Oh-My-Food.p4',
    },

    {
        name: 'Projet 724 Events',
        image: import.meta.env.VITE_PREFIX + 'images/projects/724events.p10.webp',
        description: `En tant que développeur front-end freelance, j'ai été sollicité par l'agence événementielle 724events pour intervenir sur leur site web vitrine. Le projet avait été entamé par un autre développeur, mais des problèmes de bugs persistaient, compromettant le bon fonctionnement du site. Ma mission consistait à identifier ces bugs, les résoudre et finaliser le site. Après avoir pris en main le projet, j'ai effectué une analyse approfondie du code existant pour repérer les dysfonctionnements. J'ai ensuite entrepris la correction de ces bugs, en apportant des solutions efficaces pour assurer la stabilité et la performance du site. Parallèlement, j'ai complété le cahier de recette afin de documenter toutes les fonctionnalités du site et de garantir un fonctionnement sans faille. Cette expérience m'a permis de démontrer ma capacité à intervenir sur des projets en cours de développement, en trouvant des solutions rapides et efficaces aux problèmes rencontrés. J'ai également renforcé ma collaboration avec l'équipe en place, en assurant une transition fluide et en maintenant un haut niveau de qualité dans le développement du site web vitrine de 724events.`,
        github: 'https://github.com/Winandyc/724events.p10',
    },

    {
        name: 'Projet Nina Carducci',
        image: import.meta.env.VITE_PREFIX + 'images/projects/ninacarducci.p9.webp',
        description: `
        Dans ce projet, j'ai agi en tant que développeur freelance pour optimiser le référencement d'un site web, améliorant sa performance et son accessibilité. J'ai identifié et résolu les problèmes de chargement et de référencement, proposé des recommandations et appliqué les améliorations nécessaires. Cette expérience m'a permis de renforcer mes compétences en SEO, en optimisation de la performance web et en accessibilité.`,
        github: 'https://github.com/Winandyc/Nina.p9',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    // Référence pour accéder au contenu de la modal
    const modalRef = useRef(null);

    // Fonction pour ouvrir la modal et afficher les détails du projet sélectionné
    const openModal = (event, project) => {
        // Empêche la propagation du clic pour éviter de fermer la modal immédiatement
        event.stopPropagation();

        console.log("Modal ouverte");
        setSelectedProject(project);
    };


    // Fonction pour fermer la modal
    const closeModal = () => {
        console.log("Modal fermée");
        setSelectedProject(null);
    };

    const handleClickOutside = (event) => {
        // Vérifie si modalRef.current existe et si l'événement de clic ne se produit pas à l'intérieur de modalRef.current.
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            // Appelle la fonction closeModal si les conditions sont remplies
            closeModal();
        }
    };

    // Active la détection de clic en dehors de la modal
    useEffect(() => {
        console.log("Ajout de l'écouteur d'événement de clic");
        window.addEventListener("click", handleClickOutside);

        // Désactive la détection de clic en dehors de la modal lorsque le composant "projects" est supprimé(= lorsqu'il n'est plus rendu dans l'interface
        // utilisateur (=le DOM)), pour éviter les fuites de mémoire et les comportements inattendus
        return () => {
            console.log("Suppression de l'écouteur d'événement de clic");
            window.removeEventListener("click", handleClickOutside);
        };
    }, []); // Utilisation du tableau vide [] pour exécuter l'effet une seule fois après le premier rendu

    const showNextProject = () => {
        setShowMoreProjects(true);
    };

    return (
        <div id="projects" className='myProjects'>
            {/* Titre de la section */}
            <h2>Mes projets</h2>
            {/* Conteneur des projets avec boucle pour afficher chaque projet */}
            <div className="projects-container">
                {/* Mapping sur les données des projets pour les récupérer et les afficher */}
                {projectsData.slice(0, showMoreProjects ? projectsData.length : 6).map((project, index) => (
                    <div className="project" key={index} onClick={(e) => openModal(e, project)} data-description={project.description}>
                        <img src={project.image} alt={project.name} />
                    </div>

                ))}
            </div>

            {/* Bouton "Plus de projets" */}
            {!showMoreProjects && (
                <div className="show-more-button-container">
                    <button onClick={showNextProject} className="show-more-button">Plus de projets</button>
                </div>
            )}

            {/* Modal pour afficher les détails du projet sélectionné */}
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content" ref={modalRef}>
                        {/* Bouton pour fermer la modal */}
                        <span className="close" onClick={closeModal}>&times;</span> {/* "&times" utilisé pour indiquer une fermeture ou une suppression. */}

                        {/* Titre et description du projet */}
                        <h3>{selectedProject.name}</h3>
                        <p>{selectedProject.description}</p>

                        {/* Boutons pour les liens GitHub et Visiter avec une expression ternaire */}
                        <div className="buttons-container">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`github-button custom-background${selectedProject.name === "Projet Booki" ? " left-align" : ""}`}>GitHub</a>
                            {selectedProject.visiter && (
                                <a href={selectedProject.visiter} target="_blank" rel="noopener noreferrer" className={`visit-button custom-background${selectedProject.name === "Projet Booki" ? " right-align" : ""}`}>Visiter</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;

import React from 'react';

import './style.scss';

const AnimatedBackground = () => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 100; i++) {
            stars.push(<div key={i} className={`star star-${i}`} />);
        }
        return stars;
    };

    return (
        <div className="animated-background">
            {renderStars()}
        </div>
    );
};

export default AnimatedBackground;

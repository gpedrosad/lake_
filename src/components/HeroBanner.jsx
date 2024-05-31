import React from 'react';

const HeroBanner = () => {
    return (
        <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden">
            <img src="../src/img/huevos.png" alt="Imagen decorativa" className="w-full h-full object-cover" />
        </div>
    );
};

export default HeroBanner;
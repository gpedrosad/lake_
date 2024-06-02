import React from 'react';
import Navbar from './Navbar';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-95 md:h-128 lg:h-160 overflow-hidden">
            <Navbar />
            <img src="../src/img/huevos.png" alt="Imagen decorativa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 md:p-12">
                <h1 className="text-new-green text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="block">Where the lake</span>
                    <span className="block">meets the</span>
                    <span className="block">rainforest</span>
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4">
                    Relax and get away from it all
                </p>
                
            </div>
        </div>
    );
};

export default HeroBanner;





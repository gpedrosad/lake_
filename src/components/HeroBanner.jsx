import React from 'react';
import Navbar from './Navbar';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-95 md:h-128 lg:h-160 overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00000000] via-[#00000099] to-[#00000000]"></div>
            <img src="../src/img/huevos.png" alt="Imagen decorativa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 md:p-12">
                <h1 className="ml-10 text-new-green text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="font-rufina block">Where the lake</span>
                    <span className="font-rufina block">meets the</span>
                    <span className="font-rufina block">rainforest</span>
                </h1>
                <p className="ml-10 text-white text-lg md:text-2xl mt-4 font-rufina">
                    Relax and get away from it all
                </p>
                
            </div>
        </div>
    );
};

export default HeroBanner;





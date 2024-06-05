import React from 'react';
import Navbar from './Navbar';

const HeroSection = ({ imageSrc, title }) => {
    return (
        <div className="relative w-full h-95 md:h-128 lg:h-160 overflow-hidden">
            <Navbar />
            <img src={imageSrc} alt="Hero Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00000000] via-[#00000099] to-[#00000000]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12">
                <h1 className="font-rufina text-new-green text-4xl md:text-6xl lg:text-8xl font-bold">{title}</h1>
            </div>
        </div>
    );
};

export default HeroSection;
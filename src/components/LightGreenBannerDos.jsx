import React from 'react';
import ImageCarrousel from './ImageCarrousel';
import CarruselDos from './CarruselDos';

// img

import hojaIzq from '/images/hojaizq.png';
import hojaDer from '/images/hojader.png';
import huevos from '/images/huevos.png';
import firstGen from '/images/first_gen.jpg';
import secondGen from '/images/second_gen.jpg';
import thirdGen from '/images/third_gen.jpg';
import fourthGen from '/images/fourth_gen.jpg';
import down1 from '/images/down1.jpg';
import down2 from '/images/down2.jpg';
import down3 from '/images/down3.jpg';
import down4 from '/images/down4.jpg';
import down5 from '/images/down5.jpg';
import down6 from '/images/down6.jpg'; // Ajustado
import down7 from '/images/down7.jpg'; // Ajustado
import down8 from '/images/down8.jpg';
import third1 from '/images/third1.jpg';
import third2 from '/images/third2.jpg';
import second2 from '/images/second2.jpg';




const images = [
    down1,
    down2,
    down3,
    down4,
    down5,
    down6,
    down7,
    down8,
];

const images2 = [
    third1,
    third2
];

const images3 = [
    secondGen,
    second2
];



const LightGreenBannerDos = () => {
    return (
        <div className="grid md:grid-cols-3">
            <div className="relative w-full bg-[#B8CAA8] md:col-span-1">
                <div className="md:flex-1 md:relative">
                    <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20" />
                </div>
                <div className="grid grid-cols-1 items-center gap-8 justify-items-center md:m-5 md:mt-14 md:mb-12 xs:m-10">
                    <img src={firstGen} alt="Imagen" className="h-60 w-96 rounded-3xl object-cover object-left-top mt-14 mb-8 xs:h-66" />
                    <CarruselDos images={images3} />

                    <CarruselDos images={images2} />
                    <img src={fourthGen} alt="Imagen" className="h-60 w-96 rounded-3xl object-cover object-center mb-14 mt- xs:h-66" />
                </div>
                <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20" />
            </div>
            <div className="relative w-full bg-[#F7F7F7] grid grid-cols-1 items-center justify-items-center md:px-60 py-5 md:col-span-2 px-10">
                <h1 className="text-center whitespace-nowrap font-rufina mt-6 font-bold text-custom-green text-3xl sm:text-3xl md:text-3xl md:pt-8 sm:pt-11 xl:text-5xl">About us</h1>
                <div className="w-5/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12 bg-yellow-500 h-1 sm:mb-10"></div>
                <section className="mb-12">
                    <header className="text-2xl font-bold text-center my-4 xl:text-4xl mb-10">
                        A Living History of Lake Barrine
                    </header>
                    <p className="text-justify text-xl mb-4 xl:text-3xl">
                        "A living history." I've always loved those three words set together—the way it makes you feel the story is still being told. My great-grandfather, George Curry, first came to Lake Barrine in 1913.
                    </p>
                    <p className="text-justify text-xl mb-4 xl:text-3xl">
                        Each generation has a different focus, a different way of telling the story, of keeping the history alive. What continues to tie us together, however, is the love that we share for Lake Barrine and the joy it’s brought to our family.
                    </p>
                    <blockquote className="italic text-lg pl-4 border-l-4 border-gray-300 mb-4 xl:text-3xl">
                        Growing up, my parents used to ask us as kids, "What would you love to do?" when we found ourselves in different situations.
                    </blockquote>
                    <p className="text-justify text-xl mb-4 xl:text-3xl">
                        And I find that's at the very heart of our Teahouse. All of our family has had time working at Lake Barrine and has always put their heart into the business and strived to keep this beautiful story going. Our goal is to keep the Teahouse a family-friendly place, where people from all walks of life can gather, share time and hopefully fall in love with this little piece of paradise, just the way our family did.
                    </p>
                    <footer className="text-right text-lg xl:text-3xl">
                        — Nalita Curry, 2024
                    </footer>
                </section>
                <div className="mb-20 mt-10">
                    <ImageCarrousel images={images} />
                </div>
            </div>
        </div>
    );
}

export default LightGreenBannerDos;

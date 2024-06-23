import React from 'react';
import ImageCarrousel from './ImageCarrousel';

// img
import firstGen from '/public/images/first_gen.jpg';
import secondGen from '/public/images/second_gen.jpg';
import thirdGen from '/public/images/third_gen.jpg';
import fourthGen from '/public/images/fourth_gen.jpg';
import hojaIzq from '/public/images/hojaizq.png';
import hojaDer from '/public/images/hojader.png';
import huevos from '/public/images/huevos.png';

const images = [
    firstGen,
    secondGen,
    thirdGen,
    fourthGen,
];

const LightGreenBannerDos = () => {
    return (
        <div className="grid md:grid-cols-3">
            <div className="relative w-full bg-[#B8CAA8] md:col-span-1">
                <div className="md:flex-1 md:relative">
                    <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20" />
                </div>
                <div className="grid grid-cols-1 items-center gap-10 justify-items-center md:m-5 md:mt-14 md:mb-14">
                    <img src={huevos} alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
                    <img src={huevos} alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
                    <img src={huevos} alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
                </div>
                <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20" />
            </div>
            <div className="relative w-full bg-[#F7F7F7] grid grid-cols-1 items-center justify-items-center px-10 py-5 md:col-span-2">
                <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-custom-green text-3xl mb-8 sm:text-3xl md:text-3xl md:pb-5 md:pt-8 sm:pb-3 sm:pt-11 sm:mb-1">About us</h1>
                <div className="w-full bg-yellow-500 h-0.5 sm:mt-5 sm:mb-5"></div>
                <section className="mb-12">
                    <header className="text-2xl font-bold text-center my-4">
                        A Living History of Lake Barrine
                    </header>
                    <p className="text-justify text-xl mb-4">
                        "A living history." I've always loved those three words set together—the way it makes you feel the story is still being told. My great-grandfather, George Curry, first came to Lake Barrine in 1913.
                    </p>
                    <p className="text-justify text-xl mb-4">
                        Each generation has a different focus, a different way of telling the story, of keeping the history alive. What continues to tie us together, however, is the love that we share for Lake Barrine and the joy it’s brought to our family.
                    </p>
                    <blockquote className="italic text-lg pl-4 border-l-4 border-gray-300 mb-4">
                        Growing up, my parents used to ask us as kids, "What would you love to do?" when we found ourselves in different situations.
                    </blockquote>
                    <p className="text-justify text-xl mb-4">
                        And I find that's at the very heart of our Teahouse. All of our family has had time working at Lake Barrine and has always put their heart into the business and strived to keep this beautiful story going. Our goal is to keep the Teahouse a family-friendly place, where people from all walks of life can gather, share time and hopefully fall in love with this little piece of paradise, just the way our family did.
                    </p>
                    <footer className="text-right text-lg">
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
import { useState } from 'react';
//img
import imgPrev from '/public/images/VectorPrevArrow.png'
import imgNext from '/public/images/VectorNextArrow.png'

const CarruselDos = ({ images, rounded }) => {

    const roundedClass = rounded ? `rounded-${rounded}` : 'rounded';

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative md:w-96 lg:w-96 sm:w-2/3 mt-2">
            <div className={`overflow-hidden  ${roundedClass}`}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-auto object-cover rounded-xl"
                />
            </div>
            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={prevSlide}
                    className="p-2"
                >
                    <img
                        src={imgPrev}
                        alt="Previous"
                        className="w-3 h-3"
                    />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2"
                >
                    <img
                        src={imgNext}
                        alt="Next"
                        className="w-3 h-3"
                    />
                </button>
            </div>
        </div>
    );
};

export default CarruselDos;



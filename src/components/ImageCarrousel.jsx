import { useState } from 'react';

const ImageCarrousel = ({ images, rounded }) => {

    const roundedClass = rounded ? `rounded-${rounded}` : 'rounded';

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative md:w-3/4 lg:w-2/3 sm:w-2/3 mx-auto">
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
                        src='src/assets/images/VectorPrevArrow.png'
                        alt="Previous"
                        className="w-3 h-3"
                    />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2"
                >
                    <img
                        src='src/assets/images/VectorNextArrow.png'
                        alt="Next"
                        className="w-3 h-3"
                    />
                </button>
            </div>
        </div>
    );
};

export default ImageCarrousel;



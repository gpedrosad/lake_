import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';
import hojaizq from '/public/images/hojaizq.png';
import hojader from '/public/images/hojader.png';

const GreenFeatureSection = ({ title, description, buttonText, borderRadius, bgcolor, images }) => {
    return (
        <div className="relative bg-[#B8CAA8] ">
            <img src={hojaizq} alt="Hoja izquierda" className="absolute top-0 left-0 w-16 h-auto" />
            <img src={hojader} alt="Hoja derecha" className="absolute bottom-0 right-0 w-16 h-auto" />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center pt-16">
        <div className="w-11/12 p-1 sm:w-2/3 md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-8">
                    <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-xl sm:text-2xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1 xs:pb-3 xs:pt-11 xl:text-4xl">
                        {title}
                    </h1>
                    <p className="text-justify text-xl text-custom-green xs:m-5 xl:text-2xl">
                        {description}
                    </p>
                </div>
                <div className="w-11/12 p-1 sm:w-2/3 md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-8">
                    <ImageCarousel images={images} rounded='3xl'/>
                </div>
            </div>
            <div className="bg-[#B8CAA8] flex justify-center pb-10">
                <a href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" target="_blank">
                    <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolor}/>
                </a>
            </div>
        </div>
    );
};

export default GreenFeatureSection;

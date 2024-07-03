import Navbar from './Navbar';

const HeroResto = ({ imageSrc, title,title2 }) => {
    return (
        <div className="relative w-full h-[930px] xs:h-[600px] overflow-hidden"> {/* Fijar la altura a 500px */}
            <Navbar />
            <img src={imageSrc} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" /> {/* Asegurar que la imagen cubra todo el contenedor */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00000000] via-[#00000099] to-[#00000000]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12">
                <h1 className="font-rufina text-new-green text-4xl md:text-6xl lg:text-8xl xs:test-5xl font-bold">{title}</h1>
                <h1 className="font-rufina text-new-green text-4xl md:text-6xl lg:text-8xl xs:test-5xl font-bold">{title2}</h1>

            </div>
        </div>
    );
};

export default HeroResto;

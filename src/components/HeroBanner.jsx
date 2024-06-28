import Navbar from './Navbar';
//img
import heroimg from '/public/images/banner_home.jpg'
// h-95 md:h-90 lg:h-160
const HeroBanner = () => { 
    return (
        <div className="relative w-full sm:h-[930px] xs:h-[600px] overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00000000] via-[#00000099] to-[#00000000]"></div>
            <img src={heroimg} alt="Imagen decorativa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 md:p-12">
                <h1 className="ml-10 mt-10 text-new-green text-6xl sm:text-8xl lg:text-9xl font-bold leading-tight lg:mt-20 xs:ml-0">
                    <span className="font-rufina block">Where the </span>
                    <span className="font-rufina block">Rainforest meets </span>
                    <span className="font-rufina block">the Lake</span>
                </h1>
                <p className="ml-10 text-white text-lg md:text-2xl lg:text-3xl mt-4 font-rufina xs:ml-0">
                    Relax and get away from it all
                </p>
                
            </div>
        </div>
    );
};

export default HeroBanner;





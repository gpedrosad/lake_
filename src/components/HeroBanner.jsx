import Navbar from './Navbar';
import heroimg from '/public/images/banner_home.jpg';
import line from '/public/images/Line1.png'
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
            {/* Estilo para la línea vertical */}
            <div className="h-4 absolute origin-bottom-right flex flex-row h-8 justify-center items-center -rotate-90 top-14 right-12 w-2/4 ">
                <div className='-rotate-90 w-auto m-0 mr-40'>
                    <img src={line}></img>
                </div>
                <div  className=" w-auto m-0m flex justify-center items-center">
                <p className=" text-white text-base font-bold w-auto  m-0 whitespace-nowrap">
                    Nurture your heart and your soul
                </p>

                </div>

            </div>
        </div>
    );
};

export default HeroBanner;








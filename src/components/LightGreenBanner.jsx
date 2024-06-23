import CustomImage from './CustomImage';
import TransparentButton from './TransparentButton';
//img
import hojaizq from '/public/images/hojaizq.png'
import nalita from '/public/images/nalita.png'
import hojasvg from '/public/images/hojasvg.svg'
import hoja2 from '/public/images/hoja2.png'
import hojader from '/public/images/hojader.png'

const LightGreenBanner = () => {
  return (
    <div className="relative w-full bg-[#B8CAA8] flex flex-col md:flex-row md:justify-between">
      <div className="md:flex-1 md:relative">
        <img src={hojaizq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20"/>
        <div className="mt-28 ml-28 md:mt-0 md:ml-40 md:mt-28">
          <CustomImage src={nalita}/>
        </div>
      </div>

      <div className="md:flex-1 md:overflow-hidden">
        <div className="grid grid-col gap-4">
          <div className="grid grid-cols-[40px_1fr_40px] items-center gap-2">
            <img src={hojasvg} alt="Descripción de la imagen" className="md:mt-20 mt-10"/>
            <div className="text-center md:mt-28 mt-12 sm:mt-40">
              <h1 className="whitespace-nowrap font-rufina font-bold text-2xl text-custom-green md:text-3xl">Lake Barrine Teahouse</h1>
              <span className="font-rufina font-bold text-xl text-custom-green md:text-2xl">Where the lake meets the rainforest</span>
            </div>
            <img src={hoja2} alt="Descripción de la imagen" className="w-full h-auto md:mt-24 mt-10"/>
          </div>
          <p className="font-inika font-normal ml-10 mr-10 mt-5 mb-20 text-xl">Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.</p>
          <TransparentButton className="mb-32 ml-48 md:mb-20" text="About us"/>
        </div>
        <img src={hojader} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20"/> 
      </div>
    </div>
  );
}

export default LightGreenBanner;
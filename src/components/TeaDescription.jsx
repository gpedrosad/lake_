import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';
import hojaizq from '/public/images/hojaizq.svg';
import hojader from '/public/images/hojader.svg';
import teaPhoto from '/public/images/restofoto.jpg';

const TeaDescription = () => {
  return (
    <>
      <div className="relative bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center pt-16">
        {/* Imagen decorativa izquierda */}
        <img
          src={hojaizq}
          alt="Hoja izquierda"
          className="absolute top-0 left-0 w-16 h-auto"
        />

        {/* Imagen decorativa derecha */}
        <img
          src={hojader}
          alt="Hoja derecha"
          className="absolute bottom-0 right-0 w-16 h-auto"
        />

        {/* Contenedor para aplicar borde redondeado */}
        <div className="w-full md:w-full h-5/6 lg:h-4/6 rounded-3xl overflow-hidden">
          <img
            src={teaPhoto}
            alt="foto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido de descripción */}
        <div className="items-center px-10 py-5 md:mb-20">
          <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl lg:text-4xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1 xl:text-5xl">
            Restaurant
          </h1>
          <div className="space-y-6">
            <p className="text-center text-xl text-custom-green xl:text-xl">
              Our restaurant story began in the post-war years when Margaret Curry, with her two young boys by her side, returned to Lake Barrine. As they gazed at the lake, worn by time but brimming with potential, she simply said, “Well, let us put on a Sunday Roast and see what happens.” And from that first meal, a beloved family tradition was born.
            </p>
            <p className="text-center text-xl text-custom-green xl:text-xl">
              Today, the Lake Barrine Teahouse Restaurant continues Margaret’s legacy, serving home-cooked meals infused with rich, comforting flavors and crafted with care. Every dish on our menu is made fresh, designed to celebrate the warmth of family and the joy of sharing a meal.
            </p>
            <p className="text-center text-xl text-custom-green xl:text-xl">
              From classic favorites to seasonal specialties, we invite you to relax, enjoy the beautiful lake views, and savor each bite. Our dedicated team is here to welcome you, making every visit a memorable experience filled with homemade goodness and genuine hospitality. Come experience the tradition that began with one Sunday Roast and has grown into a treasured gathering place for family and friends alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeaDescription;
import ImageText from './ImageText';
import TableImage from './TableImage';
import FoodImage from './FoodImage';
import MissImage from './MissImage';

// Importar imágenes
import tableImage from '/public/images/table.png';
import foodImage from '/public/images/food.png';
import missImage from '/public/images/Miss.png';


const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-11 sm:grid-rows-8 gap-0 m-12">
      <div className="sm:ml-10 col-span-1 sm:col-start-1 sm:col-span-5 sm:row-start-1 sm:row-span-4">
        <ImageText className=""/>
      </div>
      <div className="col-span-1 sm:col-start-7 sm:col-span-5 sm:row-start-1 sm:row-span-4">
        <img src={tableImage} className="w-screen" />
      </div>
      <div className="mt-10 md:mt-40 col-span-1 sm:col-start-1 sm:col-span-6 sm:row-start-4 sm:row-span-5">
          <img src={foodImage} className="w-screen" />
      </div>
      <div className="col-span-1 sm:col-start-7 sm:col-span-5 sm:row-start-5 sm:row-span-11 xs:mt-10 sm:mt-0">
        <img src={missImage} className="w-screen" />
      </div>
    </div>
  );
}

export default PhotoGallery;
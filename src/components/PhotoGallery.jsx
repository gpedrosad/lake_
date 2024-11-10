import ImageText from './ImageText';


// Importar imágenes
import tableImage from '/public/images/table.png';
import foodImage from '/public/images/food.png';
import missImage from '/public/images/Miss.png';


const PhotoGallery = () => {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-11 sm:grid-rows-7 gap-0 p-12">
      <div className="sm:ml-10 col-span-1 sm:col-start-1 sm:col-span-5 sm:row-start-1 sm:row-span-4">
        <ImageText className=""/>
      </div>
      <div className="col-span-1 sm:col-start-7 sm:col-span-5 sm:row-start-1 sm:row-span-4 lg:mb-3">
        <img src={tableImage} className="w-screen rounded-md rounded-tl-3xl" />
      </div>
      <div className="mt-6 md:mt-0 md:mr-4 col-span-1 sm:col-start-1 sm:col-span-6 sm:row-start-4 sm:row-span-5">
          <img src={foodImage} className="w-screen rounded-md rounded-bl-3xl" />
      </div>
      <div className="md:ml-2 col-span-1 sm:col-start-7 sm:col-span-5 sm:row-start-5 sm:row-span-11 xs:mt-10 sm:mt-0">
        <img src={missImage} className="w-screen rounded-md rounded-br-3xl" />
      </div>
    </div>
  );
}

export default PhotoGallery;
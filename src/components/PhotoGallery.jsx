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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-12 space-y-4 place-items-center">
      <ImageText className=""/>
      <TableImage src={tableImage} className=""/>
      <div class="xl:mr-60">

        <FoodImage src={foodImage} className="object-cover"/>
      </div>
      <MissImage src={missImage} className="object-cover"/> 
    </div>
  );
}

export default PhotoGallery;
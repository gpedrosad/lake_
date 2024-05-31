
import React from 'react';
import ImageText from './ImageText';
import TableImage from './TableImage';
import FoodImage from './FoodImage';
import MissImage from './MissImage';

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-12 space-y-4 place-items-center">
      <ImageText className=""/> 
      <TableImage src="../src/img/table.png" className=""/>
      <FoodImage src="../src/img/food.png" className=""/>
      <MissImage src="../src/img/Miss.png" className=""/> 
    </div>
  );
}

export default PhotoGallery;
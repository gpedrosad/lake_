import React from 'react';

const MissImage = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-[358px] h-[284px] bg-[#B2DFDB] rounded-[19px_19px_19px_129px] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] object-cover"
    />
  );
};

export default MissImage;
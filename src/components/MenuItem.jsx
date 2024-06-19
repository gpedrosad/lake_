import React from 'react';

const MenuItem = ({ nombre, ingredientes, precio, imagen }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-2">
      <div className="w-full text-left p-4">
        <h2 className="text-2xl font-bold text-custom-green text-center font-rufina">{nombre}</h2>
        <p className="text-gray-600 mt-2 text-center">{ingredientes}</p>
        <p className="text-4xl font-rufina font-bold text-gray-800 mt-4 text-center custom-green">{precio}</p>
      </div>
    </div>
  );
};

export default MenuItem;
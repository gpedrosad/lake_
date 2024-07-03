import React, { useState } from 'react';

const MenuItem = ({ nombre, ingredientes, precio, imagen }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex flex-col items-center bg-transparent font-rufina">
      <div className="w-full p-3 flex flex-col md:flex-row md:items-center">
        <h2 className="text-lg md:text-xl lg:text-xl font-semibold text-custom-green cursor-pointer whitespace-nowrap text-center md:text-left">{nombre}</h2>
        {ingredientes && (
          <p className="text-gray-700 text-xs md:text-md md:pl-3 mt-1 md:mt-0 text-center md:text-left">
            | {ingredientes}
          </p>
        )}
        <p className="text-black text-lg md:text-xl font-bold mt-1 md:mt-0 md:ml-auto whitespace-nowrap text-center md:text-left">{precio}</p>
      </div>
    </div>
  );
};

export default MenuItem;
import React, { useState } from 'react';

const ItemModal = ({ nombre, ingredientes, precio, imagen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="text-2xl font-bold cursor-pointer" onClick={openModal}>
        {nombre}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 md:flex rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:w-1/2 space-y-4 p-4">
              <h2 className="text-xl font-bold">{nombre}</h2>
              <p className="text-gray-600">{ingredientes}</p>
              <p className="text-2xl font-bold">{precio}</p>
              <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                Close
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={imagen} alt="Dish image" className="rounded-lg w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemModal;
import React, { useState } from 'react';

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState('Drinks');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Drinks', 'Breakfast', 'Lunch'];
  const menuContent = {
    Drinks: "Aquí se muestran imágenes y descripciones de bebidas.",
    Breakfast: "Explora nuestras opciones de desayuno, incluyendo huevos y panqueques.",
    Lunch: "Descubre los platos disponibles para el almuerzo, desde ensaladas hasta hamburguesas."
  };

  return (
    <div className="relative">
      <div className="sm:hidden">
        <button onClick={toggleDropdown} className="bg-custom-green text-white px-3 py-1 rounded-lg flex items-center justify-between w-36">
          {selectedOption}
          <span className="ml-2 text-sm">&#9660;</span>
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-36 bg-white rounded-lg shadow-lg z-10">
            <ul className="text-gray-700">
              {options.map((option, index) => (
                <li key={index}
                    className={`px-3 py-1 text-sm hover:bg-gray-100 ${index !== 0 ? 'border-t border-custom-green' : ''}`}
                    onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden sm:flex space-x-10 mt-3 justify-center mb-5">
        {options.map((option) => (
          <button key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-10 py-4 rounded-lg ${selectedOption === option ? 'bg-custom-green text-white' : 'bg-third-green text-white'}`}>
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <p>{menuContent[selectedOption]}</p>
      </div>
    </div>
  );
};

export default DropdownButton;
import React, { useState } from 'react';

const DropdownButton = () => {
  // Estado para manejar la opción seleccionada con 'Drinks' como valor inicial
  const [selectedOption, setSelectedOption] = useState('Drinks');
  // Estado para controlar la visibilidad del dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Drinks', 'Breakfast', 'Lunch'];

  return (
    <div className="relative">
      {/* Dropdown para dispositivos móviles */}
      <div className="sm:hidden">
        <button
          onClick={toggleDropdown}
          className="bg-custom-green text-white px-3 py-1 rounded-lg flex items-center justify-between w-36"
        >
          {selectedOption}
          <span className="ml-2 text-sm">&#9660;</span>
        </button>
        {isOpen && (
          <div className="absolute mt-1 w-36 bg-white rounded-lg shadow-lg z-10">
            <ul className="text-gray-700">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`px-3 py-1 text-sm hover:bg-gray-100 ${index !== 0 ? 'border-t border-custom-green' : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Botones para dispositivos más grandes que móviles */}
      <div className="hidden sm:flex space-x-2 mt-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`px-3 py-1 rounded-lg ${selectedOption === option ? 'bg-custom-green text-white' : 'text-gray-700 bg-white'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;
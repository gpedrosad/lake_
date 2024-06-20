import React, { useState } from 'react';
import MenuItem from './MenuItem';

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
    Drinks: [
      <MenuItem nombre="Coffee" ingredientes="Black or with milk" precio="5" imagen="src/img/huevos.png"/>
    ],
    Breakfast: [
      <MenuItem nombre="Eggs Benedict" ingredientes="Poached eggs, hollandaise, ham, English muffin" precio="$12" imagen="src/img/huevos.png"/>,
      <MenuItem nombre="Pancakes" ingredientes="Maple syrup, butter" precio="10" imagen="src/img/huevos.png"/>
    ],
    Lunch: [
      <MenuItem nombre="Halloumi Bao (V)" ingredientes="Zing chilli, basil, pickled cucumber" precio="20" imagen="src/img/huevos.png"/>
    ]
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
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
      <MenuItem nombre="Espresso" precio="$4.00" />,
      <MenuItem nombre="Long Black" precio="$5.00" />,
      <MenuItem nombre="Flat White" precio="$5.50" />,
      <MenuItem nombre="Cappuccino" precio="$5.50" />,
      <MenuItem nombre="Latte" precio="$5.50" />,
      <MenuItem nombre="Mocha" precio="$6.50" />,
      <MenuItem nombre="Dirty Chai" precio="$6.50" />,
      <MenuItem nombre="Piccolo" precio="$5.00" />,
      <MenuItem nombre="Macchiato" precio="$5.00" />,
      <MenuItem nombre="Affogato" precio="$5.50" />,
      <MenuItem nombre="Local Black Tea" precio="$5.00" />,
      <MenuItem nombre="English Breakfast" precio="$5.00" />,
      <MenuItem nombre="Earl Grey" precio="$5.00" />,
      <MenuItem nombre="Peppermint" precio="$5.00" />,
      <MenuItem nombre="Green Tea" precio="$5.00" />,
      <MenuItem nombre="Ginger & Lemongrass" precio="$5.00" />
    ],
    Breakfast: [
      <MenuItem nombre="Eggs Benedict" ingredientes="Poached eggs, hollandaise, ham, English muffin" precio="$12" imagen="src/img/huevos.png"/>,
      <MenuItem nombre="Pancakes" ingredientes="Maple syrup, butter" precio="10" imagen="src/img/huevos.png"/>,
      <MenuItem nombre="Eggs Benedict" ingredientes="Ciabatta bread, baby spinach, free-range eggs, choice of bacon/mushrooms/smoked salmon, hollandaise sauce" descripcion="Classic breakfast with your choice of topping" precio="$27.00" />,
      <MenuItem nombre="Twice Fried Bacon and Egg Roll" ingredientes="Crispy bacon, free-range egg, toasted Turkish bread, BBQ sauce" descripcion="Seasoned with housemade creole spices" precio="$17.00" />,
      <MenuItem nombre="Smoked Salmon and Cream Cheese" ingredientes="Smoked salmon, baby spinach, cream cheese, fresh herbs, Spanish onion, capers, toasted Turkish bread, lemon wedge" precio="$22.00" />,
      <MenuItem nombre="Smashed Avocado" ingredientes="Local avocado, fresh tomato, marinated feta, ciabatta toast, balsamic drizzle" precio="$20.00" />,
      <MenuItem nombre="BREKKY BLT" ingredientes={<span> Crunchy twice-fried bacon, lettuce, fresh tomato on Turkish bread with a drizzle of homemade aioli.<br/>Add avocado and fried egg for a delicious twist! $28</span>} descripcion="" precio="$20"
/>    ],
    Lunch: [
      <MenuItem nombre="Pumpkin Fetta and Spinach Frittata" ingredientes="Roast pumpkin, Danish fetta, baby spinach, served with salad and toasted garlic bread" precio="$24.00" />,
      <MenuItem nombre="Open Grill Chicken and Cheese Toastie" ingredientes="Grilled Turkish bread, virgin olive oil, chicken, cheese, choice of asparagus or pineapple" precio="$20.00" />,
      <MenuItem nombre="Mediterranean Veggie Stack" ingredientes="Sweet potato, eggplant, zucchini, marinated feta, basil pesto, tomato passata, spinach, garlic bread" precio="$26.00" />,
      <MenuItem nombre="Kofta Balls" ingredientes="Lentil and cashew koftas, salad, homemade chutney" descripcion="Vegan friendly with flavors of India" precio="$27.00" />
    ],
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
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import izquierda from '/public/images/grupoizq.svg'
import derecha from '/public/images/grupoder.svg'
import hoja from '/public/images/hojader2.svg'
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
      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">COFFEE</h1>,
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

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">LOOSE LEAF TEA</h1>,
      <MenuItem nombre="Local Black Tea" precio="$5.00" />,
      <MenuItem nombre="English Breakfast" precio="$5.00" />,
      <MenuItem nombre="Earl Grey" precio="$5.00" />,
      <MenuItem nombre="Peppermint" precio="$5.00" />,
      <MenuItem nombre="Green Tea" precio="$5.00" />,
      <MenuItem nombre="Ginger & Lemongrass" precio="$5.00" />,
      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">ALTERNATE MILKS</h1>,
      <MenuItem nombre="Almond" precio="$1.00" />,
      <MenuItem nombre="Soy" precio="$1.00" />,
      <MenuItem nombre="Oat" precio="$1.00" />,
      <MenuItem nombre="Lactose Free Milk" precio="$1.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">COFFEE ALTERNATES</h1>,

      <MenuItem nombre="Hot Chocolate" precio="$6.00" />,
      <MenuItem nombre="Chai Latte" precio="$6.00" />,
      <MenuItem nombre="Tumeric Latte" precio="$6.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">SYRUPS</h1>,
      <MenuItem nombre="Hazelnut" precio="$6.00" />,
      <MenuItem nombre="Caramel" precio="$6.00" />,
      <MenuItem nombre="Vainilla" precio="$6.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">MILKSHAKES</h1>,
      <MenuItem nombre="Chocolate Milkshake" precio="$8.50" />,
      <MenuItem nombre="Strawberry Milkshake" precio="$8.50" />,
      <MenuItem nombre="Banana Milkshake" precio="$8.50" />,
      <MenuItem nombre="Caramel Milkshake" precio="$8.50" />,
      <MenuItem nombre="Vanilla Milkshake" precio="$8.50" />,
      <MenuItem nombre="Lime Milkshake" precio="$8.50" />,
      <MenuItem nombre="Malta Milkshake" precio="$8.50" />,

<h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">IN THE FRIDGE</h1>,
      <MenuItem nombre="Softdrink" precio="$3.50" />,
      <MenuItem nombre="Bundaberg" precio="$5.00" />,
      <MenuItem nombre="Iced Tea" precio="$5.50" />,
      <MenuItem nombre="Organic Juice" precio="$5.50" />,
      <MenuItem nombre="Coconut Water" precio="$6.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">MINI WINE BOTTLES</h1>,
      <MenuItem nombre="Rose Prosecco" precio="$10.00" />,
      <MenuItem nombre="Sauvignon Blanc" precio="$10.00" />,
      <MenuItem nombre="Chardonday" precio="$10.00" />,
      <MenuItem nombre="Pink Moscato" precio="$10.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">HEMINGWAY BEER</h1>,
      <MenuItem nombre="Tropical Ale" precio="$8.50" />,
      <MenuItem nombre="Canecutter Lager" precio="$8.50" />,
      <MenuItem nombre="Bettys Pale Ale" precio="$8.50" />,
      <MenuItem nombre="Prospector Pilsner" precio="$8.50" />,
      <MenuItem nombre="Tunnel 10 Lager" precio="$8.50" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">ICED DRINKS</h1>,
      <MenuItem nombre="Ice Long Black" precio="$6.00" />,
      <MenuItem nombre="Ice Coffee" precio="$8.00" />,
      <MenuItem nombre="Ice Chocolate" precio="$8.00" />,
      <MenuItem nombre="Ice Mocha" precio="$8.00" />,
      <MenuItem nombre="Ice Latte" precio="$6.50" />,
      <MenuItem nombre="Ice Chai" precio="$6.50" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">KOMBUCHA</h1>,
      <MenuItem nombre="Kombucha" precio="$9.50" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">FOR THE LITTLE ONES</h1>,
      <MenuItem nombre="Kids Hot Chocolate" precio="$5.50" />,
      <MenuItem nombre="Babycino" precio="$3.50" />,
      <MenuItem nombre="Kids Milkshake" precio="$5.50" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">ICE CREAM BOWL</h1>,

      <MenuItem nombre="Ice Cream Bowl" precio="$6.00" />,
      <br></br>,
      <MenuItem nombre="Our Famous Scone" precio="$8.50" />,
      <MenuItem nombre="Housemade Cake" precio="$9,50" />,
      <MenuItem nombre="Golden Damper" precio="$9,50" />,






    ],
    Breakfast: [
      <MenuItem nombre="Eggs Benedict" ingredientes="Ciabatta bread, baby spinach, free-range eggs, choice of bacon/mushrooms/smoked salmon, hollandaise sauce" descripcion="Classic breakfast with your choice of topping" precio="$27.00" />,
      <MenuItem nombre="Twice Fried Bacon and Egg Roll" ingredientes="Crispy bacon, free-range egg, toasted Turkish bread, BBQ sauce" descripcion="Seasoned with housemade creole spices" precio="$17.00" />,
      <MenuItem nombre="Smashed Avocado" ingredientes="Local avocado, fresh tomato, marinated feta, ciabatta toast, balsamic drizzle" precio="$20.00" />,
      <MenuItem nombre="Brekky BLT" ingredientes="Crunchy twice-fried bacon, lettuce, fresh tomato on Turkish bread with a drizzle of homemade aioli" descripcion="" precio="$20.00"/>,
      <MenuItem nombre="Poached Eggs on Toast" ingredientes="Keep it simple with two free range poached eggs atop freshly toasted bread" descripcion="" precio="$16.00"/>,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">ADD ON</h1>,
      <MenuItem nombre="Twice fried bacon" ingredientes="" descripcion="" precio="$6.00"/>,
      <MenuItem nombre="Smoked Salmon" ingredientes="" descripcion="" precio="$6.00"/>,
      <MenuItem nombre="Mushrooms" ingredientes="" descripcion="" precio="$5.00"/>,
      <MenuItem nombre="Free range poached or fried egg" ingredientes="" descripcion="" precio="$3.00"/>,
      <MenuItem nombre="Smashed avocado" ingredientes="" descripcion="" precio="$5.00"/>,
      <MenuItem nombre="Spinach" ingredientes="" descripcion="" precio="$3.00"/>,
      <MenuItem nombre="Hollandaise" ingredientes="" descripcion="" precio="$4.00"/>,
      <MenuItem nombre="Extra toast" ingredientes="" descripcion="" precio="$3.00"/>,
      
      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">FOR THE LITTLE ONES</h1>,

      <MenuItem nombre="Cheesy fingers" ingredientes="" descripcion="" precio="$10.00"/>,
      <MenuItem nombre="Vegemite soldiers" ingredientes="" descripcion="" precio="$8.00"/>,
      <MenuItem nombre="Fried egg on toast" ingredientes="" descripcion="" precio="$12.00"/>,
      
      
      
    ],
    Lunch: [
      <MenuItem nombre="Pumpkin Fetta and Spinach Frittata" ingredientes="Roast pumpkin, Danish fetta, baby spinach, served with salad and toasted garlic bread" precio="$24.00" />,
      <MenuItem nombre="Twice Fried Bacon and Egg Roll" ingredientes="Delicious crispy bacon seasoned in our housemade creole spices, with local free range fried egg, toasted Turkish bread and bbq sauce." precio="$17.00" />,
      <MenuItem nombre="Smoked Salmon and Cream Cheese" ingredientes="Smoked salmon, baby spinach, cream cheese, fresh herbs, Spanish onion, capers, toasted Turkish bread, lemon wedge" precio="$22.00" />,
      <MenuItem nombre="Soup of the Day" ingredientes="Ask our lovely staff for the soup of the day!" precio="" />,
      <MenuItem nombre="Open Grill Chicken and Cheese Toastie" ingredientes="Grilled Turkish bread, virgin olive oil, chicken, cheese, choice of asparagus or pineapple" precio="$20.00" />,
      <MenuItem nombre="Mediterranean Veggie Stack" ingredientes="Sweet potato, eggplant, zucchini, marinated feta, basil pesto, tomato passata, spinach, garlic bread" precio="$26.00" />,

      <MenuItem nombre="Chicken Salad" ingredientes="Chicken cooked in herb broth, then tossed in a leafy salad with fresh mint, pear, cashews and a drizzle of delicious homemade ginger and lemon dressing. Served with a side of hot garlic bread." precio="$27.00" />,
      <MenuItem nombre="Steak Salad" ingredientes="The same yummy salad as above but this time tossed with delicious strips of pan-fried steak." precio="$28.00" />,
      <MenuItem nombre="Kofta Balls" ingredientes="With the flavours of India our lentil and cashew Kofta's are vegan friendly.Served atop a lovely colorful salad with a side of homemade chutney." precio="$27.00" />,
      <MenuItem nombre="Pork and Apple Sausage Rolls" ingredientes="With the flavours of India our lentil and cashew Kofta's are vegan friendly.Served atop a lovely colorful salad with a side of homemade chutney." precio="$26.00" />,
      <MenuItem nombre="Cowboy Steak Sandwich" ingredientes="Delicious steak lightly tossed in homemade spices, served with lettuce, fresh tomato, caramelised onion and melted cheese served on toasted Turkish bread." precio="$28.00" />,
      <MenuItem nombre="BLT" ingredientes="Crunchy twice-fried bacon, lettuce, fresh tomato on Turkish bread with a drizzle of homemade aioli." precio="$20.00" />,

      <h1 class="font-rufina text-xl pl-3 text-custom-green font-bold text-center mt-2 mb-2">FOR THE LITTLE ONES</h1>,

      <MenuItem nombre="Homemade Sausage Rolls" ingredientes="" precio="$12.00" />,
      <MenuItem nombre="Chessy Fingers" ingredientes="Crunchy twice-fried bacon, lettuce, fresh tomato on Turkish bread with a drizzle of homemade aioli." precio="$10.00" />,
      <MenuItem nombre="BLT" ingredientes="Crunchy twice-fried bacon, lettuce, fresh tomato on Turkish bread with a drizzle of homemade aioli." precio="$14.00" />,



      
    ],
  };

  return (
    <div className="relative mt-10 ">
      <div className="absolute left-0 top-36">
        <img src={derecha} alt="Decorative Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-0 top-0">
        <img src={izquierda} alt="Decorative Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-0 top-72">
        <img src={hoja} alt="Decorative Background" className="w-full h-full object-cover" />
      </div>

      <h1 className="text-5xl font-bold text-center font-rufina m-16">Menu</h1>
      
      <div className="sm:hidden">
        <div className="flex justify-center">
          <button onClick={toggleDropdown} className="bg-custom-green text-white px-3 py-1 rounded-lg flex items-center justify-between w-36 h-10">
            {selectedOption}
            <span className="ml-2 text-sm">&#9660;</span>
          </button>
          {isOpen && (
            <div className="absolute mt-10 w-36 bg-white rounded-lg shadow-lg z-10">
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
      </div>
      <div className=" hidden sm:flex space-x-10 mt-3 justify-center mb-5">

        {options.map((option) => (
          <button key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-10 py-4 rounded-lg ${selectedOption === option ? 'bg-custom-green text-white' : 'bg-third-green text-white'}`}>
            {option}
          </button>
        ))}
      </div>
      <div className="relative flex font-rufina justify-center mt-16 mb-20">
        <div className='w-11/12'>
          {menuContent[selectedOption]}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;

import React, { useState } from 'react'; // Importa React y useState juntos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TransparentButton from "./components/TransparentButton"; // Corregido para importar correctamente la exportación por defecto
import CustomImage from './components/CustomImage';
import GreenButton from './components/GreenButton';
import YellowButton from './components/YellowButton';
import TableImage from './components/TableImage';
import FoodImage from './components/FoodImage';
import MissImage from './components/MissImage';
import ImageText from './components/ImageText';
import './index.css'; // Asegúrate de que este es el camino correcto al archivo CSS
import DevonshireSpecial from './components/DevonshireSpecial';
import Breakfast from './components/Breakfast';
import Navbar from './components/Navbar';
import SocialMediaIcons from './components/SocialMediaIcons';
import Card from './components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from './components/CardSlider';
import "../src/global.css"



function App() {
  const [buttonClicked, setButtonClicked] = useState(false); // Define el estado para manejar el clic

  return (
    <>
      <div>

        <Navbar/>
        
        <img src="../src/img/huevos.png" alt="" class="w-full h-full object-cover"/>

        <CardSlider/>



      <div class="flex flex-col md:flex-row w-full">
        <div class="w-full md:order-first">
          <div class="flex-1">
            <DevonshireSpecial />
            <TransparentButton
          text="Click Me"
          onClick={() => setButtonClicked(true)}
          class=""
        />
          </div>
        </div>
        <div class="w-full md:order-last md:flex-col">
          <div class="flex-1">
            <Breakfast color="orange" />
          </div>
          <div class="flex-1">
            <Breakfast color="red" />
          </div>
        </div>
      </div>

      <div class="bg-[#B8CAA8] flex flex-col md:flex-row">
        <div class="flex-1 p-4">
          <CustomImage src="../src/img/nalita.png"/>
        </div>
        <div class="flex-1 p-10">
          <h1 class="mb-4 text-2xl">Lake Barrine Teahouse</h1>
          <span class="mb-4 text-xl">Where the lake meets the rainforest</span>
          <p class="mb-4 text-xl">Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.</p>
          <TransparentButton class="mb-4" text="About us"/>
        </div>
      </div>

      <div class="w-screen h-32 flex justify-center items-center bg-white">
        <div class="w-full bg-yellow-500 h-0.5"></div>
        <span class="text-xl font-bold m-10 text-4xl text-custom-green">Menu</span>
        <div class="w-full bg-yellow-500 h-0.5"></div>
      </div>


        
        <GreenButton class="m-5" text="Inquire here"/>
        <YellowButton text="Inquire here"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-12 space-y-4 place-items-center">
          <ImageText class=""/> 
          <TableImage src = "../src/img/table.png" class=""/>
          <FoodImage src = "../src/img/food.png" class=""/>
          <MissImage src ="../src/img/Miss.png" class=""/> 
        </div>

      </div>
        <div className="bg-custom-green grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center">
            <img src="../src/img/logo.png" class="p-10"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 class="font-rufina text-2xl text-white">Contact</h1>
            <p class="text-white">+1 86 852 346 000</p>
            <p class="text-white">info@lakebarrine.com</p>
            <span class="text-white">Lake Barrine.</span>
            <span class="text-white">Australia, 90230</span>
          </div>
          <div className="flex flex-col items-center justify-center p-10">
            <h1 class="font-rufina text-2xl text-white">Opening hours</h1>
            <p class="text-white">Monday to Sunday </p>
            <p class="text-white">9:00 am - 10:00 pm</p>
            <h1 class="font-rufina text-2xl text-white pb-10">Stay connected</h1>
            <SocialMediaIcons/>
          </div>

        </div>

        <div class="bg-custom-green grid grid-cols-1 place-items-center">
          <div class="w-full bg-yellow-500 h-0.5"></div>
          <p class="m-6 text-white pt-10">© 2024. All Rights Reserved</p>
        </div>
    </>
  );
}

export default App;
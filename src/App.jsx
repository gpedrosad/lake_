import React, { useState } from 'react'; // Importa React y useState juntos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Asegúrate de que este es el camino correcto al archivo CSS
import Navbar from './components/Navbar';
import Card from './components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from './components/card_slider/CardSlider';
import "../src/global.css"
import RatingSlider from './components/rating_slider/RatingSlider'
import MenuComponent from './components/menu_components/MenuComponents';
import Footer from './components/Footer';
import ForestBanner from './components/ForestBanner';
import MenuLine from './components/MenuLine';
import LightGreenBanner from './components/LightGreenBanner';
import PhotoGallery from './components/PhotoGallery';
import HeroBanner from './components/HeroBanner';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false); // Define el estado para manejar el clic

  return (
    <>
    <Navbar/>

    <HeroBanner/>
    <CardSlider/>
    <LightGreenBanner/>
    <MenuLine/>
    <MenuComponent/>
    <PhotoGallery/>
    <ForestBanner/>
    <RatingSlider/>

    <Footer/>
    

</>

  );
}

export default App;
import React from 'react';
import './CardSlider.css'
import Slider from 'react-slick';
import Card from '../Card';
import { useLayoutEffect, useState } from 'react';

const CardSlider = () => {
  // Estado para almacenar la configuración
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: false,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3, // Valor predeterminado para desktop
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 5000
  });

  useLayoutEffect(() => {
    // Función para actualizar la configuración basada en el tamaño de la pantalla
    const updateSettings = () => {
      const isMobile = window.innerWidth < 768; // Asumiendo 768px como breakpoint para móvil
      setSettings(prevSettings => ({
        ...prevSettings,
        slidesToShow: isMobile ? 1.5 : 3 // 1.5 slides para móvil, 3 para desktop
      }));
    };

    updateSettings(); // Llama a la función cuando el componente se monta
    window.addEventListener('resize', updateSettings); // Ajusta la configuración cuando se cambia el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', updateSettings); // Limpiar el event listener al desmontar
    };
  }, []);

  return (
    <div className='Slider-component'>
    <h1 className='title_card_slider'>Experience the tranquility</h1>
    <Slider {...settings}>
      
      <Card title={'Indoor dining'} description={'Como estas que tal sksksksmvmsanba nabsubs'}/>
      <Card title={'Outdoor dining'} description={'Como estas que tal sksksksmvmsanba nabsubs'}/>
      <Card title={'Boat cruise'} description={'Como estas que tal sksksksmvmsanba nabsubs'}/>
      <Card title={'Indoor dining'} description={'Como estas que tal sksksksmvmsanba nabsubs'}/>
      <Card title={'Boat cruise'} description={'Como estas que tal sksksksmvmsanba nabsubs'}/>

    </Slider>
    </div>
  );
};

export default CardSlider;
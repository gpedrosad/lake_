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
    autoplaySpeed: 5000,

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
      <div className='component_t_card_slider '>


        <div className='flex items-center items-center mt-5 mb-5'>
        <img 
      src="src/assets/images/hoja1.png" 
      alt="Descripción de la imagen" 
      style={{ width: '70px', height: '70px' }} 
      class="ml-6"
    />
    <h1 className='font-rufina font-bold text-custom-green sm:text-3xl md:text-4xl lg:text-5xl'>
      Experience the tranquility
      </h1>        
</div>
        <img 
      src="src/assets/images/hoja2.png" 
      alt="Descripción de la imagen" 
      style={{ width: '70px', height: '70px' }} 
      class="ml-4"
    />

      </div>
    <Slider className='card_slider_component'{...settings}>
      
      <Card title={'Indoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'} image={'src/assets/images/card-image-1.png'}/>
      <Card title={'Outdoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image2.png'}/>
      <Card title={'Boat cruise'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'} image={'src/assets/images/card-image3.png'}/>
      <Card title={'Indoor dining'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image-1.png'}/>
      <Card title={'Boat cruise'} description={'Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await.'}  image={'src/assets/images/card-image3.png'}/>

    </Slider>
    </div>
  );
};

export default CardSlider;
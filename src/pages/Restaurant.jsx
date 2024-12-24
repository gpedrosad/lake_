import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroResto from "../components/HeroResto";
import TeaDescription from "../components/TeaDescription";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";
import heroimg from '/public/images/banner_restaurante.jpg';
import ImageGallery from '../components/ImageGallery';
import drinks1 from '/public/images/drinks1.jpg'
import drinks2 from '/public/images/drinks2.jpg'
import brk1 from '/public/images/brk1.jpg'
import brk2 from '/public/images/brk2.jpg'
import ln1 from '/public/images/ln1.jpg'
import ln2 from '/public/images/ln2.jpg'
import celeb from '/public/images/celeb.jpg'
import menu1 from '/public/images/menu1.jpg'
import menu2 from '/public/images/menu2.jpg'





function Contact() {
    const images = [
        { src: menu1, alt: 'Descripción de la imagen 2' },
        { src: menu2, alt: 'Descripción de la imagen 2' },

        // Agrega más imágenes según sea necesario
      ];
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return(
        <>
            <Helmet>
                <title>Lake Barrine Teahouse - Enjoy Breakfast and Lunch with a View</title>
                <meta name="description" content="Dine at Lake Barrine Teahouse, where we serve delicious breakfast and lunch menus surrounded by stunning lake views. Experience the best local cuisine in a charming atmosphere at Lake Barrine." />
                <meta name="keywords" content="Lake Barrine restaurant, breakfast at Lake Barrine, lunch Lake Barrine, Teahouse dining, Lake Barrine Teahouse menu" />
            </Helmet>
            <div>
                <HeroResto
                    imageSrc={heroimg}
                    title="Lake Barrine"
                    title2="Teahouse"
                />
                <TeaDescription/>
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
                <HoursAndBookingInfo/>
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
                {/*<DropdownButton/>*/}
                <br />
                <ImageGallery images={images}/>
            </div>
        </>
    );
}

export default Contact;
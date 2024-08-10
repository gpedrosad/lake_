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




function Contact() {
    const images = [
        { src: brk1, alt: 'Descripción de la imagen 2' },
        { src: brk2, alt: 'Descripción de la imagen 2' },
        { src: ln1, alt: 'Descripción de la imagen 2' },
        { src: ln2, alt: 'Descripción de la imagen 2' },
        { src: drinks1, alt: 'Descripción de la imagen 1' },
        { src: drinks2, alt: 'Descripción de la imagen 2' },
        { src: celeb, alt: 'Descripción de la imagen 2' },

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
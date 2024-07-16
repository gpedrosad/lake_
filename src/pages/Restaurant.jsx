import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroResto from "../components/HeroResto";
import TeaDescription from "../components/TeaDescription";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";
import heroimg from '/public/images/banner_restaurante.jpg';

function Contact() {
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
                <DropdownButton/>
            </div>
        </>
    );
}

export default Contact;
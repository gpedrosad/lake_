import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import HeroSection from '../components/SecondHeroSection';
import GoogleMap from '../components/GoogleMap';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import hojaIzq from '/public/images/hojader1.svg';
import hojaDer from '/public/images/hojaizq1.svg';
import contact from '/public/images/contact.jpg';
import AirbnbIcon from '/public/images/airbnb.svg';
import Email from '/public/images/email.svg';
import Phone from '/public/images/phone.svg';
import map from '/public/images/map.svg';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_55qyrmd', 'template_mj7x5v8', e.target, 'VAJlaJb5Q_FJhE9rr')
          .then((result) => {
              alert("Thank you for your message. We will contact you soon!");
              setFormData({ name: '', email: '', phone: '', message: '' });
          }, (error) => {
              alert("Failed to send message. Please try again later.");
          });
    };

    return (
        <div className="bg-[#F7F7F7] relative">
            <Helmet>
                <title>Contact Lake Barrine for Teahouse, Boat Cruises, and Functions Booking</title>
                <meta name="description" content="Contact us to book your next event at Lake Barrine. Whether it's a boat cruise, a breakfast at the teahouse, or a special function, we're here to help." />
                <meta name="keywords" content="Lake Barrine contact, Lake Barrine booking, teahouse, boat cruise, functions, accommodation, breakfast, lake" />
            </Helmet>
            <HeroSection imageSrc={contact} title="Contact Us" />
            <img src={hojaIzq} alt="Leaf on the left" className="absolute top-30 left-0 w-16 h-16 lg:w-30 lg:h-30" />
            <img src={hojaDer} alt="Leaf on the right" className="absolute bottom-0 right-0 w-16 h-16 lg:w-30 lg:h-30" />

            <div className="mx-auto p-6">
                <div className="text-center font-rufina text-lg md:text-xl lg:text-2xl text-custom-green mt-20 mb-20">
                    <p>Have a question or want to plan your visit? Get in touch with Lake Barrine Teahouse today.</p>
                    <p>Our friendly team is here to assist with reservations, event inquiries, and more.</p>
                    <p>Reach out and let us help make your experience unforgettable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Form fields with handlers */}
                        </form>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {/* Contact information and social links */}
                    </div>
                </div>
                <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6 mt-4">
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
}

export default Contact;
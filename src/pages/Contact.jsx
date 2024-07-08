import React, { useEffect } from 'react';
import HeroSection from '../components/SecondHeroSection';
import GoogleMap from '../components/GoogleMap';
import hojaIzq from '/public/images/hojader1.svg';
import hojaDer from '/public/images/hojaizq1.svg';
import contact from '/public/images/contact.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AirbnbIcon from '/public/images/airbnb.svg'; // Suponiendo que el SVG está en esta ruta
import Email from '/public/images/email.svg';
import Phone from '/public/images/phone.svg';


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F7F7F7] relative">
            <HeroSection imageSrc={contact} title="Contact Us" />
            <img src={hojaIzq} alt="Leaf on the left" className="absolute top-30 left-0 w-16 h-16 lg:w-30 lg:h-30" />
            <img src={hojaDer} alt="Leaf on the right" className="absolute bottom-0 right-0 w-16 h-16 lg:w-30 lg:h-30" />
            
            <div className="mx-auto p-6">
                <p className="mt-20 text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mt-2 mb-2">Have a question or want to plan your visit? Get in touch with Lake Barrine Teahouse today.</p>
                <p className="text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mt-2 mb-2">Our friendly team is here to assist with reservations, event inquiries, and more.</p>
                <p className="mb-20 text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mb-10 mt-10">Reach out and let us help make your experience unforgettable.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {/* Contact Form */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Name" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Email" />
                                </div>
                                <div className="md:w-1/2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Phone Number" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border border-custom-green px-4 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="mt-2 px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-8 grid-rows-5">
                        {/* Social Links and other contact info */}
                        <img src={Phone} alt="Airbnb" className="w-7 h-7 cursor-pointer col-start-1" />
                        <p class="grid grid-start-2 col-span-3">(07) 4095 3847</p>
                        <img src={Email} alt="Airbnb" className="w-6 h-6 cursor-pointer col-start-1 row-start-2" />
                        <p class="grid grid-start-2 col-span-3 row-start-2">info@lakebarrine.com.au</p>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer col-start-1 row-start-3">
                            <InstagramIcon className="text-custom-green text-[40px] md:text-[30px] cursor-pointer " />
                        </a>
                        <p class="grid grid-start-2 col-span-3 row-start-3">@lakebarrine</p>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer col-start-1 row-start-4">
                        <FacebookIcon className="text-custom-green text-[40px] md:text-[30px] cursor-pointer" />
                    </a>
                    <p class="grid grid-start-2 col-span-3 row-start-4">facebook.com/LakeBarrine/</p>

                    <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer col-start-1 row-start-5">
                        <img src={AirbnbIcon} alt="Airbnb" className="w-6 h-6 cursor-pointer" />
                    </a>
                    <p class="grid grid-start-2 col-span-3 row-start-5">airbnb.com/lakebarrine</p>


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
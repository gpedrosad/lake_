import React, { useEffect } from 'react';
import HeroSection from '../components/SecondHeroSection';
import contact from '/public/images/contact.jpg';
import GoogleMap from '../components/GoogleMap';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F7F7F7]">
            <HeroSection imageSrc={contact} title="Contact Us" />
            <div className="mx-auto p-6">
                <p className="text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mt-2 mb-2">Have a question or want to plan your visit? Get in touch with Lake Barrine Teahouse today.</p>
                <p className="text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mt-2 mb-2">Our friendly team is here to assist with reservations, event inquiries, and more.</p>
                <p className="text-center font-rufina text-lg sm:text-lg md:text-xl lg:text-2xl text-custom-green mb-10 mt-10">Reach out and let us help make your experience unforgettable.</p>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="m-4 bg-white shadow-md rounded-lg p-6 order-2 md:order-none">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Phone Number" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border border-custom-green px-4 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="mt-2 px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-500 focus:ring-opacity-50">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="order-1 md:order-none">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
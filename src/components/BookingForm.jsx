import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import HeroSection from '../components/SecondHeroSection';
import contactImage from '/public/images/contact.jpg'; // Asegúrate de tener una imagen adecuada

function BookingForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bookingData, setBookingData] = useState({
        eventType: '',
        date: '',
        time: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
          .then((result) => {
              alert("Thank you for your booking inquiry. We will contact you soon!");
              setBookingData({ eventType: '', date: '', time: '', details: '' });
          }, (error) => {
              alert("Failed to send booking. Please try again later.");
          });
    };

    return (
        <div className="bg-[#F7F7F7] relative">
            <Helmet>
                <title>Book Venue or Private Boat | Lake Barrine Teahouse</title>
            </Helmet>
            <div className="mx-auto p-6">
                <div className="text-center font-rufina text-lg md:text-xl lg:text-2xl text-custom-green mt-20 mb-20">
                    <p>Complete the form to let us know about your function or event. We'll get back to you within the day.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event type</label>
                            <select id="eventType" name="eventType" value={bookingData.eventType} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50">
                                <option value="">Select an Event Type</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Friends day out">Friends day out</option>
                                <option value="Corporate event">Corporate event</option>
                                <option value="Christmas party">Christmas party</option>
                                <option value="School celebration">School celebration</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Overnight hire">Overnight hire</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date for the event or function</label>
                                <input type="date" id="date" name="date" value={bookingData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" />
                            </div>
                            <div className="md:w-1/2">
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Function or event time</label>
                                <select id="time" name="time" value={bookingData.time} onChange={handleChange} className="mt-1 block w-full rounded-md border border-custom-green px-4 h-12 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50">
                                    <option value="Anytime">Anytime</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details about your event</label>
                            <textarea id="details" name="details" value={bookingData.details} onChange={handleChange} rows="4" className="mt-1 block w-full rounded-md border border-custom-green px-4 focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50" placeholder="Provide any additional details here"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="mt-2 px-4 py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;
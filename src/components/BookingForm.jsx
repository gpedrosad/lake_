import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import HeroSection from '../components/SecondHeroSection';
import Select from 'react-select'; // Importar el componente Select
import contactImage from '/public/images/contact.jpg';

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

    const eventTypeOptions = [
        { value: 'Birthday', label: 'Birthday' },
        { value: 'Friends day out', label: 'Friends day out' },
        { value: 'Corporate event', label: 'Corporate event' },
        { value: 'Christmas party', label: 'Christmas party' },
        { value: 'School celebration', label: 'School celebration' },
        { value: 'Wedding', label: 'Wedding' },
        { value: 'Engagement', label: 'Engagement' },
        { value: 'Overnight hire', label: 'Overnight hire' },
        { value: 'Other', label: 'Other' }
    ];

    const timeOptions = [
        { value: 'Anytime', label: 'Anytime' },
        { value: 'Morning', label: 'Morning' },
        { value: 'Afternoon', label: 'Afternoon' },
        { value: 'Evening', label: 'Evening' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (selectedOption, action) => {
        setBookingData(prev => ({
            ...prev,
            [action.name]: selectedOption.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert bookingData to form data for EmailJS if necessary or use API directly
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
                    <h1 class="text-2xl">Ready to hire our venue or private boat for a function?</h1>
                    <br></br>
                    <p>Complete the form to let us know about your function or event. We'll get back to you within the day.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event type</label>
                            <Select
                                id="eventType"
                                name="eventType"
                                options={eventTypeOptions}
                                value={eventTypeOptions.find(option => option.value === bookingData.eventType)}
                                onChange={(option) => handleSelectChange(option, { name: 'eventType' })}
                                className="basic-single"
                                classNamePrefix="select"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date for the event or function</label>
                                <input type="date" id="date" name="date" value={bookingData.date} onChange={handleInputChange} className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-1.5 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                            </div>
                            <div className="md:w-1/2">
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Function or event time</label>
                                <Select
                                    id="time"
                                    name="time"
                                    options={timeOptions}
                                    value={timeOptions.find(option => option.value === bookingData.time)}
                                    onChange={(option) => handleSelectChange(option, { name: 'time' })}
                                    className="basic-single"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details about your event</label>
                            <textarea id="details" name="details" value={bookingData.details} onChange={handleInputChange} rows="4" className="mt-1 block w-full rounded-md border border-gray-700 px-4 focus:border-gray-700 focus:ring focus:ring-border-gray-700 focus:ring-opacity-50" placeholder="Provide any additional details here"></textarea>
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
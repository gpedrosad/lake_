import React from 'react';
import GreenButton from './GreenButton';

const HoursAndBookingInfo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-second-green shadow-lg max-w-2xl p-20">
        <p className="font-rufina font-bold text-3xl mb-2 text-custom-green p-5">Open 7 days a week</p>
        <p className="mb-1 font-bold text-custom-green">Mon – Sun <span class="font-normal">12pm – 3pm</span></p>
        <p className="mb-2 text-custom-green">
          <span class="font-bold">Dinner: Sun – Thu</span> – 5:30 – 9pm; Fri/Sat – 5:30pm – 9.30pm
        </p>
        <p className="mb-2 text-custom-green">
          Bookings are highly recommended. For groups of 10 people or under, bookings can be made online.
        </p>
        <p class="text-custom-green">
          For groups of over 10 people, please call to book (00) 0000000
        </p>

        <button class="bg-third-green text-white py-5 px-12 m-10">
            Book now
        </button>
      </div>
        
        
      
    </div>
  );
};

export default HoursAndBookingInfo;
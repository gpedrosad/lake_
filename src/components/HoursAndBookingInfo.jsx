import React from 'react';
import GreenButton from './GreenButton';

const HoursAndBookingInfo = () => {
  return (
    <div className="flex justify-center items-center h-2/3 bg-second-green">
      <div className="text-center bg-second-green max-w-2xl p-20">
        <p className="font-rufina font-bold text-3xl mb-2 text-custom-green p-5">Open 7 days a week</p>
        <p className="mb-1 font-bold text-custom-green">Mon – Sun <span className="font-normal">12pm – 3pm</span></p>
        <p className="mb-2 text-custom-green">
          <span className="font-bold">Dinner: Sun – Thu</span> – 5:30 – 9pm; Fri/Sat – 5:30pm – 9.30pm
        </p>
        <p className="mb-2 text-custom-green">
          Bookings are highly recommended. For groups of 10 people or under, bookings can be made online.
        </p>
        <p className="text-custom-green">
          For groups of over 10 people, please call to book (00) 0000000
        </p>
        <a href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" target="_blank">
        <button className="bg-third-green text-white py-5 px-12 m-10">
          Book now
        </button>
        </a>
      </div>
    </div>
  );
};

export default HoursAndBookingInfo;
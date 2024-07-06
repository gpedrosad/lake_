import React from 'react';
import GreenButton from './GreenButton';

const HoursAndBookingInfo = () => {
  return (
    <div className="flex justify-center items-center h-2/3 bg-second-green xl:text-2xl">
      <div className="text-center bg-second-green max-w-2xl p-15">
        <p className="font-rufina font-bold text-3xl mb-2 text-custom-green p-5 xl:text-5xl">Open 7 days a week</p>
        <p className="mb-1 font-bold text-custom-green">Monday to Friday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Saturday & Sunday <span className="font-normal">8:30 am - 15:00 pm</span></p>
        <br></br>
        <p className="text-center mb-1 text-custom-green">Bookings are highly recommended. For groups of 10 people or under, bookings can be made online</p>
        <br></br>
        <p className="text-center mb-1 text-custom-green whitespace-nowrap">For groups of over 10 people, please call to book (07) 4095 3847</p>

        <p className="mb-2 text-custom-green">
        </p>
        <p className="text-custom-green">
        </p>
        <a href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" target="_blank">
        <button className="bg-third-green text-white py-4 px-10 m-10 whitespace-nowrap">
          Book now
        </button>
        </a>
      </div>
    </div>
  );
};

export default HoursAndBookingInfo;
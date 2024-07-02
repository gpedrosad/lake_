import React from 'react';
import GreenButton from './GreenButton';

const HoursAndBookingInfo = () => {
  return (
    <div className="flex justify-center items-center h-2/3 bg-second-green xl:text-2xl">
      <div className="text-center bg-second-green max-w-2xl p-20">
        <p className="font-rufina font-bold text-3xl mb-2 text-custom-green p-5 xl:text-4xl">Open 7 days a week</p>
        <p className="mb-1 font-bold text-custom-green">Monday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Tuesday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Wednesday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Thursday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Friday <span className="font-normal">9 am – 14:30 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Saturday <span className="font-normal">8:30 am - 15:00 pm</span></p>
        <p className="mb-1 font-bold text-custom-green">Sunday <span className="font-normal">8:30 am - 15:00 pm</span></p>

        <p className="mb-2 text-custom-green">
        </p>
        <p className="text-custom-green">
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
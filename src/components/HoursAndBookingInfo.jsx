import React from 'react';
import GreenButton from './GreenButton';

const HoursAndBookingInfo = () => {
  return (
    <div className="flex justify-center items-center h-2/3 bg-second-green xl:text-2xl">
      <div className="text-center bg-second-green max-w-2xl p-15">
        <p className="font-rufina font-bold text-3xl mb-2 text-custom-green p-5 xl:text-5xl">Open 7 days a week</p>
        <p className="text-center text-custom-green px-2 ml-2 mr-4 font-bold">9.00 am - 15.00 pm</p>
        <br />
        <p className="text-center text-custom-green px-2 ml-2 mr-4">For groups of 20 people or under, bookings can be made online</p>
        <br></br>
        <p className="text-center text-custom-green px-2 ml-2 mr-4">Bookings are highly recommended.<br></br> For groups of 20 people or under, bookings can be made online</p>
        <br></br>
        <p className="text-center text-custom-green px-2 mr-2 ml-4">For groups of over 20 people, <br></br>please call to book 0455916688</p>
        <p className="text-center text-custom-green px-2 mr-2 ml-4 font-bold mt-10">Please note: Our kitchen closes 30 minutes before the teahouse closing time.</p>
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
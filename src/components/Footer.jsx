
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <>
      <div className="bg-custom-green grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center">
          <img src="../src/img/logo.png" className="p-10"/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-rufina font-bold text-white text-3xl sm:text-3xl md:text-4xl lg:text-3xl pb-5">Contact</h1>
          <p className="text-white">+1 86 852 346 000</p>
          <p className="text-white mb-10">info@lakebarrine.com</p>
          <span className="text-white">Lake Barrine.</span>
          <span className="text-white">Australia, 90230</span>
        </div>
        <div className="flex flex-col items-center justify-center p-16">
          <h1 className="whitespace-nowrap font-rufina font-bold text-white text-3xl md:text-3xl lg:mr-10 text-3xl pb-5">Opening hours</h1>
          <p className="sm:mr-0 text-white lg:mr-10">Monday to Sunday</p>
          <p className="sm:mr-0 text-white lg:mr-10">9:00 am - 10:00 pm</p>
          <h1 className="whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-white text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">Stay connected</h1>
          <SocialMediaIcons/>
        </div>
      </div>

      <div className="bg-custom-green grid grid-cols-1 place-items-center">
        <div className="w-full bg-yellow-500 h-0.5"></div>
        <p className="m-6 text-white pt-10">© 2024. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
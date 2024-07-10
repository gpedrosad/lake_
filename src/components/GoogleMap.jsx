import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-full mx-auto my-8 shadow-lg overflow-hidden rounded-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.437344300034!2d145.6364761759596!3d-17.24606376037498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69789a244f490045%3A0x41798f7aa8c49235!2sLake%20Barrine%20Teahouse!5e0!3m2!1ses-419!2sar!4v1720650136383!5m2!1ses-419!2sar"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
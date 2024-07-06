import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-full mx-auto my-8 shadow-lg overflow-hidden rounded-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.879562980558!2d145.6114306!3d-17.2730607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69789ae6358d0a55%3A0xba771582e313e8e5!2sGillies%20Range%20Rd%2C%20Yungaburra%20QLD%204884%2C%20Australia!5e0!3m2!1ses-419!2sar!4v1720297992268!5m2!1ses-419!2sar"
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
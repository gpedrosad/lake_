import React from 'react';

const VideoBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden'
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
          src="https://www.youtube.com/embed/vXUTXtgtJmE?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=vXUTXtgtJmE&modestbranding=1&iv_load_policy=3&fs=0&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Hero Banner Video"
        ></iframe>
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
      </div>
    </div>
  );
};

export default VideoBanner;
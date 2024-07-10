import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center space-x-4 md:ml-14">
      <a href="https://www.instagram.com/lakebarrine" className="text-white text-[40px] md:text-[30px]" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href="https://www.facebook.com/lakebarrine" className="text-white text-[40px] md:text-[30px]" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.youtube.com/user/lakebarrine" className="text-white text-[40px] md:text-[30px]" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon />
      </a>
    </div>
    );
};

export default SocialMediaIcons;
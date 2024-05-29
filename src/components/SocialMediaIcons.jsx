import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center space-x-4">
            <InstagramIcon style={{ fontSize: 40, color: 'white' }} />
            <XIcon style={{ fontSize: 40, color: 'white' }} />
            <FacebookIcon style={{ fontSize: 40, color: 'white' }} />
            <YouTubeIcon style={{ fontSize: 40, color: 'white' }} />
        </div>
    );
};

export default SocialMediaIcons;
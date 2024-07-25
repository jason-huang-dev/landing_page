import React from 'react';
import { socials } from '../constants';

const SocialLinks = () => {
  return (
    <div className="social-links flex space-x-1">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon flex items-center justify-center"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-12 h-12 object-contain"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

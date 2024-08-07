import React from 'react';

const CustomButton = ({ imageSrc, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-60 max-w-80 flex items-center rounded-lg border-2 border-primary text-primary  py-2 px-4 transition duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-110"
    >
      <img src={imageSrc} alt="button icon" className="mr-2 w-5 rounded" />
      <span className=" mx-auto">{text}</span>
    </a>
  );
};

export default CustomButton;

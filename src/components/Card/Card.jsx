import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({ imageSrc, text, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className="bg-white shadow-lg border border-1 border-solid border-gray-400 p-1 rounded-lg  overflow-hidden cursor-pointer w-full" onClick={handleClick}>
        <img src={imageSrc} alt={text} className="rounded-lg w-full h-auto" style={{ objectFit: 'cover' }} loading="lazy" />
        <p className="font-semibold text-center text-primary-color text-sm lg:text-base my-1 ">{text}</p>
      </div>

      {/* Back Side */}
      <div className="bg-gray-100 shadow-lg border border-1 border-solid border-gray-400 p-1 rounded-lg  overflow-hidden cursor-pointer relative w-full" onClick={handleClick}>
        <img src={imageSrc} alt={text} className="rounded-lg w-full h-auto blur grayscale" style={{ objectFit: 'cover' }} loading="lazy" />
        <p className="font-semibold text-center text-primary-color text-sm lg:text-base my-1 blur grayscale">{text}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-32  flex items-center justify-center rounded-lg border-2 border-primary text-primary py-2 px-2 transition duration-300 ease-in-out hover:bg-primary hover:text-white"
        >
          Menuju Link
        </a>
      </div>
    </ReactCardFlip>
  );
};

export default Card;

import React from 'react';
import CustomButton from './CustomButton'; // Pastikan nama file sesuai
import dataJson from '../../data/data.json'; // Path ke data.json

const Button = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 mt-10 mb-48">
        {dataJson.buttons.map((button) => (
          <CustomButton key={button.id} imageSrc={button.imageSrc} text={button.text} link={button.link} />
        ))}
      </div>
    </>
  );
};

export default Button;

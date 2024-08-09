import React from 'react';
import Card from '../Card/Card';
import dataJson from '../../data/data.json'; // Path ke data.json
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Button = () => {
  return (
    <>
      <h1 className="text-center mt-4 mb-3 font-bold">--- Tap untuk Flip menuju link ---</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }} className="pt-4 px-2">
        <Masonry gutter="16px">
          {' '}
          {/* Adjust the gutter size as needed */}
          {dataJson.buttons.map((button) => (
            <Card key={button.id} imageSrc={button.imageSrc} text={button.text} link={button.link} className="m-2" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Button;

import React from 'react';
import dataJson from '../../data/data.json';

const Footer = () => {
  return (
    <div className="flex justify-center py-2 border-gray mt-10">
      {' '}
      {/* Menambahkan flex untuk meratakan */}
      <img src={dataJson.footer} alt="Footer" className="w-28" />
    </div>
  );
};

export default Footer;

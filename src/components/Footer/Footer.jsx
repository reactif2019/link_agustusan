import React from 'react';
import dataJson from '../../data/data.json';

const Footer = () => {
  return (
    <div className="flex justify-center py-5">
      {' '}
      {/* Menambahkan flex untuk meratakan */}
      <img src={dataJson.footer} alt="Header" className="mb-10 w-96 opacity-50 hover:opacity-100" />
    </div>
  );
};

export default Footer;

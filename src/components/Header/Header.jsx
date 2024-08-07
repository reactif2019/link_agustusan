import React from 'react';
import dataJson from '../../data/data.json';

const Header = () => {
  return (
    <div className="bg-primary  flex justify-center py-5">
      {' '}
      {/* Menambahkan flex untuk meratakan */}
      <img src={dataJson.header} alt="Header" className="mb-10 max-w-96" />
    </div>
  );
};

export default Header;

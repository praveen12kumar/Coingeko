// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      <p className="ml-4 text-lg text-blue-500">Loading...</p>
    </div>
  );
};

export default Loader;

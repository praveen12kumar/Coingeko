// components/Error.js
import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-full p-4">
      <p className="text-red-500 font-semibold text-lg">{message}</p>
    </div>
  );
};

export default Error;

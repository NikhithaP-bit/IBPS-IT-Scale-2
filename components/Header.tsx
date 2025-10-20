
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          IBPS IT Officer <span className="text-indigo-600">Pro</span>
        </h1>
        <div className="flex items-center">
            <span className="text-sm text-gray-500 hidden md:block">AI-Powered Study Assistant</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

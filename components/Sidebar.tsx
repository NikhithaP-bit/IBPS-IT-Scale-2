
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SYLLABUS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">Subjects</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          {SYLLABUS.map((subject) => (
            <NavLink
              key={subject.id}
              to={`/${subject.id}`}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2 text-gray-100 rounded-lg transition-colors duration-200 transform hover:bg-gray-700 hover:text-white ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              {subject.icon}
              <span className="mx-4 font-medium">{subject.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

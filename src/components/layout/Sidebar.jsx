import React from 'react';
import { HiOutlineViewBoards, HiOutlineCog, HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r shadow fixed top-0 left-0 p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-blue-700">JobSeeker</h2>
      <nav className="flex flex-col gap-4 text-gray-700">
        <NavLink to="/home" className={({ isActive }) => `flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'}`}>
          <HiOutlineHome className="w-5 h-5" />
          Home
        </NavLink>
        <Link to="/ Boards" className="flex items-center gap-2 hover:text-blue-600">
          <HiOutlineViewBoards className="w-5 h-5" />
          Boards
        </Link>
        <Link to="/Settings" className="flex items-center gap-2 hover:text-blue-600">
          <HiOutlineCog className="w-5 h-5" />
          Settings
        </Link>
      </nav>
    </div>
  );
}

"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link className="text-xl font-bold text-gray-900" href="/">
              Apple Fix-Care
              </Link>
            </div>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            <Link className="text-gray-700 hover:text-gray-900" href="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-gray-900" href="/about">
              About
            </Link>
            <Link className="text-gray-700 hover:text-gray-900" href="/services">
              Services
            </Link>
            <Link className="text-gray-700 hover:text-gray-900" href="/contact">
              Contact
            </Link>
          </div>
          {/* Right Side Button */}
          <div className="flex items-center text-2xl font-bold">
            <AiOutlineShoppingCart/>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out no-scrollbar`}>
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4">
          <Link className="text-gray-700 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/about">
            About
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/services">
            Services
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;

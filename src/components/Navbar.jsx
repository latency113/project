import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to control the dropdown menu
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Toggle dropdown menu visibility
  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <nav className='shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <NavLink to="/" className="flex items-center">
              <img src={Logo} className='w-16' alt="Logo" />
              <div className='font-bold p-2 text-green-500 text-xl sm:text-2xl'>
                <span>Super Market</span>
              </div>
            </NavLink>
          </div>
          <div className='flex items-center space-x-4'>
            {/* Category Dropdown for mobile */}
        
            
            {/* Category Button for desktop */}
            <div className='hidden md:flex items-center bg-gray-400 p-2 hover:bg-gray-500 rounded-lg text-white font-bold'>
            <button
                className='bg-gray-400 p-2 hover:bg-gray-500 rounded-lg text-white font-bold flex items-center'
                onClick={toggleCategoryMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical">
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="9" cy="5" r="1" />
                  <circle cx="9" cy="19" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <circle cx="15" cy="5" r="1" />
                  <circle cx="15" cy="19" r="1" />
                </svg>
                <span className='ml-2'>Category</span>
              </button>
              {isCategoryOpen && (
                <div className='absolute top-full right-0 mt-2 bg-gray-400 text-white rounded-lg shadow-lg'>
                  <NavLink to="/category1" className='block px-4 py-2 hover:bg-gray-500'>Category 1</NavLink>
                  <NavLink to="/category2" className='block px-4 py-2 hover:bg-gray-500'>Category 2</NavLink>
                  <NavLink to="/category3" className='block px-4 py-2 hover:bg-gray-500'>Category 3</NavLink>
                </div>
              )}
            </div>



            <div className='relative'>
              <NavLink to="/cart" className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket hover:bg-slate-200 rounded-xl">
                  <path d="m15 11-1 9" />
                  <path d="m19 11-4-7" />
                  <path d="M2 11h20" />
                  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                  <path d="M4.5 15.5h15" />
                  <path d="m5 11 4-7" />
                  <path d="m9 11 1 9" />
                </svg>
                <span className='absolute top-0 right-0 bg-green-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center'>0</span>
              </NavLink>
            </div>
            <div className='hidden md:flex'>
              <NavLink to="/login" className='bg-green-500 hover:bg-green-700 p-2 rounded-lg font-bold text-white'>
                Login
              </NavLink>
            </div>
          </div>


          <div className='md:hidden'>
            <button className='text-gray-500'
            onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
          </div>


          {isMobileMenuOpen && (
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-50'>
            <div className='flex flex-col items-center py-8'>
              <NavLink to="/" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Home</NavLink>
              <NavLink to="/category1" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Category 1</NavLink>
              <NavLink to="/category2" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Category 2</NavLink>
              <NavLink to="/category3" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Category 3</NavLink>
              <NavLink to="/cart" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Cart</NavLink>
              <NavLink to="/login" className='text-white text-xl py-2' onClick={toggleMobileMenu}>Login</NavLink>
            </div>
          </div>
        )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

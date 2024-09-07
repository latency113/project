import React, { useState } from 'react';
import Logo from '/images/logo.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const Navbar = () => {
   // State to control the dropdown mobile menu 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <nav className='shadow-md'>
      
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16 '>




            {/* หมวดหมู่สำหรับ Mobile */}
            <div className='md:hidden'>
              <button className='text-gray-500'
              onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></svg>
              </button>
            </div>



            {isMobileMenuOpen && (
            <div className='fixed inset-0 bg-white z-50 h-[300px] rounded-l-2xl rounded-r-2xl w-3/4'>
              <div className='font-semibold items-center py-8'>
                  <div className='flex items-center'>
                    <img src={Logo} className='w-16' alt="Logo" />
                    <div className='font-bold p-2 text-purple-500 text-xl sm:text-2xl'>
                      <span>Super Market</span>
                    </div>
                </div>
                <div className='flex p-[15px] space-x-2'>
                  <NavLink to="/signin" className='border border-purple-500 py-3 px-10 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 w-2/4' onClick={toggleMobileMenu}>เข้าสู่ระบบ</NavLink>
                  <NavLink to="/signup" className='bg-purple-500 py-3 px-10 rounded-full text-white hover:bg-purple-600 transition-all duration-300 w-2/4' onClick={toggleMobileMenu}>ลงทะเบียน</NavLink>
                </div>
              </div>
            </div>
            )}

            <div className='flex items-center'>
              <NavLink to="/" className="flex items-center">
                <img src={Logo} className='w-16' alt="Logo" />
                <div className='font-bold p-2 text-purple-500 text-xl sm:text-2xl'>
                  <span>Super Market</span>
                </div>
              </NavLink>
            </div>




              {/* ตะกร้า */}
          <div className='flex items-center space-x-4'>
                <div className='relative'>
                <NavLink to="/cart" className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket hover:bg-slate-200 rounded-xl"><path d="m15 11-1 9" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" /><path d="M4.5 15.5h15" /><path d="m5 11 4-7" /><path d="m9 11 1 9" /></svg>
                  <span className='absolute top-0 right-0 bg-purple-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </NavLink>
                </div>




              {/* ปุ่ม Login */}
            <div className='hidden md:flex'>
              <NavLink to="/login" className="hover:bg-gray-200 p-1 rounded-full">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </button>
              </NavLink>
            </div>
          </div>


        </div>
      </div>
    </nav>
  );
}

export default Navbar;

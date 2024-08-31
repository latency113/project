/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='shadow-md'>
      <div className='flex justify-between p-3 mx-auto h-16'>
          <div className='flex items-center'>
              <img src={Logo} className='w-16' />
              <div className='font-bold p-4 text-green-500 text-2xl'>
                  <span>Super Market</span> 
              </div>
              <div className='bg-gray-400 p-3 hover:bg-gray-500 rounded-lg text-white font-bold flex w-28'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
              <span>Category</span>
              </div>
          </div>
          <div className='flex items-center'>
      <div className='p-4 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-basket hover:bg-slate-200 rounded-xl"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
          <div className='bg-green-500 text-white font-bold p-1 m-1 rounded-xl'>
              <span className='text-center p-1'>0</span>
          </div>
      </div>
      <div className='bg-green-500 hover:bg-green-700 p-3 rounded-lg font-bold text-white'>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
      </div>
    </nav>
  )
}

export default Navbar
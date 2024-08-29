/* eslint-disable no-unused-vars */
import React from 'react'
import Menu from './Menu'
import Logo from '../images/logo.png'

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
          <Menu/>
      </div>
    </nav>
  )
}

export default Navbar
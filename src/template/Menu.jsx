/* eslint-disable no-unused-vars */
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Menu = () => {
  return (
    <div className='flex items-center'>
      <div className='p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      </div>
      <div className='bg-green-500 hover:bg-green-700 p-3 rounded-lg font-bold text-white'>
        <a href="#" className='hober'>Login</a>
      </div>
    </div>
  )
}

export default Menu
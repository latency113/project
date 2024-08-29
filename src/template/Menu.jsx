/* eslint-disable no-unused-vars */
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Menu = () => {
  return (
    <div className='flex items-center'>
      <div className='p-4 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-basket hover:bg-slate-200 rounded-xl"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
          <div className='bg-green-500 text-white font-bold p-1 m-1 rounded-xl'>
              <span className='text-center p-1'>0</span>
          </div>
      </div>
      <div className='bg-green-500 hover:bg-green-700 p-3 rounded-lg font-bold text-white'>
        <a href="#">Login</a>
      </div>
    </div>
  )
}

export default Menu
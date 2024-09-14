/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <hr />
    <div className='bg-white shadow-sm p-14'>


        <div className='flex flex-col text-lg md:flex-row md:justify-around items-center space-y-4 md:space-y-0 md:space-x-4 font-semibold'>

          
          <div className='flex space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard">
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            </svg>
            <div className='text-center'>
              <h1 className='text-lg'>เกี่ยวกับ Makpro</h1>
              <NavLink to='/about'>
                <p className='text-sm mt-2'>ข้อมูลเว็บไซต์</p>
              </NavLink>
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
              <NavLink to='/contact'>
                <p className='text-lg'>ติดต่อเรา</p>
              </NavLink>
          </div>

        </div>


      </div>
    <p className='bg-purple-500 text-center font-medium text-white p-2'>©Copyright 2024:Makpro</p>
    </>
  )
}

export default Footer
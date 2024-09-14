import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center pt-20'>
        <div className='text-center p-6 md:p-20'>
          <p className='text-xl md:text-2xl font-semibold'>ไม่พบหน้าที่ต้องการ</p>
          <NavLink to='/'>
            <button className='bg-purple-500 rounded-full text-white font-semibold w-full md:w-auto my-5 p-3 md:px-6 hover:bg-purple-600 transition-all'>
              กลับไปหน้าแรก
            </button>
          </NavLink>
        </div> 
      </div>
    </Layout>
  )
}

export default NotFound;

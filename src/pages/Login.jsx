import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-purple-600 text-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden'>
          {/* Section ข้อความต้อนรับ */}
          <div className='flex-1 flex flex-col justify-center items-center p-10'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>ยินดีต้อนรับ</h1>
            <p className='text-lg md:text-2xl'>เข้าสู่เว็บซุปเปอร์มาร์เก็ต</p>
          </div>

          {/* Section ปุ่มเข้าสู่ระบบและลงทะเบียน */}
          <div className='bg-white flex-1 p-8 lg:p-16'>
            <div className='flex flex-col space-y-6'>
              <button className='border border-purple-500 py-3 px-10 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300'>
                <NavLink to='/signin'>เข้าสู่ระบบ</NavLink>
              </button>
              <button className='bg-purple-500 py-3 px-10 rounded-full text-white hover:bg-purple-600 transition-all duration-300'>
                <NavLink to='/signup'>ลงทะเบียน</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

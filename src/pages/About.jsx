/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <>
        <h1 className='bg-gradient-to-r from-fuchsia-500 via-violet-600 to-pink-500 bg-clip-text text-transparent text-center text-2xl md:text-4xl font-bold p-4'>ข้อมูลเว็บไซต์</h1>
        <div className='bg-white max-w-full flex justify-center p-4'>
          <hr />
          <div className='bg-purple-200 rounded-lg text-purple-900 p-4 font-medium w-full max-w-xl md:max-w-2xl lg:max-w-3xl'>
            <p className="text-sm md:text-base mb-2">
              เว็บไซต์นี้สร้างขึ้นเพื่อศึกษาและพัฒนาด้วย React Js
            </p>
            <p className="text-sm md:text-base mb-2">
              เป็นเว็บเกี่ยวกับการซื้อขายในระบบซุปเปอร์มาร์เก็ตแบบออนไลน์ จัดทำขึ้นเพื่อไม่ให้เสียเวลาในการไปหน้าร้านโดยการเช็คของก่อนได้ สามารถเช็คสินค้าได้ว่ามีในสต็อกหรือไม่ ก่อนออกไปซื้อหน้าร้าน
            </p>
            <p className="text-sm md:text-base mb-2">
              จัดทำโดย
            </p>
            <ul className="list-disc pl-4 text-sm md:text-base">
              <li>นายขัน สามนวล เลขที่ 3</li>
              <li>นายชนะชล แก้วน้ำมิตร เลขที่ 6</li>
              <li>นายธีรเดช แก้วสง่า เลขที่ 17</li>
              <li>นายพิสุทธิรัตน์ พูนสิทธิโชคชัย เลขที่ 24</li>
            </ul>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default About;

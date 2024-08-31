/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../template/Layout'

const About = () => {
  return (
    <Layout>
      <>
      <h1 className='text-center text-4xl font-bold p-4'>ข้อมูลเว็บไซต์</h1>
      <div className='bg-white max-w-full flex justify-center p-4'>
          <hr />
          <div className='bg-green-200 rounded-lg p-4 font-medium text-center w-2/4'> 
              <p>
                เว็บไซต์นี้สร้างขึ้นเพื่อศึกษาและพัฒนาด้วย React Js
              </p>
              <p>จัดทำโดย</p>
          </div>
      </div>
      </>
    </Layout>
  )
}

export default About
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold text-center mb-6">ติดต่อเรา</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">ส่งข้อความถึงเรา</h4>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="กรุณากรอกชื่อของคุณ" 
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="กรุณากรอกอีเมลของคุณ" 
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">ข้อความ</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="กรุณากรอกข้อความของคุณ" 
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button 
                type="submit" 
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">ข้อมูลติดต่อ</h4>
            <div className="mb-4">
              <h5 className="font-medium text-gray-800">ที่อยู่</h5>
              <p>99/1 ถนนเทศา ตำบลห้วยจรเข้</p>
            </div>
            <div className="mb-4">
              <h5 className="font-medium text-gray-800">อีเมล</h5>
              <p><a href="Makproject@example.com" className="text-purple-500">Makproject@example.com</a></p>
            </div>
            <div className="mb-4">
              <h5 className="font-medium text-gray-800">หมายเลขโทรศัพท์</h5>
              <p><a href="tel:+66999999023" className="text-purple-500">+66 99 999 9023</a></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

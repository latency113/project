import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold text-center mb-6">เกี่ยวกับเว็บไซต์ของเรา</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">เกี่ยวกับเรา</h4>
            <p className="text-gray-700">
              ยินดีต้อนรับสู่ Super Market เราเป็นซูเปอร์มาร์เก็ตออนไลน์ที่มุ่งมั่นในการนำเสนอสินค้าคุณภาพสูงและบริการที่ยอดเยี่ยมให้กับลูกค้า
              ของเรา ตั้งแต่การเลือกซื้อสินค้าจนถึงการจัดส่ง เรามุ่งมั่นที่จะทำให้การช้อปปิ้งออนไลน์ของคุณเป็นประสบการณ์ที่สะดวกสบายและน่าพอใจ
              ด้วยการเลือกสินค้าหลากหลายและการบริการลูกค้าที่เป็นกันเอง
            </p>
            <p className="mt-4 text-gray-700">
              เราเชื่อว่าการช้อปปิ้งไม่ควรเป็นแค่การซื้อของเท่านั้น แต่ควรเป็นประสบการณ์ที่สนุกสนานและคุ้มค่า 
              เราจึงมุ่งเน้นที่การคัดสรรสินค้าที่ดีที่สุดในราคาที่เหมาะสม และให้บริการที่ทำให้ลูกค้ารู้สึกพึงพอใจ
            </p>
          </div>

          {/* Our Values Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">ค่านิยมของเรา</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                <strong>ความมุ่งมั่นในคุณภาพ:</strong> เราคัดสรรสินค้าที่มีคุณภาพสูงสุดเพื่อให้ลูกค้าของเราได้รับสิ่งที่ดีที่สุด
              </li>
              <li className="mb-2">
                <strong>การบริการลูกค้าที่ยอดเยี่ยม:</strong> ทีมงานของเราพร้อมให้ความช่วยเหลือและตอบสนองต่อความต้องการของลูกค้า
              </li>
              <li className="mb-2">
                <strong>ความสะดวกสบาย:</strong> เรามุ่งเน้นที่การทำให้การช้อปปิ้งออนไลน์ของคุณเป็นเรื่องง่ายและสะดวกสบาย
              </li>
              <li className="mb-2">
                <strong>ความรับผิดชอบต่อสังคม:</strong> เรามุ่งมั่นที่จะทำงานอย่างมีความรับผิดชอบต่อสังคมและสิ่งแวดล้อม
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;

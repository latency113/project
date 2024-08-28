/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../template/Layout";
import Apple from "../assets/Apple.png";
import Orange from "../assets/Orange.png";
import Meat from "../assets/Meat.png";
import Cheese from "../assets/Cheese.png";
import Salmon from "../assets/Salmon.png";
import Banner from "../template/Banner";
// import Bbg from "../assets/Banner.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="bg-white mt-1">
        <div className="p-4">
          <h1 className="text-6xl font-bold text-center text-green-200">สินค้าต่างๆ</h1>
          <br />
          
          {/* <div className="px-5 pb-5 flex justify-center">
            <img src={Bbg} className="rounded-2xl w-3/4" />
          </div> */}

          <div className="grid grid-cols-5">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-lg">
                  ใส่ตะกร้า
                </a>
              </div>
            </div>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={Orange} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    ส้ม 1 ตะกร้า
                  </h5>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  10฿/ลูก
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-lg">
                  ใส่ตะกร้า
                </a>
              </div>
            </div>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={Meat} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    เนื้อ
                  </h5>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  150฿
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-lg">
                  ใส่ตะกร้า
                </a>
              </div>
            </div>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={Cheese} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    ชีส 1 แพ็ค
                  </h5>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  120฿
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-lg">
                  ใส่ตะกร้า
                </a>
              </div>
            </div>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={Salmon} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    ชีส 1 แพ็ค
                  </h5>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  120฿
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-lg">
                  ใส่ตะกร้า
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

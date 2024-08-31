/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../template/Layout";
import Apple from "../images/Apple.png";
import Orange from "../images/Orange.png";
import Meat from "../images/Meat.png";
import Cheese from "../images/Cheese.png";
import Salmon from "../images/Salmon.png";
import Original from "../images/Smart Balance Original.png";
import Ds from "../images/ds.png";
import Eggland from "../images/Eggland.png";
import Velveeta from "../images/Velveeta (1).png";
import Bbg from "../images/Banner.jpg";
import { Carousel } from "flowbite-react";


const Home = () => {
  return (
    <Layout>
      <div className="bg-white mt-1">
        <div className="p-4">

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-4 ">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>


          <div className="px-5 pb-5 flex justify-center">
            <img src={Bbg} className="rounded-2xl w-3/4" />
          </div>

          <h1 className="text-6xl font-bold text-center text-green-500">สินค้าต่างๆ</h1>
          <br />

          <div className="flex space-x-4 mx-auto">


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
                    เนื้อปลา 1 แพ็ค
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
                <img className="p-8 rounded-t-lg" src={Original} alt="product image"/>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Smart Balance 1 ชิ้น
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

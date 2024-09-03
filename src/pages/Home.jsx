/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../template/Layout";
import Apple from "../images/Apple.png";
import Orange from "../images/Orange.png";
import Meat from "../images/Meat.png";
import Cheese from "../images/Cheese.png";
import Salmon from "../images/Salmon.png";
import Original from "../images/Smart Balance Original.png";
import Cheetos from "../images/pngegg.png";
import Eggland from "../images/Eggland.png";
import Velveeta from "../images/Velveeta (1).png";
import Bbg from "../images/Banner.jpg";



const Home = () => {
  return (
    <Layout>
      <div className="bg-white mt-1 p-4">


        {/* wait carousel */}


          <div className="px-5 pb-5 flex justify-center">
            <img src={Bbg} className="rounded-2xl w-3/4" />
          </div>

          <h1 className="text-6xl font-bold text-center text-green-500">สินค้าต่างๆ</h1>
          <br />

          {/* All Product */}

          <div className="grid grid-flow-col gap-4 border border-red-500 justify-center">

            <div className="w-auto bg-white border border-gray-200 p-2 rounded-lg shadow">
              <a href="#">
                <img className="bg:cover min-p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>

                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                
                <div className="flex justify-between">

                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>

                <a href="#">
                  <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                  </div>
                </a>

                </div>
              
            </div>


            <div className=" bg-white border border-gray-200 p-2 rounded-lg shadow">
              <a href="#">
                <img className="bg:cover min-p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>

                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                
                <div className="flex justify-between">

                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>

                <a href="#">
                  <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                  </div>
                </a>

                </div>
              
            </div>

            <div className=" bg-white border border-gray-200 p-2 rounded-lg shadow">
              <a href="#">
                <img className="bg:cover min-p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>

                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                
                <div className="flex justify-between">

                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>

                <a href="#">
                  <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                  </div>
                </a>

                </div>
              
            </div>

            <div className=" bg-white border border-gray-200 p-2 rounded-lg shadow">
              <a href="#">
                <img className="bg:cover min-p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>

                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                
                <div className="flex justify-between">

                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>

                <a href="#">
                  <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                  </div>
                </a>

                </div>
              
            </div>


            <div className=" bg-white border border-gray-200 p-2 rounded-lg shadow">
              <a href="#">
                <img className="bg:cover min-p-8 rounded-t-lg" src={Apple} alt="product image"/>
              </a>

                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    แอปเปิ้ล 1 ตะกร้า
                  </h5>
                
                <div className="flex justify-between">

                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  12฿/ลูก
                </span>

                <a href="#">
                  <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                  </div>
                </a>

                </div>
              
            </div>



          </div>
        
      </div>
    </Layout>
  );
};

export default Home;

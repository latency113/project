/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import Bbg from "/images/Banner.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <Layout>
      <div className="bg-green-100 p-4 md:p-6 lg:p-8">
        
        <div className="px-4 md:px-6 lg:px-8 flex justify-center mb-4">
          <img src={Bbg} className="w-full max-w-4xl rounded-2xl" alt="Banner" />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-green-500 mb-4">
          สินค้าต่างๆ
        </h1>

        {/* All Product */}
        <Products />
      </div>
    </Layout>
  );
};

export default Home;

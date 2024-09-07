/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import Bbg from "/images/Banner.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <Layout>
      <div className="p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-purple-500 mb-4">
          สินค้าต่างๆ
        </h1>

        {/* All Product */}
        <Products />
      </div>
    </Layout>
  );
};

export default Home;

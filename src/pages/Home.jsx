/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import Bbg from "../images/Banner.jpg";
import { NavLink } from "react-router-dom";
import Products from "./Products";




const Home = () => {
  return (
    <Layout>
      <div className="bg-green-100 p-4">


        {/* wait carousel */}


          <div className="px-5 pb-5 flex justify-center">
            <img src={Bbg} className="rounded-2xl w-3/4" />
          </div>

          <h1 className="text-6xl font-bold text-center text-green-500">สินค้าต่างๆ</h1>
          <br />

          {/* All Product */}

                <Products />
        
      </div>
    </Layout>
  );
};

export default Home;

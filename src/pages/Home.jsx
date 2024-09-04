/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
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
import { NavLink } from "react-router-dom";
import Cardprod from "../components/Cardprod";
import Products from "./Products";




const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-300 p-4">


        {/* wait carousel */}


          <div className="px-5 pb-5 flex justify-center">
            <img src={Bbg} className="rounded-2xl w-3/4" />
          </div>

          <h1 className="text-6xl font-bold text-center text-green-500">สินค้าต่างๆ</h1>
          <br />

          {/* All Product */}

        
            <NavLink to="/detail">
                <Products />
            </NavLink>
        
      </div>
    </Layout>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/Layout";
import Products from "./Products";
import SlideShow from "../components/SlideShow";

const Home = () => {
  return (
    <Layout>
      <div className="p-2 md:p-4 lg:p-6 ">
        <div className="bg-purple-100 rounded-xl pt-10">
          <SlideShow/>
        </div>

        <div className="pt-3">
            <Products />
        </div>

      </div>
    </Layout>
  );
};

export default Home;

import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";
import { CartContext } from "../Contexts/CartContext.jsx";
import { products } from "../Data.js";

const Productdetail = () => {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);

  if (!addToCart) {
    console.error("addToCart is undefined");
    return null;
  }

  const product = products.find((p) => p.name === name);

  if (!product) {
    return (
      <Layout>
        <p className="text-3xl text-center pt-20">ไม่พบข้อมูลผลิตภัณฑ์</p>
      </Layout>
    );
  }

  const handleAddToCart = (quantity) => {
    addToCart({ ...product, quantity });
  };

  return (
    <Layout>
      <div className="container mx-auto pt-20">

      <div className="px-1">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700" onClick={() => window.history.back()}>
            กลับไปหน้าแรก
          </button>
      </div>

        <div className="flex flex-col lg:flex-row py-3 gap-3">

        <div className="flex flex-col lg:flex-row bg-white border border-gray-200 p-8 rounded-xl shadow-lg w-full md:w-[55%]">
      <img
        className="w-full md:w-[400px] object-cover mb-6 lg:mb-0 rounded-lg shadow-md"
        src={`/images/${product.image}`}
        alt={product.name}
      />
      <div className="lg:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-6">
          {product.description}
        </p>
        <span className="text-xl lg:text-2xl font-semibold text-purple-600 mb-6">
          {product.price}
        </span>
        <QuantitySelector onAddToCart={handleAddToCart} />
      </div>
    </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg w-[100%] sm:w-[55%]">
            <span className="text-xl font-bold">รีวิวสินค้า
                <input 
                  type="text" 
                  id="name" 
                  placeholder="เขียนรีวิวสินค้าได้เลย" 
                  className="text-sm mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
            </span>
            <span></span>
            <span></span>
          </div>

        </div>



        <div className="bg-gray-100 p-4 rounded-lg mt-2 mb-5">
          <h4 className="text-lg font-semibold">ข้อมูลเพิ่มเติม:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>น้ำหนัก: 1 กิโลกรัม</li>
            <li>แหล่งที่มา: สวนแถวบ้าน</li>
            <li>เหมาะสำหรับการทานสดหรือเก็บไว้ในอุณหภูมิที่เหมาะสม</li>
          </ul>
        </div>


      </div>
    </Layout>
  );
};

export default Productdetail;

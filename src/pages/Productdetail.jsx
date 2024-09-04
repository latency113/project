import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Apple from "/images/Apple.png";
import './productdetail.css';
import QuantitySelector from '../components/QuantitySelector';
import { CartContext } from '../Contexts/CartContext.jsx'; // ตรวจสอบเส้นทางของ CartContext.jsx

const Productdetail = () => {
    const { addToCart } = useContext(CartContext);

    if (!addToCart) {
        console.error("addToCart is undefined");
        return null;
    }

    return (
        <Layout>
            <div className="flex w-auto bg-white border border-gray-200 p-2 rounded-lg shadow mt-5">
            <QuantitySelector onAddToCart={addToCart} />
            </div>
        </Layout>
    );
};

export default Productdetail;

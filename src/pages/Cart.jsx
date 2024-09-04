import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <Layout>
            <div className='bg-gray-100 p-4'>
                <div className=''>
                  <h1>ตะกร้าของฉัน</h1>
                </div>
                
                <div className=''>
                    <h2>Items in Cart: {cartItems}</h2>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

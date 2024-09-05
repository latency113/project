import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    // ฟังก์ชันในการคำนวณยอดรวม
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('฿', ''))), 0).toFixed(2);
    };

    return (
        <Layout>
            <div className='bg-gray-100 p-4'>
                <div>
                  <h1 className='text-2xl font-bold'>ตะกร้าของฉัน</h1>
                </div>
                
                <div className='mt-4'>
                    <h2 className='text-xl font-semibold'>Items in Cart:</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className='flex space-x-5 py-2'>
                                <img className="w-[150px]" src={`/images/${item.image}`} alt={item.name} />
                                <span>{item.name} ({item.quantity})</span>
                                <span>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex justify-end space-x-4 mt-4'>
                    <h2 className='text-xl font-semibold'>ยอดรวม:</h2>
                    <span className='text-lg font-bold'>{calculateTotal()}฿</span>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

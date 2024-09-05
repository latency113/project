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
            <div className='bg-gray-100 p-4 mt-3 mb-3 shadow-sm rounded-lg'>
                <div>
                  <h1 className='text-2xl font-bold'>ตะกร้าของฉัน</h1>
                </div>
                
                <div className='mt-4'>
                    <h2 className='text-xl font-semibold'>สินค้าในตะกร้า</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <div>
                            <li key={index} className='flex space-x-5 py-2'>
                                <img className="w-[100px]" src={`/images/${item.image}`} alt={item.name} />
                                    <span className='font-semibold'>{item.name} ({item.quantity})</span>
                                <div className='flex justify-end'>
                                    <span className='text-red-500 font-bold'>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                                </div>
                            </li>
                            <hr/>
                            </div>
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

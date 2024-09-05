import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

    // ฟังก์ชันในการคำนวณยอดรวม
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('฿', ''))), 0).toFixed(2);
    };

    return (
        <Layout>
            <div className='bg-gray-100 p-4 mt-3 mb-3 shadow-sm rounded-lg'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>ตะกร้าของฉัน</h1>
                </div>

                <div className='mt-4'>
                    <h2 className='text-xl font-semibold mb-4'>สินค้าในตะกร้า</h2>
                    <ul className='space-y-4'>
                        {cartItems.map((item, index) => (
                            <li key={index} className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 py-3'>
                                <img className="w-24 h-24 object-cover rounded" src={`/images/${item.image}`} alt={item.name} />
                                <div className='flex-1 flex flex-col sm:flex-row items-center justify-between'>
                                    <span className='font-semibold text-lg'>{item.name} ({item.quantity})</span>
                                    <div className='flex items-center space-x-2'>
                                        <button onClick={() => decreaseQuantity(item.name)} className='bg-white hover:bg-gray-200 px-2 py-1 rounded-l text-green-500 hover:text-green-700'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
                                        </button>
                                        <button onClick={() => increaseQuantity(item.name)} className='bg-white hover:bg-gray-200 px-2 py-1 rounded-r text-green-500 hover:text-green-700'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                        </button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.name)} className='bg-red-500 hover:bg-red-400 rounded-lg text-white font-bold p-2 mt-2 sm:mt-0'>
                                        ลบสินค้า
                                    </button>
                                    <span className='text-red-500 font-bold text-lg'>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mt-4'>
                    <h2 className='text-xl font-semibold'>ยอดรวม:</h2>
                    <span className='text-lg font-bold'>{calculateTotal()}฿</span>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

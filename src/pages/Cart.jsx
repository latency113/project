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
                  <h1 className='text-2xl font-bold'>ตะกร้าของฉัน</h1>
                </div>
                
                <div className='mt-4'>
                    <h2 className='text-xl font-semibold'>สินค้าในตะกร้า</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <div key={index}>
                            <li className='flex space-x-5 py-2 items-center'>
                                <img className="w-[100px]" src={`/images/${item.image}`} alt={item.name} />
                                <span className='font-semibold'>{item.name} ({item.quantity})</span>
                                <div className='flex justify-between space-x-5 flex-grow items-center'>
                                    <div className='flex font-bold'>
                                        <button onClick={() => decreaseQuantity(item.name)} className='bg-white hover:bg-gray-200 px-[4px] py-[2px] rounded-l-[4px] text-green-500 hover:text-green-700'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
                                        </button>
                                        <button onClick={() => increaseQuantity(item.name)} className='bg-white hover:bg-gray-200 px-[4px] py-[2px] rounded-r-[4px] text-green-500 hover:text-green-700'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                        </button>
                                    </div>
                                        <button onClick={() => removeFromCart(item.name)} className='bg-red-500 hover:bg-red-300 rounded-lg text-white  hover:text-red-700 font-bold p-1'>
                                            ลบสินค้า
                                        </button>
                                    <div className='flex justify-end'>
                                    <span className='text-red-500 font-bold'>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                                    </div>
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

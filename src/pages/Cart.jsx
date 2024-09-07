import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

    // ฟังก์ชันในการคำนวณยอดรวม
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('฿', ''))), 0).toFixed(2);
    };



    //  ฟังก์ชันในการลบสินค้า
    const MySwal = withReactContent(Swal);

    const handleRemoveItem = (itemName) => {
        showAlertRemoveProduct(itemName);
    };
    
    const showAlertRemoveProduct = (itemName) => {
        MySwal.fire({
            title: "ต้องการลบสินค้าหรือไม่?",
            text: "ต้องการลบจำนวนสินค้าทั้งหมดหรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ตกลง",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(itemName);
                MySwal.fire({
                    title: "ลบสินค้าเรียบร้อย!",
                    text: "สินค้าถูกลบออกจากตะกร้าแล้ว",
                    icon: "success",
                    confirmButtonText: "ตกลง"
                });
            }
        });
    };

    return (
        <Layout>
            <div className='bg-white p-8 mt-10 mb-12 shadow-xl rounded-lg'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-purple-700 mb-6'>ตะกร้าสินค้าของคุณ</h1>
                </div>

                <div className='mt-8'>
                    <h2 className='text-3xl font-semibold text-gray-800 mb-6'>สินค้าในตะกร้า</h2>
                    {cartItems.length === 0 ? (
                        <p className="text-lg text-gray-600 text-center">ไม่มีสินค้าในตะกร้า</p>
                    ) : (
                        <ul className='space-y-8'>
                            {cartItems.map((item, index) => (
                                <li key={index} className='flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 py-6 border-b'>
                                    <img className="w-28 h-28 object-cover rounded-lg shadow-md" src={`/images/${item.image}`} alt={item.name} />
                                    <div className='flex-1 flex flex-col sm:flex-row items-center justify-between w-full'>
                                        <span className='font-semibold text-xl text-gray-800'>{item.name} <span className='text-gray-500'>({item.quantity})</span></span>
                                        <div className='flex items-center space-x-3'>
                                            <button onClick={() => decreaseQuantity(item.name)} className='bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-l-lg text-purple-700'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                                                    <path d="M5 12h14"/>
                                                </svg>
                                            </button>
                                            <span className='px-4 py-2 bg-gray-100 rounded-md text-lg font-bold'>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.name)} className='bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-r-lg text-purple-700'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                                                    <path d="M12 5v14"/>
                                                    <path d="M5 12h14"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.name)} className='bg-red-500 hover:bg-red-600 rounded-lg text-white font-bold px-6 py-3 mt-4 sm:mt-0'>
                                            ลบสินค้า
                                        </button>
                                        <span className='text-lg font-bold text-red-600'>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t'>
                    <h2 className='text-3xl font-bold text-gray-800'>ยอดรวม:</h2>
                    <span className='text-3xl font-bold text-purple-700'>{calculateTotal()}฿</span>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;

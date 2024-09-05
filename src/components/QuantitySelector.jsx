import React, { useState } from 'react';

function QuantitySelector({ onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (quantity < 1) {
            console.error("Quantity must be at least 1");
            return;
        }
        onAddToCart(quantity);
    };

    return (
        <div>
            <div className='flex justify-between text-center border rounded-md'>
                <button onClick={() => changeQuantity(-1)}>-</button>
                <input className="border text-center w-10 font-medium" type="text" value={quantity} readOnly />
                <button onClick={() => changeQuantity(1)}>+</button>
            </div>

            <button className="flex space-x-1 text-white bg-green-600 hover:bg-green-800 p-3 rounded-lg mt-3" onClick={handleAddToCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-basket">
                    <path d="m15 11-1 9" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                    <path d="M4.5 15.5h15" />
                    <path d="m5 11 4-7" />
                    <path d="m9 11 1 9" />
                </svg>
                <p>ใส่ตะกร้า</p>
            </button>
        </div>
    );
};

export default QuantitySelector;

import React, { useState } from 'react';

function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState(0);

    const changeQuantity = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const addToCart = () => {
        setCartItems(cartItems + quantity);
        alert(`${quantity} item(s) added to cart!`);
    };

    return (
        <div>
            <div style={styles.quantityContainer}>
                <button style={styles.quantityBtn} onClick={() => changeQuantity(-1)}>-</button>
                <input
                    type="text"
                    value={quantity}
                    readOnly
                    style={styles.quantityInput}
                />
                <button style={styles.quantityBtn} onClick={() => changeQuantity(1)}>+</button>
            </div>
            <div className='flex'>
            <button style={styles.addToCartBtn} onClick={addToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>  
                <p>Add to Cart</p>
            </button>
            </div>
            <p>Items in Cart: {cartItems}</p>
        </div>
    );
}

const styles = {
    quantityContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '120px',
        justifyContent: 'space-between',
        padding: '5px',
        marginBottom: '10px',
    },
    quantityBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '24px',
        color: '#00bbb1',
        cursor: 'pointer',
        width: '30px',
    },
    quantityInput: {
        border: 'none',
        textAlign: 'center',
        width: '40px',
        fontSize: '18px',
    },
    addToCartBtn: {
        backgroundColor: '#00bbb1',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default QuantitySelector;

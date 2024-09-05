import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../Contexts/CartContext';

const Cardprod = (props) => {
    const { addToCart } = useContext(CartContext);

    return (
        <>
        
        {/* Card */}
        <div className="w-full bg-white border border-gray-200 p-4 rounded-lg shadow">
            <NavLink to={`/product/${props.name}`}>
                <div className="w-full overflow-hidden rounded-t-lg">
                    <img className="w-full h-full object-cover" src={`/images/${props.image}`} alt={props.name} />
                </div>
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                    {props.name}
                </h5>

                <p className="mt-2">{props.description}</p>
            </NavLink>

            {/* ตะกร้า */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                    {props.price}
                </span>
                <div className="flex text-white bg-green-600 hover:bg-green-800 p-2 rounded-lg"onClick={() => addToCart({ name: props.name, price: props.price, image: props.image, quantity: 1 })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket"><path d="m15 11-1 9" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" /><path d="M4.5 15.5h15" /><path d="m5 11 4-7" /><path d="m9 11 1 9" /></svg>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cardprod;

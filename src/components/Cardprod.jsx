import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../Contexts/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cardprod = (props) => {
    const { addToCart } = useContext(CartContext);
    const MySwal = withReactContent(Swal);

    const showAddCartAlert = () => {
        MySwal.fire({
            title: "เพิ่มสินค้าเรียบร้อย!",
            text: "สินค้าได้ถูกเพิ่มลงในตะกร้าแล้ว",
            icon: "success",
            confirmButtonText: "ตกลง"
        });
    };

    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 p-3 rounded-lg shadow-md hover:shadow-lg">
            
            {/* ลิงก์ไปยังหน้ารายละเอียดสินค้า */}
            <NavLink to={`/product/${props.name}`}>
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-t-lg">
                    <img className="w-full h-full object-cover" src={`/images/${props.image}`} alt={props.name} />
                </div>
                <h5 className="mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">
                    {props.name}
                </h5>
                <p className="text-xs sm:text-sm mt-1 text-gray-700">
                    {props.description}
                </p>
            </NavLink>

            {/* ส่วนของราคาและปุ่มเพิ่มสินค้าลงตะกร้า */}
            <div className="flex justify-between items-center mt-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
                    {props.price}
                </span>
                <button
                    onClick={() => {
                        addToCart({ name: props.name, price: props.price, image: props.image, quantity: 1 });
                        showAddCartAlert();
                    }}
                    className="flex items-center text-white bg-purple-500 hover:bg-purple-600 p-2 rounded-lg transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket">
                        <path d="m15 11-1 9" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                        <path d="M4.5 15.5h15" />
                        <path d="m5 11 4-7" />
                        <path d="m9 11 1 9" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Cardprod;

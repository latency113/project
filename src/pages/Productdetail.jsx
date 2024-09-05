import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import QuantitySelector from '../components/QuantitySelector';
import { CartContext } from '../Contexts/CartContext.jsx';

const products = [
    {
        image: "Apple.png",
        name: "แอปเปิ้ล",
        description: "แอปเปิ้ลเขียวจากญี่ปุ่น",
        price: "20.00฿/ต่อลูก"
    },
    {
        image: "Cheese.png",
        name: "ชีส",
        description: "ชีสนำเข้าจากเยอรมัน",
        price: "85.00฿"
    },
    {
        image: "Eggland.png",
        name: "ไข่ไก่เบอร์ 0",
        description: "เป็นไข่ไก่ที่มาจากอภิชาติฟาร์ม",
        price: "120.00฿"
      },
      {
        image: "Fritos.png",
        name: "ขนม Fritos รสบาบีคิว",
        description: "ผลิตจากมันฝรั่งแท้ๆ รสชาติบาบีคิว",
        price: "25.00฿"
      },
      {
        image: "meat1.png",
        name: "เนื้อเกรด S+",
        description: "เนื้อวัวที่โตในวัง",
        price: "500.00฿"
      },
      {
        image: "Velveeta (1).png",
        name: "ชีส Velveeta",
        description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน คิดค้นขึ้นในปี 1918",
        price: "60.00฿"
      },
      {
        image: "Velveeta (2).png",
        name: "ชีส Velveeta แบบกล่อง",
        description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน คิดค้นขึ้นในปี 1918",
        price: "120.00฿"
      },
      {
        image: "Smart Balance Original.png",
        name: "Smart Balance Original",
        description: "เป็นทางเลือกที่ดีต่อสุขภาพแทนเนย",
        price: "60.00฿"
      },
];

const Productdetail = () => {
    const { name } = useParams();
    const { addToCart } = useContext(CartContext);

    if (!addToCart) {
        console.error("addToCart is undefined");
        return null;
    }

    const product = products.find(p => p.name === name);

    if (!product) {
        return <Layout><p className='text-3xl text-center p-4'>ไม่พบข้อมูลผลิตภัณฑ์</p></Layout>
    }

    const handleAddToCart = (quantity) => {
        addToCart({ ...product, quantity });
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-4 rounded-lg shadow-md">
                    <img className="w-[350px] object-cover mb-4" src={`/images/${product.image}`} alt={product.name} />
                    <div className='w-full md:w-1/2 md:pl-6 mt-4 md:mt-0'>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <p className="text-lg mb-4">{product.description}</p>
                        <span className="text-xl font-medium mb-4">{product.price}</span>
                        <QuantitySelector onAddToCart={handleAddToCart} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Productdetail;

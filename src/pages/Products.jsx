import React from 'react'
import Cardprod from '../components/Cardprod';
import { Link } from 'react-router-dom';

const Products = () => {
    const p = [
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
  return (
    <div className="w-full bg-green-200 p-2 rounded-lg shadow">
        <div className="flex flex-wrap justify-center gap-4">
            {p.map((b) => (
                <div key={b.name} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                      <Link to={`/product/${b.name}`}></Link>
                        <Cardprod {...b} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products;
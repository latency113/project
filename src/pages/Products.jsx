import React from 'react'
import Cardprod from '../components/Cardprod';
import { Link } from 'react-router-dom';

const Products = () => {
    const p = [
          {
            image: "Apple.png",
            name: "แอปเปิ้ลเขียว",
            description: "แอปเปิ้ลเขียวนำเข้าจากญี่ปุ่น",
            price: "20.00฿/ต่อลูก"
          },
          {
            image: "Red Apple.png",
            name: "แอปเปิ้ลแดง",
            description: "แอปเปิ้ลแดงนำเข้าจากญี่ปุ่น",
            price: "20.00฿/ต่อลูก"
          },
          {
            image: "Orange.png",
            name: "ส้ม ส้ม",
            description: "ส้มนำเข้าจากญี่ปุ่น",
            price: "20.00฿/ต่อลูก"
          },
          {
            image: "Cheese.png",
            name: "ชีส",
            description: "ชีสนำเข้าจากเยอรมัน ไม่ใช่เนยนะ",
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
            description: "เนื้อวัวที่โตในวัง เลี้ยงด้วยอาหารอย่างดี",
            price: "500.00฿"
          },
          {
            image: "meat3.png",
            name: "เนื้อเกรด S+",
            description: "เนื้อวัวที่โตในวัง เลี้ยงด้วยอาหารอย่างดี",
            price: "500.00฿"
          },
          {
            image: "Bread.png",
            name: "ขนมปัง",
            description: "ขนมปังนุ่มละลายในปาก หอมแป้งสาลีจากล้านนา",
            price: "30.00฿"
          },
          {
            image: "Velveeta (1).png",
            name: "ชีส Velveeta",
            description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน",
            price: "60.00฿"
          },
          {
            image: "Velveeta (2).png",
            name: "ชีส Velveeta แบบกล่อง",
            description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน",
            price: "120.00฿"
          },
          {
            image: "Smart Balance Original.png",
            name: "Smart Balance Original",
            description: "เป็นทางเลือกที่ดีต่อสุขภาพแทนเนยจริงๆ นะ",
            price: "60.00฿"
          },
          {
            image: "Milk.png",
            name: "นมวัว",
            description: "นมวัวแท้ๆ จากวัวที่โตในวังถูกเลี้ยงมาอย่างดี",
            price: "65.00฿"
          },
          {
            image: "Salmon.png",
            name: "ปลาแซลมอน",
            description: "ปลาแซลมอนจากนอร์เวย์ที่กลับไปวางไข่",
            price: "120.00฿"
          },
          {
            image: "Blueberries.png",
            name: "บลูเบอรรี่",
            description: "บลูเบอรรี่ฉ่ำๆ เปรี้ยมอมหวาน  จากเชียงใหม่",
            price: "60.00฿"
          },

        ];
      return (
          <div className="bg-green-200 p-4 rounded-lg shadow">
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
                  {p.map((product) => (
                      <div key={product.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <Link to={`/product/${product.name}`}></Link>
                              <Cardprod {...product} />
                      </div>
                  ))}
              </div>
          </div>
      );
  };
export default Products;
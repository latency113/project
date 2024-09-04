import React from 'react'
import Cardprod from '../components/Cardprod';
import Apple from "../images/Apple.png"

const Products = () => {
    const p = [
        {
          image: "Apple.png",
          name: "Americano with Foam",
          description: "Espresso diluted with hot water, topped with a creamy foam.",
          price: "$3.50"
        },
        {
          image: "Apple.png",
          name: "Americano with Foam",
          description: "Espresso diluted with hot water, topped with a creamy foam.",
          price: "$3.50"
        },
        {
            image: "Apple.png",
            name: "Americano with Foam",
            description: "Espresso diluted with hot water, topped with a creamy foam.",
            price: "$3.50"
          },
          {
            image: "Apple.png",
            name: "Americano with Foam",
            description: "Espresso diluted with hot water, topped with a creamy foam.",
            price: "$3.50"
          },
          {
            image: "Apple.png",
            name: "Americano with Foam",
            description: "Espresso diluted with hot water, topped with a creamy foam.",
            price: "$3.50"
          },
        ];
  return (
    <div className="w-full bg-white border border-gray-200 p-2 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
            {p.map((b) => (
                <div key={b.name} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    <Cardprod {...b} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products
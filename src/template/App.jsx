import BeverageCard from './BeverageCard'

const App = () => {
  const beverageList = [
    {
      image: "Velveeta (1).png",
      name: "Velveeta Cheese Sauce",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50"
    },
    {
      image: "Apple.png",
      name: "แอปเปิ้ลเขียว 1 ตะกร้า",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50"
    },
    {
      image: "Apple.png",
      name: "แอปเปิ้ลเขียว 1 ตะกร้า",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50"
    },
    {
      image: "Apple.png",
      name: "แอปเปิ้ลเขียว 1 ตะกร้า",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50"
    },

    ];
  return (
    <>
          {
      beverageList.map((b)=>(
      <BeverageCard key={b.name} {...b} />
      ))
    }

    </>
  )
}

export default App

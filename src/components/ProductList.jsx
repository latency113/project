import Apple from "../images/Apple.png";
import Orange from "../images/Orange.png";
import Meat from "../images/Meat.png";
import Cheese from "../images/Cheese.png";
import Salmon from "../images/Salmon.png";
import Original from "../images/Smart Balance Original.png";
import Cheetos from "../images/pngegg.png";
import Eggland from "../images/Eggland.png";
import Velveeta from "../images/Velveeta (1).png";
import Products from "../pages/Products";

const ProductList = () => {
const product = [
  {
    image: "Velveeta (1).png",
    name: "Americano with Foam",
    description: "Espresso diluted with hot water, topped with a creamy foam.",
    price: "$3.50"
  },
]

  return (
    <div>
      {
        product.map((b)=>(
          <Products key={b.name} {...b} />
        ))
      }
    </div>
  )
}

export default ProductList

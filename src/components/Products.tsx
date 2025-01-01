import MobileProducts from "../Products/MobileProducts"
import Card from "./Card"

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[100px]">
      {MobileProducts.map(item =>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Products

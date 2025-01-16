import { useContext } from "react";
import { CartContext } from "./CartContext";

function Product({ item }) {
  const { addItemToCart } = useContext(CartContext);
  const {image, title, price, description} = item;


  return <div className='w-72 m-3 flex flex-col justify-between bg-project-color-2 rounded-xl'>
    <div>
    <img className='w-full rounded-t-xl' src={image} alt={title} />
      <p className='text-project-color-1 p-2 font-merriweather'>{title}</p>
      <p className='text-stone-300 p-2 font-merriweather'>$ {price}</p>
      <p className='text-sm p-2 font-merriweather text-stone-500'>{description}</p>
    </div>
    <div className='flex justify-end'>
      <button className='bg-yellow-300 m-3 p-2 rounded-xl text-right border-2 border-project-color-1 active:bg-yellow-500' onClick={() => addItemToCart(item)}>Add to Cart</button>
    </div>
  </div>
}

export default Product;
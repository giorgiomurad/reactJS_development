import { useContext } from "react";

import { CartContext } from "./CartContext";

function ProductSlide({ product, quantity }) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { title } = product;

  return <div className="p-3 m-2 flex justify-between items-center bg-amber-100 border-2 border-project-color-1 rounded-2xl text-project-color-1 font-merriweather">
    <p className="text-lg">{title}</p>
    <div className="flex justify-between gap-2">
      <button className="texl-2xl" onClick={() => removeItemFromCart(product)}>-</button>
      <p className="text-2xl">{quantity}</p>
      <button className="texl-2xl" onClick={() => addItemToCart(product)}>+</button>
    </div>
  </div>
}

export default ProductSlide;
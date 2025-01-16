import { useContext } from "react";

import { CartContext } from "./CartContext";

function Header({ onOpenCart }) {
  const { items, getTotalQuantity } = useContext(CartContext);

  return <div className="flex mb-5 justify-between items-center">
    <div className="flex items-center">
      <img className="w-32 p-5" src="logo.png" alt="logo" />
      <h1 className="text-yellow-200 text-4xl font-merriweather uppercase">Elegant Context</h1>
    </div>
    <button className="bg-yellow-200 p-3 rounded-lg active:bg-yellow-400" onClick={onOpenCart}>Cart ({getTotalQuantity()})</button>
  </div>
}

export default Header;
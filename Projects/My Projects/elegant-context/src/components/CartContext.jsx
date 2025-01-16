import { createContext, useState } from "react";

export const CartContext = createContext({
  items:  [],
  addItemToCart:      () => {},
  removeItemFromCart: () => {},
  getItemQuantity:    () => {},
  getTotalQuantity:   () => {},
  getTotalPrice:      () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);


  function addItemToCart(item) {

    if (exists(item)) {
      let oldItem = shoppingCart.find(i => i.id === item.id);
      let newItem = { ...shoppingCart.find(i => i.id === item.id), quantity: getItemQuantity(item) + 1 };

      replaceItem(oldItem, newItem);
    } else {
      let newItem = {
        id:       item.id,
        title:    item.title,
        price:    item.price,
        quantity: 1
      }

      setShoppingCart(prevCart => [ ...prevCart, newItem ]);
    }
  }

  function removeItemFromCart(item) {
    let oldItem = shoppingCart.find(i => i.id === item.id);
    let newCart = [];

    console.log(oldItem.quantity);
    if(oldItem.quantity > 1) {
      let newItem = { ...oldItem, quantity: getItemQuantity(item)-1 };

      replaceItem(oldItem, newItem);
    } else {
      let index = shoppingCart.indexOf(oldItem);

      for(let i = 0; i < shoppingCart.length; i++) {
        if (i === index)
          continue;

        newCart.push(shoppingCart[i]);
      }
      
      setShoppingCart(newCart);
    }
  }

  function getItemQuantity(item) {
    let { id } = item;

    return shoppingCart.find(i => i.id === id).quantity;
  }

  function getTotalQuantity() {
    let sum = 0;

    for(let i of shoppingCart)
      sum += i.quantity;

    return sum;
  }

  function getTotalPrice() {
    let total = 0;

    for(let i of shoppingCart)
      total += i.price * i.quantity;

    return total.toFixed(2);
  }

  function exists(item) {
    let { id } = item;

    for(let i of shoppingCart)
      if(i.id === id)
        return true;

    return false;
  }

  function replaceItem(oldItem, newItem) {
    let index = shoppingCart.indexOf(oldItem);
    let newCart = [];

    for(let i1 = 0; i1 < index; i1++)
      newCart.push(shoppingCart[i1]);

    newCart.push(newItem);

    for(let i2 = index+1; i2 < shoppingCart.length; i2++)
      newCart.push(shoppingCart[i2]);

    setShoppingCart(newCart);
  }


  const context = {
    items:  shoppingCart,
    addItemToCart:      addItemToCart,
    removeItemFromCart: removeItemFromCart,
    getItemQuantity:    getItemQuantity,
    getTotalQuantity:   getTotalQuantity,
    getTotalPrice:      getTotalPrice,
  }

  return <CartContext.Provider value={context}>
    { children }
  </CartContext.Provider>
}
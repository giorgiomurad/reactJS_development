import { forwardRef, useRef, useContext, useImperativeHandle } from "react";
import { createPortal } from 'react-dom'

import { CartContext } from "./CartContext";
import ProductSlide from "./ProductSlide";

const CartModal = forwardRef(function Modal({ message }, ref) {
  const dialog = useRef();
  const { items, getTotalPrice, getItemQuantity } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  let action = '';
  if(items.length > 0) {
    action = <>
      <button className="p-2 border border-amber-700 text-lg rounded-lg">Cancel</button>
      <button className="bg-amber-900 p-2 rounded-lg text-lg">Checkout</button>
    </>
  } else {
    action = <button className="p-2 border-2 border-amber-700 text-lg rounded-lg">Cancel</button>
  }

  return createPortal(
    <dialog ref={dialog} className="w-1/3 animate-show-modal p-3 rounded-xl bg-project-color-2 border-2 border-project-color-1 backdrop:bg-backdrop-modal">
      {
        items.length > 0 ?
        <div>
          <h1 className="p-5 text-3xl text-project-color-1 font-merriweather">Your Cart</h1>
          {
            items.map(item => {
              
              return <ProductSlide key={item.id} product={item} quantity={getItemQuantity(item)} />
            })
          }
          <h1 className="p-5 text-xl text-project-color-1 font-merriweather">Total: ${getTotalPrice()}</h1>
        </div>
        :
        <h1 className=" p-5 text-3xl text-center font-merriweather text-project-color-1">Cart Is Empty</h1>
      }
      <form method="dialog">
        <div className="mx-3 p-3 flex justify-end gap-5">
          {action}
        </div>
      </form>
    </dialog>,
  document.getElementById('modal')
  )
});

export default CartModal;
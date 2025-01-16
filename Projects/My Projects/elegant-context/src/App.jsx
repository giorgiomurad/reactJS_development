import { useRef } from 'react';
import './App.css'

import CartContextProvider from './components/CartContext';
import CartModal from './components/CartModal';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const ref = useRef();

  function handleOpenCart() {

    ref.current.open();
  }

  return <div className='w-3/4 m-auto p-10'>
    <CartContextProvider>
      <CartModal ref={ref} message='Hello' />
      <Header onOpenCart={handleOpenCart} />
      <Body />
    </CartContextProvider>
  </div>
}

export default App
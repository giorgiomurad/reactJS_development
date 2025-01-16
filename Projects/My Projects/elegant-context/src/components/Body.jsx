import {DUMMY_PRODUCTS} from '../dummy-products';
import Product from './Product';

function Body() {

  return <div>
    <p className='p-4 text-2xl text-stone-300 font-merriweather uppercase'>Elegant Clothing For Everyone</p>
    <ul className='flex flex-wrap'>
      {
        DUMMY_PRODUCTS.map(product => {

          return <Product key={product.id} item={product} />
        })
      }
    </ul>
  </div>
}

export default Body;
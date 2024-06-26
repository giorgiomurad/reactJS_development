import React, { Component } from "react";
import "./App.css";

import Laptop from "./components/Laptop";
import img1 from './img/toshiba.png';
import img2 from './img/acer.png';
import img3 from './img/alienware.png';
import img4 from './img/hp.png';

const laptops = [{
  img:    img1,
  name:   'Toshiba Purple 15.6"',
  model:  'Toshiba',
  qty:    5,
  price:  250
},
{
  img:    img2,
  name:   'Acer Nitro 15.6"',
  model:  'Acer',
  qty:    10,
  price:  550
},
{
  img:    img3,
  name:   'Dell Alienware M17x',
  model:  'Alienware',
  qty:    15,
  price:  950
},
{
  img:    img4,
  name:   'HP Pavilion 15.6"',
  model:  'HP',
  qty:    8,
  price:  800
}]

class App extends Component {
  render() {
    return (
      <div className="title">
        <h1>List of Laptops</h1>
        <Laptop img={laptops[0].img} name={laptops[0].name} model={laptops[0].model} qty={laptops[0].qty} price={laptops[0].price} />
        <Laptop img={laptops[1].img} name={laptops[1].name} model={laptops[1].model} qty={laptops[1].qty} price={laptops[1].price} />
        <Laptop img={laptops[2].img} name={laptops[2].name} model={laptops[2].model} qty={laptops[2].qty} price={laptops[2].price} />
        <Laptop img={laptops[3].img} name={laptops[3].name} model={laptops[3].model} qty={laptops[3].qty} price={laptops[3].price} />
        <Laptop />
      </div>
    );
  }
}

export default App;

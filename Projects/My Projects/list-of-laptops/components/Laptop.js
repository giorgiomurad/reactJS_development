import React from 'react';
import PropTypes from 'prop-types';

import styles from './Laptop.module.css';
import Button from './Button';
import defaultImg from '../img/laptop.png';

const Laptop = (props) => {
  const { img, name, model, qty, price } = props;

  return <div className={styles.card} style={{}}>
    <img className={styles.preview} src={img} alt={name} />
    <h1 className={styles.title}>{name}</h1>
    <br />
    {(qty > 0) 
    ? <p className={styles.status} style={{color: 'green'}}>Available!</p>
    : <p className={styles.status} style={{color: 'red'}}>Not Available</p>}
    <p>Model: {model}</p>
    <p>Quantity: {qty}</p>
    <p>Price: ${price}</p>
    <Button isAvailable={(qty > 0)} />
  </div>
}

Laptop.PropType = {
  img:    PropTypes.string,
  name:   PropTypes.string,
  model:  PropTypes.string,
  qty:    PropTypes.number,
  price:  PropTypes.number
}

Laptop.defaultProps = {
  img:    defaultImg,
  name:   'Null',
  model:  'Null',
  qty:    0,
  price:  0
}

export default Laptop;
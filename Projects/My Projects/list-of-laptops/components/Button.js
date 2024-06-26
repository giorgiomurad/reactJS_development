import React from "react";
import PropTypes from "prop-types";

import styles from './Button.module.css'

const Button = (props) => {
  const { isAvailable } = props;

  return <>
    {
      (isAvailable)
      ? <button className={`${styles.button} ${styles.available}`}>Add To Cart</button>
      : <button className={`${styles.button} ${styles.not}`}>Out of Stock</button>
    }
  </>
}

Button.PropType = {
  isAvailable:  PropTypes.bool
}

Button.defaultProps = {
  isAvailable:  false
}

export default Button;
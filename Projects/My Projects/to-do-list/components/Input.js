import { useState } from 'react';
import styles from './Input.module.css';

function Input({ onSubmit }) {
  const [text, setText] = useState('');

  function handleClick() {
    
    onSubmit(text);
    setText('');
  }

  return <div className={styles.container}>
    <input className={styles.input} type='text' value={text} onChange={(e) => setText(e.target.value)} required/>
    <button className={styles.button} onClick={handleClick}>Add Task</button>
  </div>
}

export default Input;
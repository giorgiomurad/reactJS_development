import { useState } from 'react';

import styles from './styles/Table.module.css';

function Table({ list }) {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return <div className={styles.fragment}>
    <div className={styles.tabs}>
      <button
        className={activeContentIndex === 0 ? styles.active : ''}
        onClick={() => setActiveContentIndex(0)}
      >
        Why React?
      </button>
      <button
        className={activeContentIndex === 1 ? styles.active : ''}
        onClick={() => setActiveContentIndex(1)}
      >
        Core Features
      </button>
      <button
        className={activeContentIndex === 2 ? styles.active : ''}
        onClick={() => setActiveContentIndex(2)}
      >
        Related Resources
      </button>
      <button
        className={activeContentIndex === 3 ? styles.active : ''}
        onClick={() => setActiveContentIndex(3)}
      >
        React vs JS
      </button>
    </div>
    <div className={styles.list}>
      <ul>
      {
        list[activeContentIndex].map(item => <li>{item}</li>)
      }
      </ul>
    </div>
  </div>
}

export default Table;
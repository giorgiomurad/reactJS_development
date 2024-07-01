import styles from './Screen.module.css';

function Screen({ color, opacity }) {

  return <div className={styles.screen}>
      <div className={styles.display} style={{
      backgroundColor: color,
      opacity:  `${opacity}%`
    }}></div>
  </div>
}

export default Screen;
import styles from './Container.module.css';

function Container({ title, children }) {

  return <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <hr className={styles.lineBreak}/>
    <div className={styles.children}>
      {children}
    </div>
  </div>
}

export default Container;
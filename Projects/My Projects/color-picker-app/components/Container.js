import styles from './Container.module.css';

function Container({ title, children }) {

  return <div className={styles.container}>
    <h1 className={styles.h1}>{title}</h1>
    <hr />
    {children}
  </div>
}

export default Container;
import logo from '../logo.svg';
import styles from './styles/Header.module.css';

function Header() {

  return <header className={styles.header}>
    <img className={styles.logo} src={logo} alt='logo' />
    <div className={styles.caption}>
      <h1 className={styles.title}>React.js</h1>
      <p className={styles.subtitle}>i.e. using the React library for rendering the UI</p>    
    </div>
    </header>
}

export default Header;
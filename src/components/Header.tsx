import styles from '../styles/Header.module.css'
import logo from '../assets/rocket.svg'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <h1>to<span>do</span></h1>
        </header>
    )
}

export default Header
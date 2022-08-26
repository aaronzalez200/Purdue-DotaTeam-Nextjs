import Navbar from "./navbar"
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
    <div className={styles.sidebar}>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
    )
}

export default Layout;
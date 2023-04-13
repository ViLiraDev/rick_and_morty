import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav style={styles.nav}>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='/favorites'> Favorites </Link>
            <SearchBar onSearch={onSearch} />
            <div>
                <button className={styles.btnLogout} onClick={handleLogOut}>Log Out</button>
            </div>
        </nav>
    )
}

export default Nav
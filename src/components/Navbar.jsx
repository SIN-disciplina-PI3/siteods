import { NavLink } from "react-router-dom";
import './Navbar.css';

<nav>
    <ul className="links_list">
        <li>
            <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/about'>Sobre Mim</NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => (isActive ? styles.active : "")} to='/descricao'>ODS</NavLink>
        </li>  
    </ul>
</nav>
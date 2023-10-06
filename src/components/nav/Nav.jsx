import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

const Nav = ({ onSearch, setAccess }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handlerMenuClick = () => {
        setShowMenu(!showMenu);
    }

    const handleLogout = () => {
        setAccess(false);
    }

    return (
        <div className="container">
            <SearchBar onSearch={onSearch} />
            <div className="containerM">
                <button className="menu-btn" onClick={handlerMenuClick}>Menu</button>
                <ul className={`menu-items ${showMenu ? "show" : ""}`}>
                    <NavLink to="/home" className="btnHome-menu">Home</NavLink>
                    <NavLink to="/favorites" className="btnHome-menu">Favorites</NavLink>
                    <NavLink to="/about" className="btnAbout-menu" >About</NavLink>
                </ul>
            </div>

            <div className="containerBtn">
                <button className="btnHome">
                    <NavLink to='/about' className="linked">About</NavLink>
                </button>
                <button className="btnHome">
                    <NavLink to='/home' className="linked">HOME</NavLink>
                </button>
                <button className="btnHome linked" onClick={handleLogout}>Log Out</button>
                <button className="btnHome">
                    <NavLink to='/favorites' className="linked">Favorites</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Nav;

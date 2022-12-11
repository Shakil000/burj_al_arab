import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/aa.jpg';
import logo from '../../images/icons/logo.png';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <a href="/home">Home</a>
                        {/* <Link to="/home">Home</Link> */}
                    </li>
                    <li>
                        <a href="/login">Login</a>
                        {/* <Link to="/login">Login</Link> */}
                    </li>
                    <li>
                        <a className="btn-book" href="/book">Book</a>
                        {/* <Link className="btn-book" to="/book">Book</Link> */}
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;
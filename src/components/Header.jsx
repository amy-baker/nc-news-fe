import { useState, useEffect } from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = ( {username }) => {
    return(
        <header>
        <Link className='header-link' to="/">
            <h1 className='headerCard'>NC News</h1>
            </Link>
            {username ? (
                <h3 className="Acc">{username}</h3>
            ) : (
                <h3 className='guestAcc'>Guest</h3>
            )}
        </header>
    )
}

export default Header;
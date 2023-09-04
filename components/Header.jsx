import { useState, useEffect } from "react";
import '../src/styles/Header.css'

const Header = ( {username }) => {
    return(
        <header>
            <h1 className='headerCard'>NC News</h1>
            {username ? (
                <h3 className="Acc">{username}</h3>
            ) : (
                <h3 className='guestAcc'>Guest</h3>
            )}
        </header>
    )
}

export default Header;
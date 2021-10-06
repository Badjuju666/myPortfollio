import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <header>
            <h2>My Portfolio</h2>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">Homepage</NavLink>
                    </li>
                    <li>
                    <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Gallery">Works</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
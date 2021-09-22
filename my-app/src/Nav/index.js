import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">Homepage</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/test">Test</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
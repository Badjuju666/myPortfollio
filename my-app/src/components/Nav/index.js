import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <header className='flex-row px-1'>
            <h2>My Portfolio</h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                    <NavLink to="/About">About</NavLink>
                    </li>
                    <li className='mx-2'>
                    <NavLink to="/Portfolio">Works</NavLink>
                    </li>
                    <li className='mx-2'>
                    <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li className='mx-2'>
                    <NavLink to='/resume'>Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
import React from 'react';
import {Outlet,Link} from 'react-router-dom';
export default function Header(){
    return(
        <>
        <nav>
            <ol>
                <li>
                    <Link to='/registration'>Registration</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>SignUp</Link>
                </li>
            </ol>
        </nav>
        <Outlet />
        </>
    );
}
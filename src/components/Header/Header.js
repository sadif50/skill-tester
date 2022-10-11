import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className='header-navbar'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand my-brand" to='/'>
                        <span><CursorArrowRaysIcon className='brand-icon'></CursorArrowRaysIcon></span>
                        Skills Tester
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="my-nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="my-nav-link" to='/statistics'>Statistics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="my-nav-link" to='/blog'>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
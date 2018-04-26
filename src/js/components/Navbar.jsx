import React from 'react';
import { Popcorn, Search } from '../icons';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-banner">
                <div className="nav-logo">
                    {Popcorn()}
                </div>
                <div className="nav-title">MovieFinder</div>
            </div>
            <form className="nav-searchbar">
                <input
                    className="nav-searchinput"
                    type="text"
                    placeholder="Find a movie" />
                <input
                    className="nav-searchreset"
                    type="reset"
                    value="x" />
            </form>
        </nav>
    )
};

export default Navbar;
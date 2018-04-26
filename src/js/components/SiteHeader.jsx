import React from 'react';
import { Popcorn, Search } from '../icons';

const Header = () => {
    return (
        <header className="header">
            <div className="header-banner">
                <div className="header-logo">
                    {Popcorn()}
                </div>
                <div className="header-title">MovieFinder</div>
            </div>
            <form className="header-searchbar">
                <input
                    className="header-searchinput"
                    type="text"
                    placeholder="Find a movie" />
                <input
                    className="header-searchreset"
                    type="reset"
                    value="x" />
            </form>
        </header>
    )
};

export default Header;
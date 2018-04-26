import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Movies', to: '/movies' },
        { name: 'FAQ', to: '/faq' }
    ];
    return (
        <nav className="nav">
            {
                links.map(link =>
                    <NavLink
                        key={link.name}
                        to={link.to}
                        className="nav-link"
                        activeClassName="selected"
                    >
                        {link.name}
                    </NavLink>
                )
            }
        </nav>
    )
}

export default Navbar;
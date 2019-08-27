import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/companies">
            <h1>
                Company List
            </h1>
        </Link>

        <Link to="/new">
            <h1>
                Add New Company
            </h1>
        </Link>

    </header>
);

export default Header;
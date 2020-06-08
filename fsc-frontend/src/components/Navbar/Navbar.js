import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  const { theme, setTheme } = props;

  const [open, setOpen] = useState(false);

  const handleThemeChoice = e => {
    setTheme(e.target.id);
  }

  return (
    <nav className={`container-fluid navbar pb-3 pt-4 mb-3 fsc-navbar-${theme}`}>
      <div className='row'>
        <div className='col-md-3'>
          <Link to='/' className='fsc-logo-text fsc'><h3>Companotopia</h3></Link>
        </div>
        <div className='col pt-1 ml-md-5 mr-auto'>
          <Link to='/' className='nav-item fsc-nav-link fsc-nav-text mt-1'><h4>INDEX</h4></Link>
        </div>
        <div className='col-3 pt-1'>
          <Link to='/new' className='nav-item fsc-nav-link fsc-nav-text mt-1'><h4>ADD ENTRY</h4></Link>
        </div>
        <div className='col pt-1 dropdown' onClick={() => setOpen(!open)}>
          <h4 className="nav-item dropdown-toggle fsc-nav-link fsc-nav-text" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            THEMES
          </h4>
          <div className={`dropdown-menu ${open ? 'show' : ''} fsc-dropdown-${theme}`} aria-labelledby="navbarDropdown">
            <h5 className='dropdown-item' id='light' onClick={handleThemeChoice}>Light Mode</h5>
            <h5 className='dropdown-item' id='dark' onClick={handleThemeChoice}>Dark Mode</h5>
            <h5 className='dropdown-item' id='awful' onClick={handleThemeChoice}>Awful Mode</h5>
        </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string
}

Navbar.defaultProps = {
  theme: 'light'
}

export default Navbar;

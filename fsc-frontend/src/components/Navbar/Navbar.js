import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  const { theme } = props;
  return (
    <nav className={`container-fluid navbar pb-3 pt-4 mb-3 fsc-navbar-${theme}`}>
      <div className='row'>
        <div className='col'>
          <Link to='/' className='fsc-logo-text fsc'><h3>Companotopia</h3></Link>
        </div>
        <div className='col pt-1 ml-5 mr-auto'>
          <Link to='/' className='nav-item fsc-nav-link fsc-nav-text mt-1'><h4>INDEX</h4></Link>
        </div>
        <div className='col pt-1'>
          <Link to='/new' className='nav-item fsc-nav-link fsc-nav-text mt-1'><h4>ADD ENTRY</h4></Link>
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

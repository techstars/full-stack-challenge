import React from 'react';

export default class LandingHeader extends React.Component {
  render() {
    return (
      <header className='landing-Header'>
        <div className='header-server-logo' />
        <div className='header-button-container'>
          <h1 className='animate'>Businesses</h1>
        </div>
      </header>
    );
  }
}

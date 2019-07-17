import React from 'react';
import logo from '../logo.png';

const Landing = () => {
  return (<div style={{ textAlign: 'center' }}>
      <h2>
      Collect feedback from your users
      </h2>
      <div className="container">
      <img src={logo} className="App-logo" alt="logo"/>
      </div>      
    </div>   
  );
};

export default Landing;

import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
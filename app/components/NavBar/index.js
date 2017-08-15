/**
*
* NavBar
*
*/

import React from 'react';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

import Bars from 'react-icons/lib/fa/bars';

export default class NavBar extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="navBar">
          <div className="siteName">Site Name</div>

          <nav className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/contact" className="navButton">Contact</Link>
            <a href="https://github.com/mikenloki" className="navButton">github</a>
          </nav>

          <Bars className="menuIcon"/>

        </div>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav nav-pills flex-column flex-sm-row nav-bar-menu">
        <NavLink className="flex-sm-fill text-sm-center nav-link" exact activeClassName="active" to="/">Home</NavLink>
      </nav>
    )
  }
}

import React, { Component } from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { show_data } from '../actions';

class StockDetail extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <div>

        </div>
      </div>
    )
  }
}

export default StockDetail;

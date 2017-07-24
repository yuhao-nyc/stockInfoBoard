import React, { Component } from 'react';
import StockList from './stock_list';
import NavBar from './nav_bar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <StockList />
      </div>
    )
  }
}

export default App;

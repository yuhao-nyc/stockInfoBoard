import React, { Component } from 'react';
import { fetch_data } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import StockDetail from './stock_detail';

class StockList extends Component {
  componentDidMount() {
    this.props.fetch_data();
  }
  renderLists() {
    return _.map(this.props.stocks, data => {
        return (
          <div className="card" key={data.id}>
              <div className='row card-block'>
                <div className='col-sm-2'>
                  {data.symbol}
                </div>
                <div className='col-sm-2'>
                  <span className="info-title">Open Price:</span> {data.price}
                </div>
                <div className='col-sm-2'>
                  <span className="info-title">High Price:</span> {data.high}
                </div>
                <div className='col-sm-2'>
                  <span className="info-title">Low Price:</span> {data.low}
                </div>
                <div className='col-sm-2'>
                  <span className="info-title">Volume:</span> {data.volume}
                </div>
                <div className='col-sm-2'>
                  <span className="badge badge-default">{data.volatility}</span>
                </div>
              </div>
          </div>
        )
      }
    )
  }
  render() {
    return (
      <div>
        {this.renderLists()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, { fetch_data })(StockList);

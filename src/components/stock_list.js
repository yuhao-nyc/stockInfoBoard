import React, { Component } from 'react';
import { fetch_data } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import StockDetail from './stock_detail';

class StockList extends Component {
  componentDidMount() {
    this.props.fetch_data();
  }
  renderLists() {
    return _.map(this.props.stocks, data => {
        return (
          <div className="card" key={data.id}>
            <Link to="/stocks/:id" component={StockDetail}>
              <div className='row card-block'>
                <div className='col-sm-6'>
                  {data.symbol}
                </div>
                <div className='col-sm-6 pull-right'>
                  {data.price}
                </div>
              </div>
            </Link>
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

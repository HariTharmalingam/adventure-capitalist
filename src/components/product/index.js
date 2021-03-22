import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';

import store from '../../store';
import { addMoney } from '../barre-price/actions';

import './index.scss';

class Product extends Component {
  constructor(props) {
    super(props);

    const { data, money } = this.props;
    const { totalCostFactoryUnit } = data;

    this.state = {
      data,
      totalCostBuy: 0,
      percentageNextUpdated: (money * 100) / totalCostFactoryUnit
    };

    this.handleBuyProduct = this.handleBuyProduct.bind(this);
  }

  handleBuyProduct() {
    const { dispatch } = store;
    const { totalCostBuy, data } = this.state;
    const { price, totalCostFactoryUnit } = data;
    const { money } = this.props;


    dispatch(addMoney(price));

    this.setState({
      totalCostBuy: totalCostBuy + price,
      percentageNextUpdated: (money * 100) / totalCostFactoryUnit
    });
  }

  render() {
    const {
      data,
      totalCostBuy,
      percentageNextUpdated
    } = this.state;

    const {
      image,
      multi,
      price,
      totalCostFactoryUnit
    } = data;

    return (
      <Col md={6}>
        <Row>
          <Col md={4}>
            <Row>
              <Col md={12} onClick={this.handleBuyProduct}>
                <img
                  src={image}
                  className="shadow p-4 bg-info rounded-circle img-fluid"
                  alt="product"
                />
              </Col>
              <Col md={12}>
                <h2 className="text-center text-white">{`${price} $`}</h2>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Alert variant="primary">
                  <h1 className="display-6">{`$${totalCostBuy}`}</h1>
                </Alert>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <ProgressBar variant="info" now={percentageNextUpdated} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Alert variant="warning">
                  <h1 className="display-6">{`X${multi} : $${totalCostFactoryUnit}`}</h1>
                </Alert>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapToProps = (state) => ({
  money: state.barrePrice.money
});

export default connect(mapToProps)(Product);

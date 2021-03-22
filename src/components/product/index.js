import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';

import store from '../../store';
import { addMoney, removeMoney } from '../barre-price/actions';

import './index.scss';

class Product extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      data,
      totalCostBuy: 0
    };

    this.handleBuyProduct = this.handleBuyProduct.bind(this);
    this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
  }

  handleBuyProduct() {
    const { dispatch } = store;
    const { totalCostBuy, data } = this.state;
    const { price } = data;

    dispatch(addMoney(price));

    this.setState({
      totalCostBuy: totalCostBuy + price
    });
  }

  handleUpdateProduct() {
    const { dispatch } = store;
    const { data } = this.state;
    const { totalCostFactoryUnit } = data;
    const { money } = this.props;

    if (money - totalCostFactoryUnit < 0) {
      return;
    }

    dispatch(removeMoney(totalCostFactoryUnit));

    data.multi += 1;
    data.totalCostFactoryUnit *= data.multi;
    data.price += (data.price + totalCostFactoryUnit) / 5;

    this.setState({ data });
  }

  render() {
    const {
      data,
      totalCostBuy
    } = this.state;

    const {
      image,
      multi,
      price,
      totalCostFactoryUnit
    } = data;

    const { money } = this.props;
    const percentageNextUpdate = ((money * 100) / totalCostFactoryUnit).toFixed(0);

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
                <h2 className="text-center text-white">{`${price.toFixed(0)} $`}</h2>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Alert variant="primary">
                  <h1 className="display-6">{`$${totalCostBuy.toFixed(2)}`}</h1>
                </Alert>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <ProgressBar variant="info" now={percentageNextUpdate} />
              </Col>
            </Row>
            <Row>
              <Col md={12} onClick={this.handleUpdateProduct}>
                <Alert variant="warning">
                  <h1 className="display-6">{`X${multi} : $${totalCostFactoryUnit.toFixed(2)}`}</h1>
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

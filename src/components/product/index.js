import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';

import './index.scss';

import { addMoneyToCapital, deleteMoneyToCapital } from '../barre-price/actions';

const Product = class Product extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    const {
      multi,
      name,
      price,
      timeFactory,
      totalCostFactoryUnit,
      image
    } = props.data;

    this.state = {
      name,
      price,
      multi,
      totalSell: 0,
      timeFactory,
      totalCostFactoryUnit: multi * totalCostFactoryUnit,
      countLevelUp: 1,
      image
    };

    this.handleClickBuyProduct = this.handleClickBuyProduct.bind(this);
    this.handleClickBuyLevelUp = this.handleClickBuyLevelUp.bind(this);
  }

  handleClickBuyProduct() {
    const { dispatch } = this.props;
    const { price, totalSell } = this.state;

    this.setState({
      totalSell: totalSell + price
    });

    dispatch(addMoneyToCapital(price));
  }

  handleClickBuyLevelUp() {
    const { money, dispatch } = this.props;
    const {
      multi,
      price,
      countLevelUp,
      totalCostFactoryUnit
    } = this.state;
    const totalWithMulti = totalCostFactoryUnit * countLevelUp;
    const totalNagativeCoast = money - totalWithMulti;

    if (totalNagativeCoast < 0) {
      return;
    }

    this.setState({
      countLevelUp: countLevelUp + 1,
      price: multi + price
    });

    dispatch(deleteMoneyToCapital(totalWithMulti));
  }

  render() {
    const { money } = this.props;
    const {
      price,
      totalSell,
      totalCostFactoryUnit,
      countLevelUp,
      image
    } = this.state;
    const totalCostFactoryMulti = (totalCostFactoryUnit * countLevelUp).toFixed(2);

    return (
      <Col md={6}>
        <Row>
          <Col md={4} onClick={this.handleClickBuyProduct}>
            <Row>
              <Col md={12}>
                <img src={image} className="shadow p-4 bg-info rounded-circle img-fluid" alt="product" />
              </Col>
              <Col md={12}>
                <h2 className="text-center text-white">{`${(price)} $`}</h2>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Alert variant="primary">
                  <h1 className="display-6">{`$${totalSell}`}</h1>
                </Alert>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <ProgressBar variant="info" now={((money / totalCostFactoryMulti) * 100)} />
              </Col>
            </Row>
            <Row>
              <Col md={12} onClick={this.handleClickBuyLevelUp}>
                <Alert variant="warning">
                  <h1 className="display-6">{`X${countLevelUp} : $${totalCostFactoryMulti}`}</h1>
                </Alert>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
};

const mapToProps = (state) => ({
  money: state.barrePrice.money
});

export default connect(mapToProps)(Product);

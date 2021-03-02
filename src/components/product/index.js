import React, { Component } from 'react';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';

import lemon from './images/lemon.png';

const Product = class Product extends Component {
  constructor(props) {
    super(props);

    const {
      multi,
      name,
      price,
      timeFactory,
      totalCostFactoryUnit
    } = props.data;

    this.state = {
      name,
      price,
      multi,
      totalSell: 0,
      timeFactory,
      totalCostFactory: multi * totalCostFactoryUnit,
      totalCostFactoryUnit: multi * totalCostFactoryUnit,
      countLevelUp: 0
    };

    this.handleClickBuyProduct = this.handleClickBuyProduct.bind(this);
    this.handleClickBuyLevelUp = this.handleClickBuyLevelUp.bind(this);
  }

  handleClickBuyProduct() {
    const { price, totalSell } = this.state;

    this.setState({
      totalSell: totalSell + price
    });
  }

  handleClickBuyLevelUp() {
    const { multi, price, countLevelUp } = this.state;

    this.setState({
      countLevelUp: countLevelUp + 1,
      price: multi + price
    });
  }

  render() {
    const {
      price,
      totalSell,
      totalCostFactory,
      totalCostFactoryUnit,
      countLevelUp
    } = this.state;
    const totalMoney = 2650;

    return (
      <Col md={6}>
        <Row>
          <Col md={4} onClick={this.handleClickBuyProduct}>
            <Row>
              <Col md={12}>
                <img src={lemon} className="shadow p-4 bg-info rounded-circle img-fluid" alt="product" />
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
                  <h1 className="display-6">{`${totalSell} $`}</h1>
                </Alert>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <ProgressBar variant="info" now={((totalMoney * 100) / totalCostFactory)} />
              </Col>
            </Row>
            <Row>
              <Col md={12} onClick={this.handleClickBuyLevelUp}>
                <Alert variant="warning">
                  <h1 className="display-6">{`Buy X${countLevelUp} : ${totalCostFactoryUnit} $`}</h1>
                </Alert>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
};

export default Product;

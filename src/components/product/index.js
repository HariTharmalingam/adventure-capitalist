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

    console.log(props);

    const {
      multi,
      name,
      price,
      timeFactory,
      totalCostFactoryUnit
    } = props.data;

    this.state = {
      name,
      price: multi * price,
      multi,
      totalSell: 0,
      timeFactory,
      totalCostFactory: multi * totalCostFactoryUnit,
      totalCostFactoryUnit: multi * totalCostFactoryUnit
    };
  }

  render() {
    const {
      price,
      multi,
      totalSell,
      totalCostFactory,
      totalCostFactoryUnit
    } = this.state;
    const totalMoney = 2650;

    return (
      <Col md={6}>
        <Row>
          <Col md={4}>
            <Row>
              <Col md={12}>
                <img src={lemon} className="shadow p-4 bg-info rounded-circle img-fluid" alt="product" />
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
              <Col md={12}>
                <Alert variant="warning">
                  <h1 className="display-6">{`Buy X${multi} : ${totalCostFactoryUnit} $`}</h1>
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

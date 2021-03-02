import React from 'react';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';

import car from './images/car.png';

const Product = () => (
  <Col md={6}>
    <Row>
      <Col md={4}>
        <Row>
          <Col md={12}>
            <img src={car} className="shadow p-4 bg-info rounded-circle img-fluid" alt="product" />
          </Col>
          <Col md={12}>
            <h2 className="text-center text-white">{`${10.0} $`}</h2>
          </Col>
        </Row>
      </Col>
      <Col md={8}>
        <Row>
          <Col md={12}>
            <Alert variant="primary">
              <h1 className="display-6">{`${10.0} $`}</h1>
            </Alert>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <ProgressBar variant="info" now={(((10 * 10) / 100) * 100)} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Alert variant="warning">
              <h1 className="display-6">{`Buy X1 : ${2.65} $`}</h1>
            </Alert>
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);

export default Product;

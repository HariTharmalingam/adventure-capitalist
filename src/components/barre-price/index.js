import React from 'react';
import { Row, Col, Navbar } from 'react-bootstrap';

const BarrePrice = () => (
  <Row className="mb-5">
    <Col md={12} className="border border-success">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand>
          <h1 className="display-3 text-success">{`$ ${1000000.50}`}</h1>
        </Navbar.Brand>
      </Navbar>
    </Col>
  </Row>
);

export default BarrePrice;

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Navbar } from 'react-bootstrap';

const BarrePrice = ({ money }) => (
  <Row className="mb-5">
    <Col md={12} className="border border-success">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand>
          <h1 className="display-3 text-success">{`$ ${money}`}</h1>
        </Navbar.Brand>
      </Navbar>
    </Col>
  </Row>
);

const mapToProps = (state) => ({
  money: state.barrePrice.money
});

export default connect(mapToProps)(BarrePrice);

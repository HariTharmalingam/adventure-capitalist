import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Product from '../product';
import BarrePrice from '../barre-price';

const Home = () => (
  <Container className="bg-dark" style={{ height: '100%' }}>
    <BarrePrice />
    <Row>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Row>
  </Container>
);

export default Home;

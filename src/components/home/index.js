import React from 'react';
import { Container, Row } from 'react-bootstrap';

import initalState from './inital-state';
import Product from '../product';
import BarrePrice from '../barre-price';

const Home = () => (
  <Container className="bg-dark" style={{ height: '100%' }}>
    <BarrePrice />
    <Row>
      {initalState.map((data) => <Product key={data.name} data={data} />)}
      {/* [<Product data={{ totalSell: 1 }} />, <Product data={{ price: 2 }} />] */}
    </Row>
  </Container>
);

export default Home;

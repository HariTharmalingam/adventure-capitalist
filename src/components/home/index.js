import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import Product from '../product';
import BarrePrice from '../barre-price';
import NewProduct from '../new-product';

const Home = ({ data }) => (
  <Container className="bg-dark" style={{ height: '100%' }}>
    <BarrePrice />
    <Row>
      {data.filter((item) => item.unlock).map((item) => <Product key={item.name} data={item} />)}
      {/* [<Product data={{ totalSell: 1 }} />, <Product data={{ price: 2 }} />] */}
    </Row>
    <NewProduct />
  </Container>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);

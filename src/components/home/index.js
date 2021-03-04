import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import Product from '../product';
import BarrePrice from '../barre-price';
import NewProduct from '../new-product';

const Home = class Home extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      data
    };
  }

  selectNextUnlock() {
    let item;
    let i;
    const { data } = this.state;

    for (i = 0; i < data.length; i += 1) {
      if (!data[i].unlock) {
        item = data[i];

        break;
      }
    }

    if (!item) {
      return null;
    }

    return <NewProduct idProduct={i} price={item.unlockPricing} />;
  }

  render() {
    const { data } = this.state;

    return (
      <Container className="bg-dark" style={{ height: '100%' }}>
        <BarrePrice />
        <Row>
          {data
            .filter((item) => item.unlock)
            .map((item) => <Product key={item.name} data={item} />)}
          {/* [<Product data={{ totalSell: 1 }} />, <Product data={{ price: 2 }} />] */}
        </Row>
        {this.selectNextUnlock()}
      </Container>
    );
  }
};

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);

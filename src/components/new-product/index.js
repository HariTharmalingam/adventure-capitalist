import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';

import { unlockProduct } from '../home/actions';
import { deleteMoneyToCapital } from '../barre-price/actions';
import store from '../../store';

const NewPorduct = class NewPorduct extends Component {
  constructor(props) {
    super(props);

    this.handleUnlockProduct = this.handleUnlockProduct.bind(this);
  }

  handleUnlockProduct() {
    const { idProduct, money, price } = this.props;
    const { dispatch } = store;
    const totalCoast = money - price;

    if (totalCoast < 0) {
      return;
    }

    dispatch(deleteMoneyToCapital(price));
    dispatch(unlockProduct(idProduct));
  }

  render() {
    const { price } = this.props;

    return (
      <Row>
        <Col md={12}>
          <Button onClick={this.handleUnlockProduct} variant="danger" size="lg" block>{`Unlock next product for ($${price})`}</Button>
        </Col>
      </Row>
    );
  }
};

const mapToProps = (state) => ({
  money: state.barrePrice.money
});

export default connect(mapToProps)(NewPorduct);

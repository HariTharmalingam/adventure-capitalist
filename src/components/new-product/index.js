import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import { unlockProduct } from '../home/actions';
import store from '../../store';

const NewPorduct = class NewPorduct extends Component {
  constructor(props) {
    super(props);

    this.handleUnlockProduct = this.handleUnlockProduct.bind(this);
  }

  handleUnlockProduct() {
    const { idProduct } = this.props;
    const { dispatch } = store;

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

export default NewPorduct;

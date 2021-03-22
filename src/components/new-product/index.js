import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';

import store from '../../store';
import { removeMoney } from '../barre-price/actions';

const NewProduct = ({ money }) => {
  const handleRemoveMoney = () => {
    const { dispatch } = store;

    if ((money - 100) < 0) {
      return;
    }

    dispatch(removeMoney(100));
  };

  const changeVariant = (money - 100 < 0) ? 'secondary' : 'danger';

  return (
    <Row>
      <Col md={12}>
        <Button onClick={handleRemoveMoney} variant={changeVariant} size="lg" block>
          {`Unlock next product for ($${100})`}
        </Button>
      </Col>
    </Row>
  );
};

const mapToProps = (state) => ({
  money: state.barrePrice.money
});

export default connect(mapToProps)(NewProduct);

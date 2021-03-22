import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const NewPorduct = () => (
  <Row>
    <Col md={12}>
      <Button variant="danger" size="lg" block>{`Unlock next product for ($${100})`}</Button>
    </Col>
  </Row>
);

export default NewPorduct;

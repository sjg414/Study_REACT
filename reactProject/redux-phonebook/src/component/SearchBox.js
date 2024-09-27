import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const SearchBox = ({ setSearchQuery }) => {
  return (
    <Row className="searchArea">
      <Col lg={7}>
        <Form.Control
          type="text"
          placeholder="name"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </Col>
      <Col lg={2}>
        <Button variant="primary">Search</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;

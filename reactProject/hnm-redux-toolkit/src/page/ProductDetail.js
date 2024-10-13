import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { fetchSingleProducts } from "../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  const getPrductDetail = async () => {
    dispatch(fetchSingleProducts(id));
  };

  useEffect(() => {
    getPrductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="product-data">
          <div>
            <h4>{product?.title}</h4>
          </div>
          <div>
            <h5>₩{product?.price}</h5>
          </div>
          <div>{product?.choice === true ? "conscious choice" : ""}</div>
          <div className="selectDrop">
            <Form.Select aria-label="size-selecct">
              <option>사이즈 선택</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </Form.Select>
          </div>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

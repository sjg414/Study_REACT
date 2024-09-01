import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  let { id } = useParams(); //url :id값 받아오기
  const [product, setProduct] = useState(null); //상품 정보 상태관리
  const [dropText, setDropText] = useState("사이즈 선택");

  //상품 정보 api 호출해서 받기
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  //DropDown text change
  const changeDropText = (text) => {
    console.log("drop? ", text);
    setDropText(text);
  };

  //api 호출
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="product-data">
          <div>
            <h5>{product?.title}</h5>
          </div>
          <div>₩{product?.price}</div>
          <div className="choice-new">
            {product?.choice === true ? "Consious choice" : " "}
          </div>
          <div>
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-sizeSelect">
                {dropText}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/size-S"
                  onClick={(text) => {
                    changeDropText("S");
                  }}
                >
                  S
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/size-M"
                  onClick={(text) => {
                    changeDropText("M");
                  }}
                >
                  M
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/size-L"
                  onClick={(text) => {
                    changeDropText("L");
                  }}
                >
                  L
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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

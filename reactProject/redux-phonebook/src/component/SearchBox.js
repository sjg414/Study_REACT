import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const SearchBox = ({ setSearchQuery }) => {
  const [search, setSearch] = useState(""); //검색어 상태 관리
  const dispatch = useDispatch();

  //검색 버튼 클릭 시 dispatch
  const searchContact = () => {
    dispatch({ type: "INPUT_SEARCH", payload: { search } });
  };
  return (
    <Row>
      <Col>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Col>
      <Col>
        <Button variant="primary" onClick={searchContact}>
          검색
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;

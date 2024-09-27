import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇 개 있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.
function App() {
  const nameStore = useSelector((state) => state.name);
  const phoneNumberStore = useSelector((state) => state.phoneNumber);

  return (
    <div>
      <div>
        <h1 className="title">Phone Book</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

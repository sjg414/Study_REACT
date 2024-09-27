import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  const [name, setName] = useState(""); //연락처 이름 상태관리
  const [phoneNumber, setPhoneNumber] = useState(""); //연락처 번호 상태관리
  const dispatch = useDispatch(); //dispatch

  //Create 버튼 클릭 시 dispatch 실행(ADD_CONTACT)
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <div>
      <Form onSubmit={(event) => addContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoneNuber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;

"use client"
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  };


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" className="mb-3" controlId="validationCustomUsername">
          <Form.Label>
             Username
          </Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <AiOutlineUser />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <Form.Group as={Col} md="10" className="mb-3" controlId="validationCustomEmail">
          <Form.Label>
             Email
          </Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="10" controlId="validationCustomMessage">
          <Form.Label>
             Message
          </Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <AiOutlineMessage />
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              placeholder="Write your message here"
              aria-describedby="inputGroupPrepend"
              required
              rows={5}
            />
            <Form.Control.Feedback type="invalid">
              Please write a message.
            </Form.Control.Feedback>
          </InputGroup>
          <div md="10" style={{textAlign:"center",marginTop:"20px"}}>
      <Button type="submit" style={{backgroundColor:"orange",color:"black",fontWeight:500,borderColor:"orange"}}>Submit form</Button>
      </div>
        </Form.Group>
        
      </Row>
      

    </Form>
  );
}

export default FormExample;

import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddContact(props) {
  const [password, setPassword] = useState('');

  // Handle input change for password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Submitted: ", password);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Security Check
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPassword">
            <Form.Label>For security reasons please enter your password below</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddContact;

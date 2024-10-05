import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddContact(props) {
  const [formData, setFormData] = useState({
    startDateTime: '',
    description: '',
  });

  // Function to format date for datetime-local input
  const getCurrentDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const adjustedDate = new Date(now.getTime() - (offset * 60 * 1000));
    return adjustedDate.toISOString().slice(0, 16);  // Formats to "YYYY-MM-DDTHH:MM"
  };

  // UseEffect to set the initial date when the modal opens
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      startDateTime: getCurrentDateTime(),
    }));
  }, []);

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
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
          Add Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Col xs={12}>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                />
              </Form.Group>
            </Col>
          </Row>
         
        <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formStartDateTime">
                <Form.Label>Added Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="startDateTime"
                  value={formData.startDateTime}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

        

          <Button variant="primary" type="submit">
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

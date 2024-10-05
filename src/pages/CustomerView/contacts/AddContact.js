import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddContact(props) {
  const [formData, setFormData] = useState({
    profileImage: null,
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    direction: 'system-default',
    password: '',
    primaryContact: false,
    sendWelcomeEmail: false,
    sendSetPasswordEmail: false,
    permissions: {
      invoices: true,
      estimates: true,
      contracts: true,
      proposals: true,
      support: true,
      projects: true,
    },
    emailNotifications: {
      invoice: true,
      creditNote: true,
      tickets: true,
      estimate: true,
      project: true,
      contract: true,
      task: true,
    }
  });

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle changes for nested permissions and notifications
  const handleNestedChange = (category, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [key]: !prevData[category][key],
      },
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
          Add New Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formProfileImage">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  name="profileImage"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      profileImage: e.target.files[0],
                    }))
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Position"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formDirection">
                <Form.Label>Direction</Form.Label>
                <Form.Select
                  name="direction"
                  value={formData.direction}
                  onChange={handleInputChange}
                >
                  <option value="system-default">System Default</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Check
            type="checkbox"
            name="primaryContact"
            label="Primary Contact"
            checked={formData.primaryContact}
            onChange={handleInputChange}
          />
          <Form.Check
            type="checkbox"
            name="sendWelcomeEmail"
            label="Do not send welcome email"
            checked={formData.sendWelcomeEmail}
            onChange={handleInputChange}
          />
          <Form.Check
            type="checkbox"
            name="sendSetPasswordEmail"
            label="Send SET password email"
            checked={formData.sendSetPasswordEmail}
            onChange={handleInputChange}
          />

          <h5 className="mt-4">Permissions</h5>
          <p className="text-danger">
            Make sure to set appropriate permissions for this contact
          </p>
          <Row className="mb-3">
            {Object.keys(formData.permissions).map((perm) => (
              <Col xs={6} md={4} key={perm}>
                <Form.Check
                  type="switch"
                  id={`permission-${perm}`}
                  label={perm.charAt(0).toUpperCase() + perm.slice(1)}
                  checked={formData.permissions[perm]}
                  onChange={() => handleNestedChange("permissions", perm)}
                />
              </Col>
            ))}
          </Row>

          <h5 className="mt-4">Email Notifications</h5>
          <Row className="mb-3">
            {Object.keys(formData.emailNotifications).map((notif) => (
              <Col xs={6} md={4} key={notif}>
                <Form.Check
                  type="switch"
                  id={`notification-${notif}`}
                  label={notif.charAt(0).toUpperCase() + notif.slice(1)}
                  checked={formData.emailNotifications[notif]}
                  onChange={() => handleNestedChange("emailNotifications", notif)}
                />
              </Col>
            ))}
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

import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";

function EmailSetupForm() {
  const [show, setShow] = useState(false);
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
    <div className="py-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Company </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Gmail</option>
              <option value="2">Yahoo</option>
              <option value="3">Hotmail</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Company .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Email Id </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Gmail</option>
              <option value="2">Yahoo</option>
              <option value="3">Hotmail</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Email Id .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Password </Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Password .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Re Password </Form.Label>
            <Form.Control type="password" placeholder="Re Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Re Password .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Port</Form.Label>
            <Form.Control type="text" placeholder="Port" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Port.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Smtp</Form.Label>
            <Form.Control type="text" placeholder="Smtp" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Smtp.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>To Email Id</Form.Label>
            <Form.Control type="email" placeholder="To Email Id" required />
            <Form.Control.Feedback type="invalid">
              Please provide a To Email Id.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Default CC</Form.Label>
            <Form.Control type="text" placeholder="Default CC" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Default CC.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Hidden BCC</Form.Label>
            <Form.Control type="date" placeholder="Hidden BCC" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Hidden BCC.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Custom Design"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />

            <Form.Check
              required
              label="SSL"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    </div>
  );
}

export default EmailSetupForm;

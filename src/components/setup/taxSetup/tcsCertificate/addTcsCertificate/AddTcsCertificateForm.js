


import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";

function AddTcsCertificateForm() {
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
            <Form.Label>Date </Form.Label>
            <Form.Control type="date" placeholder="Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Date .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Form No </Form.Label>
            <Form.Control type="text" placeholder="Form No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Form No .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Certificate Ref No</Form.Label>
            <Form.Control type="text" placeholder="TCS %" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Certificate Ref No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>TCS %</Form.Label>
            <Form.Control type="text" placeholder="TCS %" required />
            <Form.Control.Feedback type="invalid">
              Please provide a TCS %.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>TCS limit</Form.Label>
            <Form.Control type="text" placeholder="TCS limit" required />
            <Form.Control.Feedback type="invalid">
              Please provide a TCS limit.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="Start Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Start Date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="End Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a End Date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" placeholder="Upload File" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Upload File.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Sales </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Sales .
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Account </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Account .
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    </div>
  );
}

export default AddTcsCertificateForm;

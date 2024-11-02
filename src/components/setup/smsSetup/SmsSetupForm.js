import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";

function SmsSetupForm() {
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
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Company</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Customize</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Company.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>SMS UserName</Form.Label>
            <Form.Control type="email" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS UserName.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>SMS Password</Form.Label>
            <Form.Control type="password" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Re Type Password</Form.Label>
            <Form.Control type="password" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Re Type Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Mask</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Customize</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Mask.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>SMS URL</Form.Label>
            <Form.Control type="text" placeholder="URL" required />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS URL.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>SMS Response</Form.Label>
            <Form.Control type="text" placeholder="SMS Response" required />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS Response.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>CC Mobile</Form.Label>
            <Form.Control type="text" placeholder="CC Mobile" required />
            <Form.Control.Feedback type="invalid">
              Please provide a CC Mobile.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Default Mobile</Form.Label>
            <Form.Control type="text" placeholder="Default Mobile" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Default Mobile.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>SMS Auth. Key</Form.Label>
            <Form.Control type="text" placeholder="SMS Auth. Key" required />
            <Form.Control.Feedback type="invalid">
              Please provide a SMS Auth. Key.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    </div>
  );
}

export default SmsSetupForm;

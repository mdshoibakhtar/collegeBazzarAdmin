import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { useState } from "react";

function ReportSetupForm() {
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
            <Form.Label>Company Name</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Customize</option>
              <option value="1">Head Office</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Company Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-1</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-2</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-3</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-4</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-5</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header Line-6</Form.Label>
            <Form.Control type="text" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header Line.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Print Header Text Alignment</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Left</option>
              <option value="1">Center</option>
              <option value="1">Right</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Print Header Text Alignment.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Signature</Form.Label>
            <Form.Control type="file" placeholder="" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Signature.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Header</Form.Label>
            <Form.Control type="file" placeholder="Header" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Header.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Footer</Form.Label>
            <Form.Control type="file" placeholder="Footer" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Footer.
            </Form.Control.Feedback>
          </Form.Group>

          <hr className="mt-3" />

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>GST No</Form.Label>
            <Form.Control type="text" placeholder="GST No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a GST No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>GST Address</Form.Label>
            <Form.Control type="text" placeholder="GST Address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a GST Address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label> State</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">GUJARAT</option>
              <option value="1">DELHI</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a Company Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>GST Place</Form.Label>
            <Form.Control type="text" placeholder="GST Place" required />
            <Form.Control.Feedback type="invalid">
              Please provide a GST Place.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>GST PINcode</Form.Label>
            <Form.Control type="text" placeholder="GST PINcode" required />
            <Form.Control.Feedback type="invalid">
              Please provide a GST PINcode.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>PAN NO</Form.Label>
            <Form.Control type="text" placeholder="Pan No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Pan No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>TIN NO</Form.Label>
            <Form.Control type="text" placeholder="TIN No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a TIN No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>CIN NO</Form.Label>
            <Form.Control type="text" placeholder="CIN No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a CIN No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>MSME NO</Form.Label>
            <Form.Control type="text" placeholder="MSME No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a MSME No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>ST NO</Form.Label>
            <Form.Control type="text" placeholder="ST No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a ST No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="2"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>e-Commerce GST-No</Form.Label>
            <Form.Control
              type="text"
              placeholder="e-Commerce GST-No"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a e-Commerce GST-No.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <hr />
        <h4>Bank Details :-</h4>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>Branch</Form.Label>
            <Form.Control type="text" placeholder="Branch" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Branch.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>IFSC Code</Form.Label>
            <Form.Control type="text" placeholder="IFSC Code" required />
            <Form.Control.Feedback type="invalid">
              Please provide a IFSC Code.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>A/C No</Form.Label>
            <Form.Control type="text" placeholder="A/C No" required />
            <Form.Control.Feedback type="invalid">
              Please provide a A/C No.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>UPI ID</Form.Label>
            <Form.Control type="text" placeholder="UPI ID" required />
            <Form.Control.Feedback type="invalid">
              Please provide a UPI ID.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-3"
          >
            <Form.Label>UPI QR Code</Form.Label>
            <Form.Control type="file" placeholder="UPI QR Code" required />
            <Form.Control.Feedback type="invalid">
              Please provide a UPI QR Code.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Save</Button>
        <Button type="submit">Cancel</Button>
      </Form>
    </div>
  );
}

export default ReportSetupForm;

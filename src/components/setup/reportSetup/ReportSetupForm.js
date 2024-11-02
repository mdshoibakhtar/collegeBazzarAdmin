import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStateMaster, reportSetupSetupAdd } from "../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

function ReportSetupForm() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const params = useParams();
  const [statesList, setStatesList] = useState([]);
  const [initialvalue, setInitialValue] = useState({
    company_name: '',
    header_line1: '',
    header_line2: '',
    header_line3: '',
    header_line4: '',
    header_line5: '',
    header_line6: '',
    printing_header_text_allignment: 'Left', // default value
    signature: '',
    header: '',
    footer: '',
    logo: '',
    background: '',
    image_allign: 'Left', // default value
    gst_no: '',
    gst_address: '',
    state: { type: "", ref: 'state' },
    gst_place: '',
    gst_pincode: '',
    pan_no: '',
    tin_no: '',
    tan_no: '',
    cin_no: '',
    msme_no: '',
    st_no: '',
    ecommerce_gstno: '',
    bank_name: '',
    branch: '',
    ifsc_code: '',
    acc_no: '',
    upi_id: '',
    upi_qr_code: ''

  });

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInitialValue((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const toastSuccessMessage = (message) => {
    toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      try {
        const response = await reportSetupSetupAdd(initialvalue);
        if (response?.statusCode == "200") {
          toastSuccessMessage("SMS Setup added successfully!");
          setInitialValue({
            company_name: '',
            header_line1: '',
            header_line2: '',
            header_line3: '',
            header_line4: '',
            header_line5: '',
            header_line6: '',
            printing_header_text_allignment: 'Left', // default value
            signature: '',
            header: '',
            footer: '',
            logo: '',
            background: '',
            image_allign: 'Left', // default value
            gst_no: '',
            gst_address: '',
            state: { type: "", ref: 'state' }, // Assuming this will be populated from a dropdown
            gst_place: '',
            gst_pincode: '',
            pan_no: '',
            tin_no: '',
            tan_no: '',
            cin_no: '',
            msme_no: '',
            st_no: '',
            ecommerce_gstno: '',
            bank_name: '',
            branch: '',
            ifsc_code: '',
            acc_no: '',
            upi_id: '',
            upi_qr_code: ''

          });
        } else {
          toastErrorMessage("Failed to add SMS Setup.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to add SMS Setup.");
      }
    }
  };
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await getStateMaster();
        if (response && response.data) {
          setStatesList(response.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Report Setup</h2>
      <Form noValidate onSubmit={handleSubmit}>

        {/* Company Information */}
        <div className="row">
            <Col md={6}>
              <Form.Group controlId="company_name">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={initialvalue.company_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>


            <Col md={6}>
              <Form.Group controlId="image_align">
                <Form.Label>Image Align</Form.Label>
                <Form.Select
                  value={initialvalue.image_align}
                  onChange={handleChange}
                >
                  <option value="Left">Left</option>
                  <option value="Center">Center</option>
                  <option value="Right">Right</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="logo">
                <Form.Label>Logo</Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="background">
                <Form.Label>Background</Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Col>
            {/* Header Lines */}
            <h4>Header Lines</h4>
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Col md={6} key={i}>
                  <Form.Group controlId={`header_line${i}`}>
                    <Form.Label>{`Header Line ${i}`}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter header line ${i}`}
                      value={initialvalue[`header_line${i}`]}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              ))}
          </div>
        </div>

        <Form.Group controlId="printing_header_text_alignment">
          <Form.Label>Printing Header Text Alignment</Form.Label>
          <Form.Select
            value={initialvalue.printing_header_text_alignment}
            onChange={handleChange}
          >
            <option value="Left">Left</option>
            <option value="Center">Center</option>
            <option value="Right">Right</option>
          </Form.Select>
        </Form.Group>

        {/* GST Details */}
        <h4>GST Details</h4>
        <Row>
          <Col md={6}>
            <Form.Group controlId="gst_no">
              <Form.Label>GST No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GST No"
                value={initialvalue.gst_no}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gst_address">
              <Form.Label>GST Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GST Address"
                value={initialvalue.gst_address}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select
                value={initialvalue.state.type} // Adjust to match the state selected
                onChange={handleChange}
              >
                <option value="">Select State</option> {/* Placeholder option */}
                {statesList.map(state => (
                  <option key={state?._id} value={state?._id}>
                    {state?.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="gst_place">
              <Form.Label>GST Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GST Place"
                value={initialvalue.gst_place}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="gst_pincode">
              <Form.Label>GST Pincode</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter GST Pincode"
                value={initialvalue.gst_pincode}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Bank Details */}
        <h4>Bank Details</h4>
        <Row>
          <Col md={6}>
            <Form.Group controlId="bank_name">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Bank Name"
                value={initialvalue.bank_name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="branch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Branch"
                value={initialvalue.branch}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="ifsc_code">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IFSC Code"
                value={initialvalue.ifsc_code}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="acc_no">
              <Form.Label>Account No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Account No"
                value={initialvalue.acc_no}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="upi_id">
              <Form.Label>UPI ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UPI ID"
                value={initialvalue.upi_id}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="upi_qr_code">
              <Form.Label>UPI QR Code</Form.Label>
              <Form.Control type="file" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      <ToastContainer />
    </div>

  );
}

export default ReportSetupForm;

import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function AddLeager() {
  const [formData, setFormData] = useState(

    {

      name: "",
      alias: "",
      AC_name: { type: String, require: true },
      AC_no: { type: String, require: true },
      IFSC_code: { type: String, require: true },
      branch_name: { type: String, require: true },
      BSR_code: "",
      /* bank_id: {
        type: accBank._Id, ref: "accBank"
      }, */
      GSTIN: "",

      /* AccLedgerGroupId: {
        type: accGroupMaster._Id,
        ref: "accGroupMaster",
      }, */
      AccLedgerName: "",
      AccLedgreAliasName: "",
      AccLedgerEntryDateTime: { type: Date },
      AccAddLine1: "",
      AccAddLine2: "",
      city: "",
      state: "",
      country: "",
      mobile: { type: Number },
      Email: "",
    }
  )
  // Handle input changes for the fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };
  // const addBankFromSelect = async()=>{
  //   await 
  // }

  return (
    <div style={{ width: "1000px" }}>
      <h4>Add Ledger</h4>
      <div className="container mt-4 card">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAlias">
                <Form.Label>Alias</Form.Label>
                <Form.Control
                  type="text"
                  name="alias"
                  value={formData.alias}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formOpeningBalance">
                <Form.Label>Opening Balance</Form.Label>
                <Form.Control
                  type="number"
                  name="openingBalance"
                  value={formData.openingBalance}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formBsrCode">
                <Form.Label>BSR Code</Form.Label>
                <Form.Control
                  type="text"
                  name="BSR_code"
                  value={formData.BSR_code}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formBsrCode">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formBsrCode">
                <Form.Label>GSTIN</Form.Label>
                <Form.Control
                  type="text"
                  name="GSTIN"
                  value={formData.GSTIN}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group controlId="formVoucherDate">
                <Form.Label>Voucher Date</Form.Label>
                <Form.Control
                  type="date"
                  name="voucherDate"
                  value={formData.voucherDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formVoucherNo">
                <Form.Label>Voucher No</Form.Label>
                <Form.Control
                  type="text"
                  name="voucherNo"
                  value={formData.voucherNo}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formUnderGroup">
                <Form.Label>Under Group</Form.Label>
                <Form.Select
                  name="underGroup"
                  value={formData.underGroup}
                  onChange={handleInputChange}
                >
                  <option value="">Select Group</option>
                  {/* Add options dynamically here */}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAccBalanceType">
                <Form.Label>Acc Balance Type</Form.Label>
                <Form.Select
                  name="accBalanceType"
                  value={formData.accBalanceType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Balance Type</option>
                  {/* Add options dynamically here */}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group controlId="formSelectBank">
                <Form.Label>Select Bank</Form.Label>
                <Form.Select
                  name="selectBank"
                  value={formData.selectBank}
                  onChange={handleInputChange}
                >
                  <option value="">Select Bank</option>
                  {/* Add options dynamically here */}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAccountHoldersName">
                <Form.Label>A/C Holders Name</Form.Label>
                <Form.Control
                  type="text"
                  name="accountHoldersName"
                  value={formData.accountHoldersName}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAccountNumber">
                <Form.Label>A/C No</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formIfscCode">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group controlId="formBankName">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formAddressLine1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formCity">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formCity">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Add remaining fields similarly */}
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </div>

  );
}

export default AddLeager;

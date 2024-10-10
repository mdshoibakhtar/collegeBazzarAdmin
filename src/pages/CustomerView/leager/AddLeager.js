import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function AddLeager() {
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    amount: 0,
    bsrCode: '',
    voucherDate: '',
    voucherNo: '',
    underGroup: '',
    accBalanceType: '',
    selectBank: '',
    accountHoldersName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    bankConfiguration: '',
    chequeBooks: '',
    chequePrintingConfig: '',
    selectCompany: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    phoneNo: '',
    email: '',
    gstin: '',
    accLedgerEntryDateTime: '',
    taxRegistrationDetails: '',
  });

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

  return (
    <div style={{ width: "1000px" }}>
      <h4>Add Ledger</h4>
      <div className="container mt-4 card">
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Name */}
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

            {/* Alias */}
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

            {/* Amount */}
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
              <Form.Group controlId="formAmount">
                <Form.Label>Opining Balanc</Form.Label>
                <Form.Control
                  type="number"
                  name="oponingbalance"
                  value={formData.oponingbalance}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* BSR Code */}
            <Col md={4}>
              <Form.Group controlId="formBsrCode">
                <Form.Label>BSR Code</Form.Label>
                <Form.Control
                  type="text"
                  name="bsrCode"
                  value={formData.bsrCode}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Voucher Date */}
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

            {/* Voucher No */}
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

            {/* Under Group */}
            <Col md={4}>
              <Form.Group controlId="formUnderGroup">
                <Form.Label>Under Group</Form.Label>
                <Form.Select
                  name="underGroup"
                  value={formData.underGroup}
                  onChange={handleInputChange}
                >
                  <option value="">Select Group</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Acc Balance Type */}
            <Col md={4}>
              <Form.Group controlId="formAccBalanceType">
                <Form.Label>Acc Balance Type</Form.Label>
                <Form.Select
                  name="accBalanceType"
                  value={formData.accBalanceType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Balance Type</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Select Bank */}
            <Col md={4}>
              <Form.Group controlId="formSelectBank">
                <Form.Label>Select Bank</Form.Label>
                <Form.Select
                  name="selectBank"
                  value={formData.selectBank}
                  onChange={handleInputChange}
                >
                  <option value="">Select Bank</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* A/C Holders Name */}
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

            {/* A/C No */}
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

            {/* IFSC Code */}
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
            {/* Bank Name */}
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

            {/* Bank Configuration */}
            <Col md={4}>
              <Form.Group controlId="formBankConfiguration">
                <Form.Label>Bank Configuration</Form.Label>
                <Form.Control
                  type="text"
                  name="bankConfiguration"
                  value={formData.bankConfiguration}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Cheque Books */}
            <Col md={4}>
              <Form.Group controlId="formChequeBooks">
                <Form.Label>Set Cheque Books</Form.Label>
                <Form.Control
                  type="text"
                  name="chequeBooks"
                  value={formData.chequeBooks}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Cheque Printing Config */}
            <Col md={4}>
              <Form.Group controlId="formChequePrintingConfig">
                <Form.Label>Set Cheque Printing Config</Form.Label>
                <Form.Control
                  type="text"
                  name="chequePrintingConfig"
                  value={formData.chequePrintingConfig}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Select Company */}
            <Col md={4}>
              <Form.Group controlId="formSelectCompany">
                <Form.Label>Select Company</Form.Label>
                <Form.Select
                  name="selectCompany"
                  value={formData.selectCompany}
                  onChange={handleInputChange}
                >
                  <option value="">Select Company</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Address Line 1 */}
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

            {/* Address Line 2 */}
            <Col md={4}>
              <Form.Group controlId="formAddressLine2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* City */}
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
          </Row>

          <Row>
            {/* State */}
            <Col md={4}>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Country */}
            <Col md={4}>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Phone No */}
            <Col md={4}>
              <Form.Group controlId="formPhoneNo">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* GSTIN */}
            <Col md={4}>
              <Form.Group controlId="formGstin">
                <Form.Label>GSTIN</Form.Label>
                <Form.Control
                  type="text"
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Acc Ledger Entry Date Time */}
            <Col md={4}>
              <Form.Group controlId="formAccLedgerEntryDateTime">
                <Form.Label>Acc Ledger Entry Date Time</Form.Label>
                <Form.Control
                  type="text"
                  name="accLedgerEntryDateTime"
                  value={formData.accLedgerEntryDateTime}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Tax Registration Details */}
            <Col md={4}>
              <Form.Group controlId="formTaxRegistrationDetails">
                <Form.Label>Tax Registration Details</Form.Label>
                <Form.Control
                  type="text"
                  name="taxRegistrationDetails"
                  value={formData.taxRegistrationDetails}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
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

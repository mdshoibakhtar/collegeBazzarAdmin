import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddContact = ({ show, onHide }) => {
    const [formData, setFormData] = useState({
        customerName: "",
        customerNumber: "",
        taskDetail: "",
        prefDate: "",
        prefTime: "",
        address: "",
        landmark: "",
        productDetail: "",
        modelNo: "",
        serviceDescription: "",
        message: "",
        attachedPhoto: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, attachedPhoto: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted", formData);
        onHide(); // Close the modal
    };

    return (
        <Modal show={show} onHide={onHide} dialogClassName="custom-modal-width">
            <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Customer Name and Customer Number */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Customer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="customerName"
                                    value={formData.customerName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Customer Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="customerNumber"
                                    value={formData.customerNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Task Detail, Preferred Date, and Preferred Time */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Task Detail</label>
                                <select
                                    className="form-control"
                                    name="taskDetail"
                                    value={formData.taskDetail}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Task</option>
                                    <option value="installation">Installation</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="repair">Repair</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="prefDate"
                                    value={formData.prefDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Preferred Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="prefTime"
                                    value={formData.prefTime}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Address and Landmark */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Landmark</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Product Detail and Model No */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Product Detail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="productDetail"
                                    value={formData.productDetail}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Model No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="modelNo"
                                    value={formData.modelNo}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 5: Service Description and Message */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Service Description</label>
                                <textarea
                                    className="form-control"
                                    name="serviceDescription"
                                    value={formData.serviceDescription}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 6: Attach Photo */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Attach Photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="attachedPhoto"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddContact;

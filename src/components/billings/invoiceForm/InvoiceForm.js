import React, { useState } from 'react'
import InvoicePartyClientSelectedSearch from './invoicePartyClientSelectedSearch/InvoicePartyClientSelectedSearch'

function InvoiceForm() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {/* Invoice Type */}
                    <div className="col-md-2">
                        <label className="form-label">Invoice Type</label>
                        <select className="form-select">
                            <option>Domestic</option>
                            <option>International</option>
                        </select>
                    </div>

                    {/* Invoice No */}
                    <div className="col-md-2">
                        <label className="form-label">Invoice No</label>
                        <input type="text" className="form-control" value="1" readOnly />
                    </div>

                    {/* Invoice Date */}
                    <div className="col-md-2">
                        <label className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" value="2024-11-20" />
                    </div>

                    {/* Party/Client Name */}
                    <div className="col-md-4">
                        <label className="form-label">Party/Client Name</label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter Client Name" />
                             <button className="btn border-0 position-relative" style={{top:"2px",right:"27px"}} onClick={() => setModalShow(true)}>
                            <i className="bi bi-search" ></i>
                             </button> 
                            {/* <button className="btn btn-outline-secondary">
                                <i className="bi bi-plus"></i>
                            </button> */}
                        </div>
                    </div>

                    {/* Booked By */}
                    <div className="col-md-2">
                        <label className="form-label">Booked By</label>
                        <input type="text" className="form-control" placeholder="Enter Booker Name" />
                    </div>

                    {/* Phone No */}
                    <div className="col-md-2">
                        <label className="form-label">Phone No</label>
                        <input type="text" className="form-control" placeholder="Enter Phone No" />
                    </div>

                    {/* Place of Supply */}
                    <div className="col-md-4">
                        <label className="form-label">Place of Supply</label>
                        <input type="text" className="form-control" placeholder="Enter Place of Supply" />
                    </div>
                </div>

                {/* Add and Close Buttons */}
                <div className="row mt-4">
                    <div className="col text-end">
                        <button className="btn btn-primary me-2">
                            <i className="bi bi-person-plus"></i> Add
                        </button>
                        <button className="btn btn-outline-danger">
                            <i className="bi bi-x"></i> Close
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                <div className="row mt-3">
                    <div className="col">
                        <p className="text-danger">Invalid Place of Supply</p>
                    </div>
                </div>
            </div>
            <InvoicePartyClientSelectedSearch
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default InvoiceForm
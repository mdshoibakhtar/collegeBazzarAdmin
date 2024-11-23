import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ItenaryAdd() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Itinerary</b></h4>
                                    <div>
                                        <Link className='btn btn-primary btn-sm' onClick={handleShow} to={"#"} role="button" aria-controls="offcanvasExample">Add Sightseeing</Link>
                                    </div>
                                </div>


                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>
                                    <div className='col-12 mb-3'>
                                        <div className="form-check float-end">
                                            <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                Create Itinerary
                                            </label>
                                        </div>
                                    </div>

                                    <div style={{ border: '1px dotted black', margin: '10px 0' }}>
                                        <h4 className='mb-3' style={{ color: 'red' }}>Day 1</h4>
                                        <div className='row'>
                                            <div className="form-group col-4">
                                                <label htmlFor="fromDate">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Title'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-8">
                                                <label htmlFor="fromDate">Sightseeing</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Sightseeing'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">City</label>
                                                <select className="form-select form-control" aria-label="Default select example">
                                                    <option value={122}>Manali</option>
                                                    <option value={222}>Amritsar</option>
                                                    <option value={322}>Delhi</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="fromDate">Choose Option</label>
                                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                                                    <div className="form-check me-4">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Breakfast
                                                        </label>
                                                    </div>
                                                    <div className="form-check me-4">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Lunch
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Dinner
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-12">
                                                <label htmlFor="fromDate">Other Details</label>
                                                <textarea class="form-control" placeholder='Enter Other Details' id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ border: '1px dotted black', margin: '10px 0' }}>
                                        <h4 className='mb-3' style={{ color: 'red' }}>Day 2</h4>
                                        <div className='row'>
                                            <div className="form-group col-4">
                                                <label htmlFor="fromDate">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Title'
                                                    id="fromDate"
                                                />
                                            </div>
                                            <div className="form-group col-8">
                                                <label htmlFor="fromDate">Sightseeing</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder='Enter Sightseeing'
                                                    id="fromDate"
                                                />
                                            </div>

                                            <div className="form-group col-12">
                                                <label htmlFor="fromDate">Choose Option</label>
                                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                                    <div className="form-check me-4">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Breakfast
                                                        </label>
                                                    </div>
                                                    <div className="form-check me-4">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Lunch
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                        <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                            Dinner
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 mt-2">
                                                <label htmlFor="fromDate">Other Details</label>
                                                <textarea class="form-control" placeholder='Enter Other Details' id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="form-group col-12 mt-3">
                                        <Link className="btn btn-danger float-end" to="/itenarary/flight" role="button" aria-controls="offcanvasExample">Save & Next</Link>
                                        <Link className="btn btn-primary float-end" to="/hotel-information" role="button" aria-controls="offcanvasExample">Back</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal aria-labelledby="example-modal-sizes-title-lg"
                    dialogClassName="custom-modal" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">Add Sightseeing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <div className='row p-0'>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">City</label>
                                    <select className="form-select form-contro" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Sightseeing Activity</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Sightseeing Activity'
                                    />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Duration'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Close Day</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Close Day'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Timings(Open - Close)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Timings(Open - Close)'
                                    />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Remark</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Remark'
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label htmlFor="fromDate">Description</label>
                                    <textarea class="form-control" placeholder='Enter Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Inclusion</label>
                                    <textarea class="form-control" placeholder='Enter Inclusion' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Exclusion</label>
                                    <textarea class="form-control" placeholder='Enter Exclusion' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Internal Remark1</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Internal Remark1'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Internal Remark2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Internal Remark2'
                                    />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Transport</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Transport</option>
                                        <option value={1}>1 Star</option>
                                        <option value={2}>2 Star</option>
                                        <option value={3}>3 Star</option>
                                        <option value={3}>4 Star</option>
                                        <option value={3}>5 Star</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Set Time</label>
                                    <select className="form-select form-contro" aria-label="Default select example">
                                        <option selected>Select Set Time</option>
                                        <option value={122}>Standard</option>
                                        <option value={222}>Deluxe</option>
                                        <option value={322}>Luxury</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Upload Images</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder=''
                                    />
                                </div>

                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ItenaryAdd
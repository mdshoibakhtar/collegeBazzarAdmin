import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../common/CustomInputField'
import Select from 'react-select';
function AddVisaMArkup({ show, setShow, handleSubmit }) {
    const countries = [
        { value: 'US', label: 'United States' },
        { value: 'IN', label: 'India' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'CN', label: 'China' },
        { value: 'AU', label: 'Australia' },
        { value: 'All', label: 'All Country List' },
        // Add more countries as needed
    ];
    const handleChange = () => {

    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log(`Selected country:`, selectedOption);
    };
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>Add Visa Mark UP
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">


                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Markup For </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryChange}
                                                    options={countries}
                                                    placeholder="Select Visa By Country *"
                                                    isSearchable
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryChange}
                                                    options={countries}
                                                    placeholder="Select Visa type *"
                                                    isSearchable
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Display Markup</option>
                                                    <option value={1}>In Tax</option>
                                                    <option value={3}>In Service Charge</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Markup Type</option>
                                                    <option value={1}>Fixed</option>
                                                    <option value={3}>Percent</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Value"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="max-limit"
                                                    name="max-limit"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            

                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Status</option>
                                                    <option value={1}>Active</option>
                                                    <option value={3}>In Active</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-12">
                                                <div className='d-flex justify-content-end'>
                                                    <button className="btn btn-warning" type="button" >
                                                         Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddVisaMArkup
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

function TransportInformation() {
    const [value, setValue] = useState('');
    const [inclusionVal, setInclusionVal] = useState('');
    const [exclusionVal, setExclusionVal] = useState('');
    const [termsConditionVal, setTermsConditionVal] = useState('');
    const [othersVal, setOthersVal] = useState('');
    const [extraOneVal, setExtraOneVal] = useState('');
    const [extraTwoVal, setExtraTwoVal] = useState('');

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Transport Information</b></h4>
                                </div>

                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Transport Information</h4>
                                    <div className='row'>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Vehicle Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fromDate"
                                                placeholder='Vehicle Type'
                                            />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Vehicle Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fromDate"
                                                placeholder='Vehicle Name'
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Others</h4>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Free Wi-fi
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Airport Transfers-Private
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Airport Transfers-SIC
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Travel Insurance
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Visa
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Inter Hotel Transfer- Private
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Sightseeing Transfers - Private
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Sightseeing Transfers - SIC
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-5'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Airport transfers - Speed Boat/Sea Plane
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Inter Hotel Transfer- SIC
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Candlelight Dinner
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Bed Decorations
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Honeymoon Cake
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Private Ferry
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Private Cruise
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Scuba Diving
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Parasailing
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Sea Walk
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Photoshoot For Couple
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Candle Light Dinner With Wine
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Jet Ski
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Candle Dinner Without Wine
                                                </label>
                                            </div>
                                        </div>

                                        <div className='col-2'>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                    Snorkeling
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Overview</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={value}
                                                onChange={setValue}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Inclusions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={inclusionVal}
                                                onChange={setInclusionVal}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Exclusions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={exclusionVal}
                                                onChange={setExclusionVal}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Terms and Conditions</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={termsConditionVal}
                                                onChange={setTermsConditionVal}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Others</h4>
                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={othersVal}
                                                onChange={setOthersVal}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 1</h4>
                                    <div className='row'>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Label'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={extraOneVal}
                                                onChange={setExtraOneVal}
                                            />
                                        </div>
                                    </div>
                                    <h4 className='mb-2 mt-3' style={{ color: 'red' }}>Extra 2</h4>
                                    <div className='row'>
                                        <div className="form-group col-6">
                                            <label htmlFor="fromDate">Label</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Label'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-12">
                                            <ReactQuill
                                                theme="snow"
                                                value={extraTwoVal}
                                                onChange={setExtraTwoVal}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group col-12 mt-3">
                                        <Link className="btn btn-danger float-end" to="/transport-information" role="button" aria-controls="offcanvasExample">Save & Next</Link>
                                        <Link className="btn btn-primary float-end" to="/itenarary/flight" role="button" aria-controls="offcanvasExample">Back</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransportInformation
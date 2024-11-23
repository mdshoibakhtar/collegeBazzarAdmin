import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

function FilghtAdd() {
    const [value, setValue] = useState('');

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Flight</b></h4>
                                </div>

                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Flight</h4>

                                    <div className='row'>
                                        <div className="form-group col-12">
                                            <label htmlFor="fromDate">Other Details</label>
                                            <ReactQuill
                                                theme="snow"
                                                value={value}
                                                onChange={setValue}
                                            />
                                        </div>

                                        <div className="form-group col-6 mt-2">
                                            <label htmlFor="fromDate">Attach File</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="fromDate"
                                            />
                                        </div>
                                    </div>



                                    <div className="form-group col-12 mt-3">
                                        <Link className="btn btn-danger float-end" to="/transport-information" role="button" aria-controls="offcanvasExample">Save & Next</Link>
                                        <Link className="btn btn-primary float-end" to="/itenarary" role="button" aria-controls="offcanvasExample">Back</Link>
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

export default FilghtAdd
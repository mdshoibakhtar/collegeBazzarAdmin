import React from 'react'

function AddUnit() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Unit</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Unit Name'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-3">
                                        <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                            <label
                                                className="form-check-label me-2"
                                                htmlFor="flexSwitchCheckDefault"
                                            >
                                                Approve This Language
                                            </label>
                                            <input
                                                style={{ marginLeft: '80px', border: '1px solid black' }}
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                            />
                                        </div>
                                    </div>




                                    <div className="form-group col-12 mt-3">
                                        <button type="button" className="btn btn-warning float-end" >
                                            RESET
                                        </button>
                                        <button type="submit" className="btn btn-primary float-end">
                                            SAVE
                                        </button>
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

export default AddUnit
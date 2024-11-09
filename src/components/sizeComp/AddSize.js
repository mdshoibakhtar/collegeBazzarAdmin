import React from 'react'

function AddSize() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Size</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Size</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Size'
                                            id="fromDate"
                                        />
                                    </div>


                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Size Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Size Code'
                                            id="fromDate"
                                        />
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

export default AddSize
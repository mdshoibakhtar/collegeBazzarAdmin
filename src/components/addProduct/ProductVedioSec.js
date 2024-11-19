import React from 'react'

function ProductVedioSec() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Product Videos</h3>
                            <hr />

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Video Provider</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>Select Video Provider</option>
                                    <option value={111331}>One</option>
                                    <option value={211331}>Two</option>
                                    <option value={311331}>Three</option>
                                </select>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Video Link</label>
                                <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder='Enter Video Link'
                                    id="fromDate"
                                />
                                <small>Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductVedioSec
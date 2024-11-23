
export default function Package() {

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">package Details
                    </h4>
                </div>
            </div>
            <h3 className="fs-5 px-4 bg-warning fw-normal">  Please select this option only if you have created packeges already in the system.</h3>
            <div className="row">
                <div className="col-4">
                    <div className="mt-2">
                        <label className="form-label">Tour Start Date </label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-2">
                        <label className="form-label">Budget</label>
                        <input placeholder="Budget" className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-2">
                        <label className="form-label">Extra Details</label>
                        <div className="w-100">
                            <textarea className="form-control" style={{ height: "100px" }} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="table-responsive active-projects style-1 mt-4">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Select Package
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Tour Start Date  <span className="text-danger fs-5">*</span></label>
                        <select className="form-select shadow" name="Status">
                            <option>select Country</option>
                            <option>india </option>
                        </select>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Search by Package Name</label>
                        <input placeholder="Search by Package Name" type="search" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}
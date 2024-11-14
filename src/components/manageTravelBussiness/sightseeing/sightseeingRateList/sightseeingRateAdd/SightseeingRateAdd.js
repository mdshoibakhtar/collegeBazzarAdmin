import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa"
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const SightseeingRateAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Add Sightseeing Rate',
        path_2: ``
    };
    return (
        <>

            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Add Sightseeing Rate</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p><FaGlobe color="red" /> <strong>Title</strong></p>
                                        <p>Visit</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaMapMarkerAlt color="red" /> <strong>City</strong></p>
                                        <p>Delhi</p>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Form Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Currency</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Currency</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Adult Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Enter Adult Rate"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Enter Child Rate"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SightseeingRateAdd
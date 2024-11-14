import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const HotelAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Create Hotel',
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
                                <h4 className="heading mb-0 p-2">Create Hotel</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotel Name <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Hotel Name"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Country  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Country </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">City <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter City"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Address </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Address"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Contact </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Contact"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email Id </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email Id"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Rating  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Rating </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Hotel Type  <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Hotel Type </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child Free Age - No charges till this age </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Child Free Age"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Child Without Bed Age - Without bed charges till this age </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Child Without Bed Age"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Amenities </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Amenities"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Description </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Upload Images </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder="Enter Amenities"
                                            name="title"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Save
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

export default HotelAdd
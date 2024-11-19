

const HotelFilter = ({ countryData, filterInitial, handleChange, getTransitionReport }) => {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter All Hotels</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.start_date}
                                        name="start_date"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.end_date}
                                        name="end_date"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Country</label>
                                    <select className="form-control" aria-label="Default select example" name="country_id" onChange={handleChange}>
                                        <option selected>Open this select Country</option>
                                        {countryData && countryData?.map((item) => {
                                            return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                        })}
                                    </select>

                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">City Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={filterInitial?.city_id}
                                        name="city_id"
                                        onChange={handleChange}
                                        placeholder='Search City Name'
                                    />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelFilter
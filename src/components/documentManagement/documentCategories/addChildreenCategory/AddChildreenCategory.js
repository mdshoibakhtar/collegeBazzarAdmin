import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const AddChildreenCategory = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Document Management",
        title_2: 'Child Categories Add',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2 py-2">
                                    <h4 className="heading mb-0"><b>Child Categories Add
                                    </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label"> Name </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Discription</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Discription" />
                                        </div>

                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <div className='d-flex justify-content-start'>
                                                <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                    <i className="fas fa-search"></i> Save
                                                </button>

                                            </div>
                                        </div>
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

export default AddChildreenCategory
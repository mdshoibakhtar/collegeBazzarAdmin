import React from 'react'

function SeoSection() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>SEO Meta Tags</h3>
                            <hr />


                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Title</label>
                                <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder='Enter Meta Title'
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Keyword</label>
                                <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder='Enter Meta Keyword'
                                    id="fromDate"
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Slug</label>
                                <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder='Enter Slug'
                                    id="fromDate"
                                />
                            </div>
                            <div className="form-group col-12 mt-2 ps-0">
                                <button className='btn btn-primary' type='button'>Fetch AI Content</button>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Description' rows="5"></textarea>
                            </div>
                            <div className="form-group col-12 mt-2 ps-0">
                                <button className='btn btn-primary' type='button'>Fetch AI Content</button>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Image</label>
                                <input
                                    type="file"
                                    className="form-control mb-0"
                                    placeholder='Enter Meta Image'
                                    id="fromDate"
                                />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeoSection
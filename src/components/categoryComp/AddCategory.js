import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddCategory() {
    const [text, setText] = useState('');

    const handleChange = (value) => {
        setText(value);
    };


    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'], // Removes formatting
        ],
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Category</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Category Name'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Parent Category</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Parent Category</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>

                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Ordering Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Ordering Number'
                                            id="fromDate"
                                        />
                                        <small>Higher number has high priority</small>
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Type</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Type</option>
                                            <option value={'Physical'}>Physical</option>
                                            <option value={'Digital'}>Digital</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-10 mt-2 mb-3">
                                        <label>Description</label>
                                        <ReactQuill
                                            value={text}
                                            onChange={handleChange}
                                            modules={modules} 
                                            placeholder="Start typing..."
                                        />
                                    </div>



                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Banner</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder='Enter Banner'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Icon</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder='Enter Icon'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Video Link</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Video Link'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Meta Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Meta Title'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Meta Description</label>
                                        <textarea class="form-control" placeholder="Enter Meta Description" id="exampleFormControlTextarea1" rows="4"></textarea>
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Meta Keywords</label>
                                        <textarea class="form-control" placeholder="Enter Meta Keywords" id="exampleFormControlTextarea1" rows="4"></textarea>
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Slug (Without Space) </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Slug'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Commission Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Commission Rate'
                                            id="fromDate"
                                        />
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Level</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Enter Level'
                                            id="fromDate"
                                        />
                                    </div>
                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Top</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Top</option>
                                            <option value={'Yes'}>Yes</option>
                                            <option value={'No'}>No</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-10">
                                        <label htmlFor="fromDate">Featured</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Featured</option>
                                            <option value={'Yes'}>Yes</option>
                                            <option value={'No'}>No</option>
                                        </select>
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

export default AddCategory
import JoditEditor from "jodit-react";


export default function Other() {
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Other</h4>
                </div>
            </div>
            <div className="row" >
                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Select Country </label>
                        <select className="form-select shadow" >
                            <option>select Country</option>
                            <option>india </option>
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-2">
                        <label className="form-label"> Travel Date</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-2">
                        <label className="form-label">No. of days</label>
                        <input placeholder="NO.of Days" className="form-control" type="number" />
                    </div>
                </div>

                <div className="col-4">
                    <div className="mt-2">
                        <label className="form-label">Sub Category</label>
                        <input className="form-control" placeholder="Sub Category" type="text" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-2">
                        <label className="form-label">Description <span className="text-danger fs-5">*</span></label>
                        <div className="w-100 shadow">
                            <JoditEditor
                            // ref={editor}
                            // value={content}
                            // onChange={newContent => setContent(newContent)}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
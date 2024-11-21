import JoditEditor from "jodit-react";
import CustomInputField from "../../../common/CustomInputField";

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
                        <label className="d-block my-1">Select Country </label>
                        <select className="form-select" name="Status">
                            <option>select Country</option>
                            <option>india </option>
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-2">
                        <label className="d-block my-1"> Travel Date</label>
                        <div className="w-100">
                            <CustomInputField
                                type={"date"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mt-2">
                        <label className="d-block my-1">No. of days</label>
                        <div className="w-100">
                            <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="mt-2">
                        <label className="d-block my-1">Sub Category</label>
                        <div className="w-100">
                            <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-2">
                        <label className="d-block my-1">Description <span className="text-danger fs-5">*</span></label>
                        <div className="w-100">
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
import React, { useState } from "react";
import CustomInputField from "../../../../common/CustomInputField";

export default function Visa() {
    const [rows, setRows] = useState([
        {
            from: "",
            to: "",
            departure: "",
            return: "",
            class: "",
            domestic: false,
            international: false,
            flexibility: "",
            preference: "",
        }
    ]);

    const AddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                from: "",
                to: "",
                departure: "",
                return: "",
                class: "",
                domestic: false,
                international: false,
                flexibility: "",
                preference: "",
            },
        ]);
    };

    const removeRow = (index) => {
        setRows(prevRows => prevRows.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Visa</h4>
                </div>
            </div>
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option>Select Country</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Visa Category</label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option>Select visa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Visa type</label>
                                    <div className="w-100">
                                        <select className="form-select" name="Status">
                                            <option>Single</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Duration <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Travel Date</label>
                                    <div className="w-100">
                                        <CustomInputField type="date" disable="disable" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Job Profile</label>
                                    <div className="w-100">
                                        <CustomInputField type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Age</label>
                                    <div className="w-100">
                                        <CustomInputField type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Qualification</label>
                                    <div className="w-100">
                                        <CustomInputField type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Description</label>
                                    <div className="w-100">
                                        <textarea className="w-100 border" style={{ height: "100px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "d-block"}`}
                            onClick={() => removeRow(index)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            ))}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRow}>
                    + Add more
                </button>
            </div>
        </div>
    );
}

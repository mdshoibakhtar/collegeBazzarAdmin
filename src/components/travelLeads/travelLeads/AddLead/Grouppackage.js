import React, { useState } from "react";
import CustomInputField from "../../../../common/CustomInputField";

export default function GroupPackage() {
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
    ]); // Initialize as an array

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
                    <h4 className="heading mb-0">Group package</h4>
                </div>
            </div>
            {rows.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Select countries to get available package list</label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option>Select Country</option>
                                    <option>india </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Search Package Name</label>
                            <div className="w-100">
                                <CustomInputField type={"Search"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Preference</label>
                            <div className="w-100">
                                <select className="form-select">
                                    <option></option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mt-2">
                            <label className="d-block my-1">Remark</label>
                            <div className="w-100">
                                <textarea className="w-100 border" style={{ height: "100px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            )}
            <div className="my-4">
                <button className="btn m-0 btn-outline-primary" onClick={AddRow}> + Add more</button>
            </div>
        </div>
    )
}
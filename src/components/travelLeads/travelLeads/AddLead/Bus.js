import React, { useState } from "react";


export default function Bus() {
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
                    <h4 className="heading mb-0">Bus</h4>
                </div>
            </div>
            {rows.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Country </label>
                            <select className="form-select shadow" name="Status">
                                <option>select Country</option>
                                <option>india </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">From City  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" placeholder="From City" type="text" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">To City  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" placeholder="To City" type="text" />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Departure  <span className="text-danger fs-5">*</span></label>
                            <input type="text" className="form-control" placeholder="Departure" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Return</label>
                            <input className="form-control" placeholder="Returm" type="text" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Preference</label>
                            <div className="w-100">
                                <select className="form-select shadow">
                                    <option></option>
                                    <option>Economy </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mt-2">
                            <label className="form-label">Remark</label>
                            <div className="w-100">
                                <textarea className="form-control" placeholder="Remark" style={{ height: "100px" }} />
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
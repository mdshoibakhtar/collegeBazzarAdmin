import React, { useState } from "react";


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
                            <label className="form-label">Country <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow" name="Status">
                                    <option>Select Country</option>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Visa Category</label>
                            <div className="w-100">
                                <select className="form-select shadow " name="Status">
                                    <option>Select visa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Visa type</label>
                                    <div className="w-100">
                                        <select className="form-select shadow " name="Status">
                                            <option>Single</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Duration <span className="text-danger fs-5">*</span></label>
                                    <input className="form-control" placeholder="Duration" type="text" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Travel Date</label>
                                    <input className="form-control" type="date" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Job Profile</label>
                                    <input placeholder="Job Profile" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" placeholder="Age" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="form-label">Qualification</label>
                                    <input placeholder="Qualifiction" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="form-label">Description</label>
                                    <div className="w-100">
                                        <textarea className="form-control" style={{ height: "100px" }} />
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

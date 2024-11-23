import React, { useState } from "react";


export default function Passport() {
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
                    <h4 className="heading mb-0">Passport</h4>
                </div>
            </div>
            {rows.map((row, index) =>
                <div className="row">
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Issusing Country  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select shadow" name="Status">
                                    <option>Select Country</option>
                                    <option>india </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Date  <span className="text-danger fs-5">*</span></label>
                            <input className="form-control" type="date" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Current Passport No.</label>
                            <input className="form-control" type="text" placeholder="Current Passport No." />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Place of Apply </label>
                            <input placeholder="place of apply" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">No. Of Person</label>
                            <input type="text" className="form-control" placeholder="no. of person" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Category  <span className="text-danger fs-5">*</span></label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio" name="passport" />
                                    <label className="m-0">New Passport</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio" name="passport" />
                                    <label className="m-0">Renew Passport</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="form-label">Current Expiry Date</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Urgent</label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox" />
                                    <label className="m-0">Urgent</label>
                                </div>
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
import React, { useState } from "react";
import CustomInputField from "../../../common/CustomInputField";

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
                            <label className="d-block my-1">Issusing Country  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option>Select Country</option>
                                    <option>india </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Date  <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"Date"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Current Passport No.</label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"text"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Place of Apply </label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"text"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">No. Of Person</label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"text"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Category  <span className="text-danger fs-5">*</span></label>
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
                            <label className="d-block my-1">Current Expiry Date</label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"Date"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Urgent</label>
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
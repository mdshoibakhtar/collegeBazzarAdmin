import React, { useState } from "react";
import CustomInputField from "../../../../common/CustomInputField";

export default function TrvelInsurance() {
    const [rows, setRows] = useState([
        {
            country: "",
            duration: "",
            visaInsurance: "No",
            travelDate: "",
        }
    ]); // Initialize as an array

    const AddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                country: "",
                duration: "",
                visaInsurance: "No",
                travelDate: "",
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
                    <h4 className="heading mb-0">Travel Insurance</h4>
                </div>
            </div>
            {rows.map((row, index) =>
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Country <span className="text-danger fs-5">*</span></label>
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
                            <label className="d-block my-1">How long? <span className="text-danger fs-5">*</span></label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"text"}

                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Insurance for Visa </label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="mt-2">
                            <label className="d-block my-1">Travel Date</label>
                            <div className="w-100">
                                <CustomInputField
                                    type={"text"}
                                />
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
import React, { useState } from "react";
import CustomInputField from "../../../common/CustomInputField";

export default function FlightBooking() {
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
                    <h4 className="heading mb-0">Flight Booking</h4>
                </div>
            </div>
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">
                                From <span className="text-danger fs-5">*</span>
                            </label>
                            <div className="w-100">
                                <CustomInputField type={"date"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">
                                To <span className="text-danger fs-5">*</span>
                            </label>
                            <div className="w-100">
                                <CustomInputField type={"date"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">
                                        Departure
                                        <span className="text-danger fs-5">*</span>
                                    </label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Return</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Class</label>
                            <div className="w-100">
                                <select className="form-select" name="Status">
                                    <option></option>
                                    <option>Economy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Category</label>
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox" />
                                    <label className="m-0">Domestic Flight</label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox" />
                                    <label className="m-0">International Flight</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Flexibility</label>
                                    <div className="w-100">
                                        <select className="form-select" name="Status">
                                            <option></option>
                                            <option>Flexible</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Preference</label>
                                    <div className="w-100">
                                        <select className="form-select" name="Status">
                                            <option></option>
                                            <option>Window Seat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={()=>removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            ))}
            <div className="my-4">
                <button
                    className="btn m-0 btn-outline-primary"
                    onClick={AddRow}
                >
                    + Add more
                </button>
            </div>
        </div>
    );
}

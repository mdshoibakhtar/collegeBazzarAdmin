import React, { useState } from "react";
import CustomInputField from "../../../../common/CustomInputField";

export default function HotelBooking() {
    const [rows, setRows] = useState([
        {
            country: "",
            city: "",
            roomType: "",
            starRating: "",
            checkIn: "",
            checkOut: "",
            numberOfNights: "",
            budget: "",
            hotelName: "",
            numberOfRooms: "",
        },
    ]);

    const addRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                roomType: "",
                starRating: "",
                checkIn: "",
                checkOut: "",
                numberOfNights: "",
                budget: "",
                hotelName: "",
                numberOfRooms: "",
            },
        ]);
    };

    const removeRow = (index) => {
        setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Hotel Booking</h4>
                </div>
            </div>

            {rows.map((row, index) => (
                <div className="row mb-3" key={index}>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">
                                Country <span className="text-danger fs-5">*</span>
                            </label>
                            <div className="w-100">
                                <select
                                    className="form-select"
                                    value={row.country}
                                    onChange={(e) => handleInputChange(index, "country", e.target.value)}
                                >
                                    <option value="">Select Your Country</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">
                                City <span className="text-danger fs-5">*</span>
                            </label>
                            <CustomInputField
                                type="text"
                                value={row.city}
                                onChange={(e) => handleInputChange(index, "city", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Room Type</label>
                            <select
                                className="form-select"
                                value={row.roomType}
                                onChange={(e) => handleInputChange(index, "roomType", e.target.value)}
                            >
                                <option value="">Select Room</option>
                                <option value="Economy">Economy</option>
                                <option value="Standard">Standard</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Star Rating</label>
                            <select
                                className="form-select"
                                value={row.starRating}
                                onChange={(e) => handleInputChange(index, "starRating", e.target.value)}
                            >
                                <option value="">Select Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">
                                        Check-in <span className="text-danger fs-5">*</span>
                                    </label>
                                    <CustomInputField
                                        type="time"
                                        value={row.checkIn}
                                        onChange={(e) => handleInputChange(index, "checkIn", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">
                                        Check-out <span className="text-danger fs-5">*</span>
                                    </label>
                                    <CustomInputField
                                        type="time"
                                        value={row.checkOut}
                                        onChange={(e) => handleInputChange(index, "checkOut", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Number of Nights</label>
                                    <CustomInputField
                                        type="number"
                                        value={row.numberOfNights}
                                        onChange={(e) => handleInputChange(index, "numberOfNights", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Budget</label>
                                    <CustomInputField
                                        type="number"
                                        value={row.budget}
                                        onChange={(e) => handleInputChange(index, "budget", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Hotel Name</label>
                            <CustomInputField
                                type="text"
                                value={row.hotelName}
                                onChange={(e) => handleInputChange(index, "hotelName", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="d-block my-1">Number of Rooms</label>
                            <CustomInputField
                                type="number"
                                value={row.numberOfRooms}
                                onChange={(e) => handleInputChange(index, "numberOfRooms", e.target.value)}
                            />
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
                <button className="btn m-0 btn-outline-primary" onClick={addRow}>
                    + Add More
                </button>
            </div>
        </div>
    );
}

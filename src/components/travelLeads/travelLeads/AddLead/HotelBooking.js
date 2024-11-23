import React, { useState } from "react";


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
                            <label className="form-label">
                                Country <span className="text-danger fs-5">*</span>
                            </label>
                            <div className="w-100">
                                <select
                                    className="form-select shadow"
                                // value={row.country}
                                // onChange={(e) => handleInputChange(index, "country", e.target.value)}
                                >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">
                                City <span className="text-danger fs-5">*</span>
                            </label>
                            <input placeholder="city" type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Room Type</label>
                            <select
                                className="form-select shadow"
                            // value={row.roomType}
                            // onChange={(e) => handleInputChange(index, "roomType", e.target.value)}
                            >
                                <option value="">Select Room</option>
                                <option value="Economy">Economy</option>
                                <option value="Standard">Standard</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Star Rating</label>
                            <select
                                className="form-select shadow"
                            // value={row.starRating}
                            // onChange={(e) => handleInputChange(index, "starRating", e.target.value)}
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
                                    <label className="form-label">
                                        Check-in <span className="text-danger fs-5">*</span>
                                    </label>
                                    <input className="form-control"
                                        type="time"
                                    // value={row.checkIn}
                                    // onChange={(e) => handleInputChange(index, "checkIn", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">
                                        Check-out <span className="text-danger fs-5">*</span>
                                    </label>
                                    <input className="form-control"
                                        type="time"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">Number of Nights</label>
                                    <input className="form-control" placeholder="Number of nigths"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="form-label">Budget</label>
                                    <input className="form-control" placeholder="Budget"
                                        type="number"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Hotel Name</label>
                            <input className="form-control" placeholder="Hotel Name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="mt-2">
                            <label className="form-label">Number of Rooms</label>
                            <input className="form-control" placeholder="Number of rooms"
                                type="number"
                            />
                        </div>
                    </div>

                    <div className="col-12 my-2 d-flex justify-content-end">
                        <button
                            className={`btn btn-outline-danger m-0 ${index === 0 ? "d-none" : "form-label"}`}
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

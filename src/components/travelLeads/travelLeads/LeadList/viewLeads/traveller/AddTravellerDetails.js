import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";

export default function AddTravellerDetails({ cnacleAddTravel }) {

    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Traveller Details</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Salutation </label>
                        <select className="form-select shadow" name="Status">
                            <option>Mr</option>
                            <option>Miss </option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Given Name<span className="text-danger fs-5">*</span></label>
                        <input className="form-control" type="text" placeholder="text" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Surname <span className="text-danger fs-5">*</span></label>
                        <input className="form-control" type="text" placeholder="Surname" />
                    </div>
                </div>

                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Customer Type</label>
                        <div className="w-100 mt-1">
                            <div className="d-flex gap-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio" name="passport" />
                                    <label className="m-0">Adult
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio" name="passport" />
                                    <label className="m-0">Children
                                    </label>
                                </div>
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="radio" name="passport" />
                                    <label className="m-0">Infont</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Date Of birth</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Contact Number</label>
                        <input className="form-control" type="number" placeholder="Contact Number" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Passport Number</label>
                        <input className="form-control" type="text" placeholder="passport Number" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Passport Expiry</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Date of Issue</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Place of Issue</label>
                        <input className="form-control" type="number" placeholder="place of issue" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Place of Birth</label>
                        <input className="form-control" type="date" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Address</label>
                        <input className="form-control" type="number" placeholder="Adress" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Meal Preference</label>
                        <input className="form-control" type="text" placeholder="meal preference" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Frequent Flyer</label>
                        <div className="w-100">
                            <TextArea className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Pan Card</label>
                        <input className="form-control" type="text" placeholder="Pan card" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Comapany Name</label>
                        <input className="form-control" type="text" placeholder="Comap" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Comapany Pan Card</label>
                        <input type="text" className="form-control" placeholder="compaany pan card" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="form-label">Remark</label>
                        <input className="form-control" type="text" placeholder="reamark" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-4 d-flex gap-2">
                        <button className="btn btn-primary m-0">Save</button>
                        <button className="btn btn-outline-primary m-0" onClick={cnacleAddTravel}>Cancle</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
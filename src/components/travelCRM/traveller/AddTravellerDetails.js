import React, { useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
import TextArea from "antd/es/input/TextArea";

export default function AddTravellerDetails() {

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
                        <label className="d-block my-1">Salutation </label>
                        <select className="form-select" name="Status">
                            <option>Mr</option>
                            <option>Miss </option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Given Name<span className="text-danger fs-5">*</span></label>
                        <div className="w-100">
                            <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Surname <span className="text-danger fs-5">*</span></label>
                        <div className="w-100">
                            <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Customer Type</label>
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
                        <label className="d-block my-1">Date Of birth</label>
                        <div className="w-100">
                            <CustomInputField
                                type={"date"}
                                disable={"disable"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Contact Number</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"number"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Passport Number</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"number"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Passport Expiry</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"date"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Date of Issue</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"date"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Place of Issue</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"number"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Place of Birth</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Address</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Meal Preference</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Frequent Flyer</label>
                        <div className="w-100">
                        <TextArea className="w-100 border"/>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Pan Card</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Comapany Name</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Comapany Pan Card</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="mt-2">
                        <label className="d-block my-1">Remark</label>
                        <div className="w-100">
                        <CustomInputField
                                type={"text"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mt-4 d-flex gap-2">
                        <button className="btn btn-primary m-0">Save</button>
                        <button className="btn btn-outline-primary m-0">Cancle</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
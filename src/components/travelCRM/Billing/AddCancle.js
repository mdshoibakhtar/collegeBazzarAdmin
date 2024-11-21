import React, { useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";

export default function AddCancleRefund() {
    const [rows, setRows] = useState([
        {
            supplier: "",
            enquiry: " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
        }
    ]);
    const [info, setInfo] = useState([
        {
            enquiry: "",
            description : " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
        }
    ]);

    const AddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            {
                supplier: "",
            enquiry: " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
            },
        ]);
    };
    const AddInfo = () => {
        setInfo((prevRows) => [
            ...prevRows,
            {
                enquiry: "",
            description : " ",
            cost: " ",
            servicecharge: " ",
            taxvalue: " ",
            remark: " ",
            subtotal: " ",
            },
        ]);
    };

    const removeRow = (index) => {
        setRows(prevRows => prevRows.filter((_, i) => i !== index));
    };
    const removeInfo = (index) => {
        setInfo(prevRows => prevRows.filter((_, i) => i !== index));
    };
    return (
        <div className="m-4">
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Billing</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" to="/addtraveller" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-user-plus"></i>  Add Cancel/Refund Details</Link>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Add Supplier Info</h4>
                                </div>
                            </div>
                            {rows.map((row, index) =>
                                <div className="row" key={index}>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Supplier <span className="text-danger fs-5">*</span></label>
                                            <select className="form-select" name="Status">
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Enquiry <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Cost  <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Service Charge <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"text"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Tax Value <span className="text-danger fs-5">*</span></label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"number"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Remark</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"number"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mt-2">
                                            <label className="d-block my-1">Sub Total</label>
                                            <div className="w-100">
                                                <CustomInputField
                                                    type={"number"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 my-2 d-flex justify-content-end">
                                        <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeRow(index)}><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            )}
                            <div className="mt-3">
                                <button className="btn btn-primary" onClick={AddRow}>Add more</button>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="mt-2">
                                        <label className="d-block my-1">Total Supplier Amount</label>
                                        <div className="w-100">
                                            <CustomInputField
                                                type={"text"}
                                                disable={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive active-projects style-1 my-4">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Customer Info</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">Customer <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                            disable={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2">
                                    <label className="d-block my-1">Customer Number <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                            disable={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {info.map((row, index)=>
                        <div className="row" key={index}>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Enquiry <span className="text-danger fs-5">*</span></label>
                                    <select className="form-select" name="Status">
                                        <option></option>
                                        <option>all</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Description  <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Cost  <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Service Charge  <span className="text-danger fs-5">*</span></label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Tax Value</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Sub Total</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2 d-flex justify-content-end">
                                <button className={`btn btn-outline-danger m-0 ${index == 0 ? "d-none" : "d-block"}`} onClick={() => removeInfo(index)}><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>
                        )}
                        <div className="mt-3">
                            <button className="btn btn-primary" onClick={AddInfo}>Add more</button>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="mt-2">
                                    <label className="d-block my-1">Total</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={"text"}
                                            disable={true}
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
                        </div>
                        <div className="d-flex my-4 gap-2">
                            <button className="btn btn-primary m-0">Save</button>
                            <button className="btn btn-outlint-primary m-0">Cancle</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
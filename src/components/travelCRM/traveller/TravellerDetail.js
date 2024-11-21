import { Popconfirm } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./SearchTraveller";

export default function TravellerDetail() {
    const [Accordion, SetAccordion] = useState(false)
    const [show, setShow] = useState(false);
    const handleAccordin = (num) => {
        SetAccordion(num)
    }
    const item = null
    return (
        <div className="m-4">

            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Traveller Details</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" to="/addtraveller" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-user-plus"></i> Add Traveller</Link>
                        <Link className="btn btn-primary btn-sm" onClick={() => setShow(!show)}><i class="fa-solid fa-magnifying-glass"></i> Search</Link>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0" onClick={() => handleAccordin(!Accordion)}><button className="m-0 p-0">{Accordion === true ? <i class="fa-solid fa-circle-chevron-down"></i> : <i class="fa-solid fa-circle-chevron-up"></i>}</button> Lead Report</h4>
                                </div>
                                {Accordion &&
                                    <div className="row mx-2 my-4" style={{ gap: "20px 0px" }}>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Title</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">Mr</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Given Name</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">LEAD</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Last Name</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">Mr</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="d-flex">
                                                <Link to={`/newvblock/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                <Popconfirm
                                                // title="Delete Block!"
                                                // description="Are you sure to delete ?"
                                                // onConfirm=""
                                                // onCancel=""
                                                // okText="Yes"
                                                // cancelText="No"
                                                >
                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                </Popconfirm>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Type</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">adult</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Date of Birth</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Contact No.</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Passport No.</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Pasport Expiry</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Date of issue</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Birth Place</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Place of issue</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Address</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Meal Preference</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Frequent Flyer</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Pan Card</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Comapay Name</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Comapay Pan Card</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div>
                                                <h3 className="text-secondary m-0 fs-6 fw-normal">Remark</h3>
                                                <h2 className="text-dark fw-normal m-0 fs-5">-</h2>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {show && <Search show={show} setShow={setShow} />}
        </div>
    )
}
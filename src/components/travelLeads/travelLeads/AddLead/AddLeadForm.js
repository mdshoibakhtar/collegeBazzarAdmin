import React, { useState } from "react";
import FlightBooking from "./FlightBooking";
import HotelBooking from "./HotelBooking";
import Visa from "./Visa";
import Forex from "./Forex";
import Transport from "./Transport";
import GroupPackage from "./Grouppackage";
import CoustumPackage from "./CustomPackage";
import Bus from "./Bus";
import Train from "./Train";
import Sightseeing from "./Sightseeing";
import Passport from "./Passport";
import TrvelInsurance from "./TravelInsurance";
import Cruise from "./Cruise";
import Adventure from "./Adventure";
import Package from "./Package";
import Other from "./Other";

export default function AddLeadForm() {
    const [Enquiry, setEnquiry] = useState({
        flightbooking: false,
        hotelbooking: false,
        visa: false,
        travelInsurance: false,
        forex: false,
        sightseeing: false,
        transport: false,
        Other: false,
        package: false,
        customisePackage: false,
        bus: false,
        train: false,
        passport: false,
        cruise: false,
        adventure: false,
        group: false
    })
    const handleEnquiry = (str, val) => {
        // setEnquiry(!run)
        const clone = { ...Enquiry, [str]: val }
        console.log(clone);
        setEnquiry(clone)

        // for (const element in Enquiry) {
        //     console.log(element, Enquiry[element]);
        //     if (element == str) {

        //     } else {

        //     }

        // }
    }
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Customer Type</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="Status">
                                                <option>B2B</option>
                                                <option>B2C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="mt-2">
                                        <label class="form-label">Mobile</label>
                                        <input type="number" class="form-control" placeholder="Mobile number" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Email</label>
                                        <input className="form-control" placeholder="email " type="email"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="Form-label">Salutation <span className="text-danger fs-5">*</span></label>
                                                <div className="w-100">
                                                    <select className="form-select shadow" >
                                                        <option>Mr</option>
                                                        <option>Mrs</option>
                                                        <option>Miss</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="mt-2">
                                                <label className="form-labe;">First Name <span className="text-danger fs-5">*</span></label>
                                                <input type="text" placeholder="first name" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" placeholder="Last name" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Address</label>
                                        <input type="text" placeholder="addres" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">City</label>
                                        <input type="text" placeholder="City" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Alternate Mobile Number</label>
                                        <input type="text" placeholder="Alternate Mobile Number" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Alternate Email Id</label>
                                        <input className="form-control" type="email" placeholder="Alternate Email Id"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Source</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" name="Status">
                                                <option></option>
                                                <option>Cold Call</option>
                                                <option>External Referral</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Priority</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" name="Status">
                                                <option></option>
                                                <option>Cold </option>
                                                <option>wram</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Status</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="Status">
                                                <option></option>
                                                <option>New Dehli</option>
                                                <option>Working</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Adults </label>
                                                <input className="form-control" type="number" placeholder="No.of Adult"></input>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Children</label>
                                               <input type="number" placeholder="No.of Children" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Infant</label>
                                                <input type="no" className="form-control" placeholder="No.of Infant"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Trip Type</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="Status">
                                                <option></option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Tag</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " >
                                                <option></option>
                                                <option>New Dehli</option>
                                                <option>Working</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Assigned To</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" >
                                                <option></option>
                                                <option>New Dehli</option>
                                                <option>Working</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mt-3">
                                        <h1 className="fs-6">Enquiry Type</h1>
                                        <div className="mt-2 row">
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry?.flightbooking} onChange={() => { handleEnquiry('flightbooking', !Enquiry?.flightbooking) }} />
                                                    <label className=" m-0 fs-6">Flight Booking</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry?.hotelbooking} onChange={() => { handleEnquiry('hotelbooking', !Enquiry?.hotelbooking) }} />
                                                    <label className=" m-0 fs-6">Hotel Booking</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry?.visa}
                                                        onChange={() => { handleEnquiry("visa", !Enquiry.visa) }}
                                                    />
                                                    <label className=" m-0 fs-6">Visa</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.travelInsurance}
                                                        onChange={() => { handleEnquiry('travelInsurance', !Enquiry.travelInsurance) }}
                                                    />
                                                    <label className=" m-0 fs-6">Travel Insurance</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.forex}
                                                        onChange={() => { handleEnquiry("forex", !Enquiry.forex) }}
                                                    />
                                                    <label className=" m-0 fs-6">Forex</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.sightseeing}
                                                        onChange={() => { handleEnquiry("sightseeing", !Enquiry.sightseeing) }}
                                                    />
                                                    <label className=" m-0 fs-6">Sightseeing</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.transport}
                                                        onChange={() => { handleEnquiry("transport", !Enquiry.transport) }}
                                                    />
                                                    <label className=" m-0 fs-6">Transport</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} Checked={Enquiry.Other}
                                                        onChange={() => { handleEnquiry("Other", !Enquiry.Other) }}
                                                    />
                                                    <label className=" m-0 fs-6">Other</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.package}
                                                        onChange={() => { handleEnquiry("package", !Enquiry.package) }}
                                                    />
                                                    <label className=" m-0 fs-6">Package</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.customisePackage}
                                                        onChange={() => { handleEnquiry('customisePackage', !Enquiry.customisePackage) }}
                                                    />
                                                    <label className=" m-0 fs-6">Customise Package</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.bus}
                                                        onChange={() => { handleEnquiry('bus', !Enquiry.bus) }}
                                                    />
                                                    <label className=" m-0 fs-6">Bus</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.train}
                                                        onChange={() => { handleEnquiry('train', !Enquiry.train) }}
                                                    />
                                                    <label className=" m-0 fs-6">Train</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.passport} onChange={() => { handleEnquiry('passport', !Enquiry.passport) }} />
                                                    <label className=" m-0 fs-6">Passport</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.cruise}
                                                        onClick={() => handleEnquiry('cruise', !Enquiry.cruise)}
                                                    />
                                                    <label className=" m-0 fs-6">Cruise</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} checked={Enquiry.adventure}
                                                        onChange={() => handleEnquiry('adventure', !Enquiry.adventure)}
                                                    />
                                                    <label className=" m-0 fs-6">Adventure</label>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex mt-2 align-items-center gap-2">
                                                    <input type={"checkbox"} Checked={Enquiry.group}
                                                        onClick={() => handleEnquiry('group', !Enquiry.group)}
                                                    />
                                                    <label className=" m-0 fs-6">Group</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {Enquiry.flightbooking && <div className="my-4">
                                        <FlightBooking />
                                    </div>}
                                    {Enquiry.hotelbooking && <div className="my-4">
                                        <HotelBooking />
                                    </div>}
                                    {Enquiry.visa && <div className="my-4">
                                        <Visa />
                                    </div>}
                                    {Enquiry.travelInsurance && <div className="my-4">
                                        <TrvelInsurance />
                                    </div>}
                                    {Enquiry.forex && <div className="my-4">
                                        <Forex />
                                    </div>}
                                    {Enquiry.sightseeing && <div className="my-4">
                                        <Sightseeing />
                                    </div>}
                                    {Enquiry.transport && <div className="my-4">
                                        <Transport />
                                    </div>}
                                    {Enquiry.Other && <div className="my-4">
                                        <Other />
                                    </div>}
                                    {Enquiry.package && <div className="my-4">
                                        <Package />
                                    </div>}
                                    {Enquiry.customisePackage && <div className="my-4">
                                        <CoustumPackage />
                                    </div>}
                                    {Enquiry.bus && <div className="my-4">
                                        <Bus />
                                    </div>}
                                    {Enquiry.train && <div className="my-4">
                                        <Train />
                                    </div>}
                                    {Enquiry.passport && <div className="my-4">
                                        <Passport />
                                    </div>}
                                    {Enquiry.cruise && <div className="my-4">
                                        <Cruise />
                                    </div>}
                                    {Enquiry.adventure && <div className="my-4">
                                        <Adventure />
                                    </div>}
                                    {Enquiry.group && <div className="my-4">
                                        <GroupPackage />
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="mt-2">
                                <label className="form-label">Note</label>
                                <div className="w-100">
                                    <textarea className="form-control" style={{ height: "120px" }}> </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                        <div>
                            <button className="btn btn-danger m-0 ">Add</button>
                        </div>
                        <div>
                            <button className="btn btn-light m-0">Clear</button>
                        </div>
                        <div>
                            <button className="btn btn-primary m-0">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
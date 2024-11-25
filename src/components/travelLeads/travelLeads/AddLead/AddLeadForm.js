import React, { useEffect, useState } from "react";
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
import { getLead_proposal_status, getsource, gettask_priorityadmin, getTRCRM_customer_type_master_admin, getTRCRM_trip_type_master_admin, getTRCRMstaff_admin, staffList } from "../../../../api/login/Login";

export default function AddLeadForm() {


    const [initialData, setInitialData] = useState({
        customer_type: '',
        mobile_number: '',
        email_id: '',
        salutation: ["Mr", "Mrs", "Ms", "Miss", "Dr"],
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        alternate_mobile_number: '',
        alternate_email_id: '',
        lead_source: '',
        lead_priority: '',
        lead_status: '',
        no_of_adults: '',
        no_of_children: '',
        no_of_infant: '',
        trip_type: '',
        tag: '',
        assigned_to: '',
        notes: '',
        enquiry_type_flight_booking: false,
        enquiry_type_hotelbooking: false,
        enquiry_type_visa: false,
        enquiry_type_travel_insurance: false,
        enquiry_type_forex: false,
        enquiry_type_sightseeing: false,
        enquiry_type_transport: false,
        enquiry_type_other: false,
        enquiry_type_package: [{
            tour_start_date: '',
            budget: '',
            country: [],
            package_id: ''
        }],
        enquiry_type_customise_package: false,
        enquiry_type_bus: false,
        enquiry_type_train: false,
        enquiry_type_passport: false,
        enquiry_type_cruise: false,
        enquiry_type_adventure: false,
        enquiry_type_group: false,
        flightBookings: [{
            from: '',
            to: '',
            departure: '',
            return: '',
            class: '',
            category_domestic_flight: false,
            category_international_flight: false,
            flexibility: ["+/- 0 Days", "+/- 3 Days", "+/- 6 Days", "+/- 1 Week", "+/- 3 Week"],
            preference: ''
        }],
        hotelBookingModels: [{
            country: '',
            city: '',
            room_type: '',
            star_rating: '',
            check_in: '',
            check_out: '',
            number_of_nights: '',
            budget: '',
            hotel_name: '',
            number_of_rooms: ''
        }],
        visaModel: [{
            country: '',
            visa_category: '',
            visa_type: '',
            duration: '',
            travel_date: '',
            job_profile: '',
            age: '',
            qualification: '',
            description: ''
        }],
        travelInsuranceModel: [{
            country: '',
            how_long: '',
            travel_date: '',
            insurance_for_visa: ''
        }],
        forexModel: [{
            country: '',
            currency: '',
            amount: ''
        }],
        sightseeingModel: [{
            sightseeing_id: '',
            preference: '',
            travel_date: ''
        }],
        transportModel: [{
            country: '',
            city: '',
            transport_date: '',
            drop_date: '',
            preference: '',
            transport_type_airport_transfers: false,
            transport_type_sightseeing_transfers: false,
            transport_type_other: false,
            transport_type_other_name: ''
        }],
        otherModel: [{
            country: '',
            travel_date: '',
            number_of_days: '',
            sub_category: '',
            description: ''
        }],
        customisePackageModel: [{
            country: '',
            option: ["Only Countries", "Countries & Cities"],
            cities: [{
                city: '',
                stay: ''
            }],
            services: '',
            hotel_rating: '',
            travel_date: '',
            no_of_nights: '',
            flexibility: ["+/- 0 Days", "+/- 3 Days", "+/- 6 Days", "+/- 1 Week", "+/- 3 Week"],
            no_of_rooms: '',
            preference: '',
            budget: '',
            description: ''
        }],
        busModel: [{
            country: '',
            from: '',
            to: '',
            departure: '',
            return: '',
            preference: '',
            remark: ''
        }],
        trainModel: [{
            country: '',
            from: '',
            to: '',
            departure: '',
            return: '',
            preference: '',
            remark: ''
        }],
        passportModel: [{
            issuing_country: '',
            date: '',
            current_passport_number: '',
            place_of_apply: '',
            no_of_person: '',
            category: '',
            urgent: false,
            remark: ''
        }],
        cruiseModel: [{
            country: '',
            city: '',
            days: '',
            cruise_name: '',
            type: '',
            departure: '',
            return: '',
            room_preference: '',
            remark: ''
        }],
        adventureModel: [{
            country: '',
            city: '',
            travel_date: '',
            category_motorbiking: false,
            category_camping: false,
            category_safari: false,
            category_water_sports: false,
            remark: ''
        }],
        groupModel: [{
            country: '',
            state: '',
            package_id: '',
            preference: '',
            remark: ''
        }],

    })


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
    }

    const [customerType, setCustomer] = useState(null)
    const [leadSource, setLeadSource] = useState(null)
    const [leadPriority, setLeadPriority] = useState(null)
    const [leadStatus, setLeadStatus] = useState(null)
    const [tripType, setTripType] = useState(null)
    const [staff, setStaff] = useState(null)

    const comboDataGet = async () => {
        try {
            const resCustomerType = await getTRCRM_customer_type_master_admin()
            setCustomer(resCustomerType?.data);
            const resLeadSource = await getsource()
            setLeadSource(resLeadSource?.data);
            const resLeadPriority = await gettask_priorityadmin()
            setLeadPriority(resLeadPriority?.data);
            const resleadStatus = await getLead_proposal_status()
            setLeadStatus(resleadStatus?.data);
            const resTripType = await getTRCRM_trip_type_master_admin()
            setTripType(resTripType?.data);
            const resStaff = await getTRCRMstaff_admin()
            setStaff(resStaff?.data);
        } catch (error) {

        }
    }

    const changeHandle = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialData(clone)
    }

    const submitData = () => {
        console.log(initialData);

    }
    useEffect(() => {
        comboDataGet()
    }, [])
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
                                            <select className="form-select shadow " name="customer_type" value={initialData?.customer_type} onChange={changeHandle}>
                                                <option selected>Open this select Customer Type</option>
                                                {customerType && customerType?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.customer_type}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="mt-2">
                                        <label class="form-label">Mobile</label>
                                        <input type="number" class="form-control" placeholder="Mobile number" name="mobile_number" value={initialData?.mobile_number} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Email</label>
                                        <input className="form-control" placeholder="email " type="email" name="email_id" value={initialData?.email_id} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="Form-label">Salutation <span className="text-danger fs-5">*</span></label>
                                                <div className="w-100">
                                                    <select className="form-select shadow" name="salutation" value={initialData?.salutation} onChange={changeHandle}>
                                                        <option selected>Select Salutation</option>
                                                        <option value={'Mr'}>Mr</option>
                                                        <option value={'Mrs'}>Mrs</option>
                                                        <option value={'Ms'}>Ms</option>
                                                        <option value={'Miss'}>Miss</option>
                                                        <option value={'Dr'}>Dr</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="mt-2">
                                                <label className="form-labe;">First Name <span className="text-danger fs-5">*</span></label>
                                                <input type="text" placeholder="first name" className="form-control" name="first_name" value={initialData?.first_name} onChange={changeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" placeholder="Last name" className="form-control" name="last_name" value={initialData?.last_name} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Address</label>
                                        <input type="text" placeholder="addres" className="form-control" name="address" value={initialData?.address} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">City</label>
                                        <input type="text" placeholder="City" className="form-control" name="city" value={initialData?.city} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label">Alternate Mobile Number</label>
                                        <input type="text" placeholder="Alternate Mobile Number" className="form-control" name="alternate_mobile_number" value={initialData?.alternate_mobile_number} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Alternate Email Id</label>
                                        <input className="form-control" type="email" placeholder="Alternate Email Id" name="alternate_email_id" value={initialData?.alternate_email_id} onChange={changeHandle} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Source</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" name="lead_source" value={initialData?.lead_source} onChange={changeHandle}>
                                                <option selected>Open this Lead Priority</option>
                                                {leadSource && leadSource?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Priority</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" name="lead_priority" value={initialData?.lead_priority} onChange={changeHandle}>
                                                <option selected>Open this Lead Priority</option>
                                                {leadPriority && leadPriority?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Lead Status</label>
                                        <div className="w-100">
                                            <select className="form-select shadow" name="lead_status" value={initialData?.lead_status} onChange={changeHandle}>
                                                <option selected>Open this Lead Priority</option>
                                                {leadStatus && leadStatus?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Adults </label>
                                                <input className="form-control" type="number" placeholder="No.of Adult" name="no_of_adults" value={initialData?.no_of_adults} onChange={changeHandle} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Children</label>
                                                <input type="number" placeholder="No.of Children" className="form-control" name="no_of_children" value={initialData?.no_of_children} onChange={changeHandle} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mt-2">
                                                <label className="form-label">No. of Infant</label>
                                                <input type="number" className="form-control" placeholder="No.of Infant" name="no_of_infant" value={initialData?.no_of_infant} onChange={changeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Trip Type</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="trip_type" value={initialData?.trip_type} onChange={changeHandle}>
                                                <option selected>Open this Trip Type</option>
                                                {tripType && tripType?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.trip_type}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Tag</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="tag" value={initialData?.tag} onChange={changeHandle}>
                                                <option selected>Open this Tag</option>
                                                {tripType && tripType?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.trip_type}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mt-2">
                                        <label className="form-label my-1">Assigned To</label>
                                        <div className="w-100">
                                            <select className="form-select shadow " name="assigned_to" value={initialData?.assigned_to} onChange={changeHandle}>
                                                <option selected>Open this Assigned To</option>
                                                {staff && staff?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
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
                                    <textarea className="form-control" style={{ height: "120px" }} name="notes" value={initialData?.notes} onChange={changeHandle}> </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                        <div>
                            <button type="button" className="btn btn-danger m-0" onClick={submitData}>Add</button>
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
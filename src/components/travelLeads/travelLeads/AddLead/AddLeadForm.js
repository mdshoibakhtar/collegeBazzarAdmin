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
import { addTravelRoomType, countryList, currencyList, getAirlLine, getLead_proposal_status, getsource, gettask_priorityadmin, getTRCRM_customer_type_master_admin, getTRCRM_flight_classadmin, getTRCRM_preferenceadmin, getTRCRM_sight_seeing_masteradmin, getTRCRM_star_rating_master, getTRCRM_trip_type_master_admin, getTRCRMstaff_admin, staffList, TRCRM_visa_category_masterGet, TTRCRM_visa_type_masterGet } from "../../../../api/login/Login";

export default function AddLeadForm() {


    const [initialData, setInitialData] = useState({
        customer_type: '',
        mobile_number: '',
        email_id: '',
        salutation: '',
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
    const [preference, setPreference] = useState(null)
    const [classData, setClassData] = useState(null)
    const [roomType, setroomType] = useState(null)
    const [starRatting, setStarRatting] = useState(null)
    const [countryData, setcountryData] = useState(null)
    const [visaCatData, setVisaCatData] = useState(null)
    const [visaTypeData, setVisaTypeData] = useState(null)
    const [currencyData, setCurrencyData] = useState(null)
    const [sight_seeingData, setSight_seeing] = useState(null)

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
            const resPreference = await getTRCRM_preferenceadmin()
            setPreference(resPreference?.data);
            const resClassData = await getTRCRM_flight_classadmin()
            setClassData(resClassData?.data);
            const resRoomType = await addTravelRoomType()
            setroomType(resRoomType?.data);
            const resStarRating = await getTRCRM_star_rating_master()
            setStarRatting(resStarRating?.data);
            const resCountry = await countryList()
            setcountryData(resCountry?.data);
            const resvisa_category = await TRCRM_visa_category_masterGet()
            setVisaCatData(resvisa_category?.data);
            const resvisa_type = await TTRCRM_visa_type_masterGet()
            setVisaTypeData(resvisa_type?.data);
            const resCurrency = await currencyList()
            setCurrencyData(resCurrency?.data);
            const resSight_seeing = await getTRCRM_sight_seeing_masteradmin()
            setSight_seeing(resSight_seeing?.data);
        } catch (error) {

        }
    }


    const [locations, setLocations] = useState([]);
    const searchAirlLine = async () => {
        try {
            const res = await getAirlLine()
            setLocations(res?.data);
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

    // flightRow

    const [flightrows, setflightrowsRows] = useState([
        {
            from: "",
            to: "",
            departure: "",
            return: "",
            class: "",
            category_domestic_flight: false,
            category_international_flight: false,
            flexibility: "",
            preference: "",
        },
    ]);

    const addRowFlight = () => {
        setflightrowsRows((prevRows) => [
            ...prevRows,
            {
                from: "",
                to: "",
                departure: "",
                return: "",
                class: "",
                category_domestic_flight: false,
                category_international_flight: false,
                flexibility: "",
                preference: "",
            },
        ]);
    };

    const handleRowChangeFlight = (index, field, value) => {
        const updatedRows = [...flightrows];
        updatedRows[index][field] = value;
        setflightrowsRows(updatedRows);
        const clone = { ...initialData, flightBookings: updatedRows }
        setInitialData(clone)
    };

    // flightRow

    // hotelRow
    const [hotelRow, setHotelRow] = useState([
        {
            country: "",
            city: "",
            room_type: "",
            star_rating: "",
            check_in: "",
            check_out: "",
            number_of_nights: "",
            budget: "",
            hotel_name: "",
            number_of_rooms: "",
        },
    ]);

    const addHotelRow = () => {
        setHotelRow((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                room_type: "",
                star_rating: "",
                check_in: "",
                check_out: "",
                number_of_nights: "",
                budget: "",
                hotel_name: "",
                number_of_rooms: "",
            },
        ]);
    };

    const handleInputChangeHotel = (index, field, value) => {
        const updatedRows = [...hotelRow];
        updatedRows[index][field] = value;
        setHotelRow(updatedRows);
        const clone = { ...initialData, hotelBookingModels: updatedRows }
        setInitialData(clone)
    };
    // hotelRow

    // visa
    const [rowsVisa, setRowsVisa] = useState([
        {
            country: "",
            visa_category: "",
            visa_type: "",
            duration: "",
            travel_date: "",
            job_profile: '',
            age: '',
            qualification: "",
            description: "",
        }
    ]);

    const AddVisaRow = () => {
        setRowsVisa((prevRows) => [
            ...prevRows,
            {
                country: "",
                visa_category: "",
                visa_type: "",
                duration: "",
                travel_date: "",
                job_profile: '',
                age: '',
                qualification: "",
                description: "",
            },
        ]);
    };
    const handleInputChangeVisa = (index, field, value) => {
        const updatedRows = [...rowsVisa];
        updatedRows[index][field] = value;
        setRowsVisa(updatedRows);
        const clone = { ...initialData, visaModel: updatedRows }
        setInitialData(clone)
    };
    // visa

    //travelInsurence
    const [rowsTravelIns, setRowsTravelIns] = useState([
        {
            country: "",
            how_long: "",
            travel_date: "",
            insurance_for_visa: false,
        }
    ]);

    const AddRowTravelIns = () => {
        setRowsTravelIns((prevRows) => [
            ...prevRows,
            {
                country: "",
                how_long: "",
                travel_date: "",
                insurance_for_visa: false,
            },
        ]);
    };

    const handleInputChangeTravelInsurence = (index, field, value) => {
        const updatedRows = [...rowsTravelIns];
        updatedRows[index][field] = value;
        setRowsTravelIns(updatedRows);
        const clone = { ...initialData, travelInsuranceModel: updatedRows }
        setInitialData(clone)
    };
    //travelInsurence

    //forex
    const [rowsForex, setRowsForex] = useState([
        {
            country: "",
            currency: '',
            amount: " "
        }
    ]);

    const AddRowForex = () => {
        setRowsForex((prevRows) => [
            ...prevRows,
            {
                country: "",
                currency: '',
                amount: " "
            },
        ]);
    };
    const handleInputChangeForex = (index, field, value) => {
        const updatedRows = [...rowsForex];
        updatedRows[index][field] = value;
        setRowsForex(updatedRows);
        const clone = { ...initialData, forexModel: updatedRows }
        setInitialData(clone)
    };
    //forex

    //Sightseeing
    const [rowsSightseeing, setRowsSightseeing] = useState([
        {
            country: "",
            city: "",
            sightseeing_id: "",
            preference: "",
            travel_date: "",
        }
    ]); // Initialize as an array

    const AddRowSightseeing = () => {
        setRowsSightseeing((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                sightseeing_id: "",
                preference: "",
                travel_date: "",
            },
        ]);
    };

    const handleInputChangeSightseeing = (index, field, value) => {
        const updatedRows = [...rowsSightseeing];
        updatedRows[index][field] = value;
        setRowsSightseeing(updatedRows);
        const clone = { ...initialData, sightseeingModel: updatedRows }
        setInitialData(clone)
    };
    //Sightseeing

    //trasport
    const [rowsTrasport, setRowsTrasport] = useState([
        {
            country: "",
            city: "",
            transport_date: "",
            drop_date: "",
            preference: "",
            transport_type_airport_transfers: false,
            transport_type_sightseeing_transfers: false,
            transport_type_other: false,
            transport_type_other_name: "",
        }
    ]); // Initialize as an array

    const AddRowtTrasport = () => {
        setRowsTrasport((prevRows) => [
            ...prevRows,
            {
                country: "",
                city: "",
                transport_date: "",
                drop_date: "",
                preference: "",
                transport_type_airport_transfers: false,
                transport_type_sightseeing_transfers: false,
                transport_type_other: false,
                transport_type_other_name: "",
            },
        ]);
    };
    const handleInputChangeTranport = (index, field, value) => {
        const updatedRows = [...rowsTrasport];
        updatedRows[index][field] = value;
        setRowsTrasport(updatedRows);
        const clone = { ...initialData, transportModel: updatedRows }
        setInitialData(clone)
    };
    //trasport
    //other
    const [rowsOther, setOther] = useState([
        {
            country: "",
            travel_date: "",
            number_of_days: "",
            sub_category: "",
            description: "",
        }
    ]); // Initialize as an array

    const AddOther = () => {
        setRowsTrasport((prevRows) => [
            ...prevRows,
            {
                country: "",
                travel_date: "",
                number_of_days: "",
                sub_category: "",
                description: "",
            },
        ]);
    };
    const handleInputChangeOther = (index, field, value) => {
        const updatedRows = [...rowsOther];
        updatedRows[index][field] = value;
        setOther(updatedRows);
        const clone = { ...initialData, otherModel: updatedRows }
        setInitialData(clone)
    };
    //other

    //package
    const [packageRow, setpackageRow] = useState([
        {
            tour_start_date: "",
            budget: "",
            country: [],
            package_id: "",
            extra_details: ''
        }
    ]); // Initialize as an array

    const addPackageRow = () => {
        setpackageRow((prevRows) => [
            ...prevRows,
            {
                tour_start_date: "",
                budget: "",
                country: [],
                package_id: "",
                extra_details: ''
            },
        ]);
    };
    const handleInputChangePackage = (index, field, value) => {
        const updatedRows = [...packageRow];
        updatedRows[index][field] = value;
        setpackageRow(updatedRows);
        const clone = { ...initialData, enquiry_type_package: updatedRows }
        setInitialData(clone)
    };


    const submitData = () => {
        console.log(initialData);
        // console.log(flightrows);
        // console.log(Enquiry);
    }
    useEffect(() => {
        comboDataGet()
        searchAirlLine()
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
                                        <FlightBooking preference={preference} classData={classData} addRowFlight={addRowFlight} flightrows={flightrows} setflightrowsRows={setflightrowsRows} handleRowChangeFlight={handleRowChangeFlight} locations={locations} />
                                    </div>}
                                    {Enquiry.hotelbooking && <div className="my-4">
                                        <HotelBooking countryData={countryData} starRatting={starRatting} roomType={roomType} addHotelRow={addHotelRow} hotelRow={hotelRow} setHotelRow={setHotelRow} handleInputChangeHotel={handleInputChangeHotel} locations={locations} />
                                    </div>}
                                    {Enquiry.visa && <div className="my-4">
                                        <Visa countryData={countryData} visaTypeData={visaTypeData} visaCatData={visaCatData} AddVisaRow={AddVisaRow} handleInputChangeVisa={handleInputChangeVisa} setRowsVisa={setRowsVisa} rowsVisa={rowsVisa} />
                                    </div>}
                                    {Enquiry.travelInsurance && <div className="my-4">
                                        <TrvelInsurance countryData={countryData} handleInputChangeTravelInsurence={handleInputChangeTravelInsurence} AddRowTravelIns={AddRowTravelIns} rowsTravelIns={rowsTravelIns} setRowsTravelIns={setRowsTravelIns} />
                                    </div>}
                                    {Enquiry.forex && <div className="my-4">
                                        <Forex countryData={countryData} currencyData={currencyData} rowsForex={rowsForex} AddRowForex={AddRowForex} handleInputChangeForex={handleInputChangeForex} />
                                    </div>}
                                    {Enquiry.sightseeing && <div className="my-4">
                                        <Sightseeing countryData={countryData} locations={locations} preference={preference} sight_seeingData={sight_seeingData} handleInputChangeSightseeing={handleInputChangeSightseeing} rowsSightseeing={rowsSightseeing} setRowsSightseeing={setRowsSightseeing} AddRowSightseeing={AddRowSightseeing} />
                                    </div>}
                                    {Enquiry.transport && <div className="my-4">
                                        <Transport countryData={countryData} locations={locations} preference={preference} handleInputChangeTranport={handleInputChangeTranport} rowsTrasport={rowsTrasport} setRowsTrasport={setRowsTrasport} AddRowtTrasport={AddRowtTrasport} />
                                    </div>}
                                    {Enquiry.Other && <div className="my-4">
                                        <Other countryData={countryData} handleInputChangeOther={handleInputChangeOther} rowsOther={rowsOther} setOther={setOther} />
                                    </div>}
                                    {Enquiry.package && <div className="my-4">
                                        <Package countryData={countryData} handleInputChangePackage={handleInputChangePackage} packageRow={packageRow} setpackageRow={setpackageRow} addPackageRow={addPackageRow} />
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
import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiShip2Fill } from "react-icons/ri";
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Multiselect from 'multiselect-react-dropdown';
import { addTravelRoomType } from '../../api/login/Login';

function TravelQuotationAddComp() {
    const [show, setShow] = useState(false);
    const [roomTypeData, setRoomTypeData] = useState();
    const [selectedIndustry, setSelectedIndustry] = useState([]);
    const [hotelInfoInpVal, setHotelInfoInpVal] = useState({
        singleSharing: '',
        doubleSharing: '',
        tripleSharing: '',
        childWithBed: '',
        childWithoutBed: '',
        flightCost: '',
        childFLightCost: '',
        infantFlightCost: '',
        visaCost: '',
        travelIbsuranceCost: '',
        taxCost: '',
    });
    const handleAllInputChange = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...hotelInfoInpVal };
        clonedObj[inpName] = inpVal;
        setHotelInfoInpVal(clonedObj);
    };

    const options1 = [
        { name: 'The Himalayan (5 star)', id: 1 },
        { name: 'Royal Park Resort (4 star)', id: 2 },
        { name: 'Sun Park Resort (4 star)', id: 3 },
        { name: 'Ishaan Park Resort (3 star)', id: 4 },
    ];
    const cityD = [
        { name: 'Manali', stay: '1' },
        { name: 'Delhi', stay: '2' },
    ];
    const [formData, setFormData] = useState(
        cityD && cityD?.map((cityItem) => ({
            city: cityItem?.name || "",
            nights: cityItem?.stay || "",
            hotel: [],
            roomType: "",
            roomNo: "",
            mealPlan: "",
        }))
    );
    const onSelectIndustry = (selectedList, selectedItem) => {
        setSelectedIndustry(selectedList);
    };
    const onRemoveIndustry = (selectedList, removedItem) => {
        setSelectedIndustry(selectedList);
    };

    const handleInputChange = (e, index, key) => {
        const value = e.target.value;
        const updatedFormData = [...formData];
        updatedFormData[index][key] = value;
        setFormData(updatedFormData);
    };
    const handleHotelChange = (selectedList, index) => {
        const updatedFormData = [...formData];
        updatedFormData[index].hotel = selectedList;
        setFormData(updatedFormData);
    };

    const getRoomTypeListD = async () => {
        try {
            const res = await addTravelRoomType();
            setRoomTypeData(res?.data)
            console.log('roomType---', res?.data);
        } catch (error) {

        }
    };
    useEffect(() => {
        getRoomTypeListD();
    }, []);

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Payload:", formData);
        setTimeout(() => {
            navigate('../../itenarary')
        }, 1000);
    };



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Quotation</b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>

                                    <div>
                                        <Link className='btn btn-primary btn-sm' onClick={handleShow} to={"#"} role="button" aria-controls="offcanvasExample">Add Hotel</Link>
                                    </div>
                                </div>
                                <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <p>Lead No. : SOF00001</p>
                                        <p>Customer : LEAD LNAME</p>
                                        <p>Assigned User : ABDUL QUADIR</p>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Hotel Information</h4>
                                    <div className='row'>
                                        <label htmlFor="fromDate" style={{ color: 'gray' }}>Cost Label</label>
                                        <div className="form-group col-5">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Hotel + Sightseeing + Transfer Cost(Land Cost)
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Hotel + Sightseeing
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-4">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Hotel + Overall Package
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-5">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Hotel + Sightseeing + Transfer + Flight
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Only Hotel Cost
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-3">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Package
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-2'>
                                        <label htmlFor="fromDate" style={{ color: 'gray' }}>Cost Type</label>
                                        <div className="form-group col-1">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Single
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Multiple
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Per Person
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Per Night
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    City/Hotel
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-1">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Total
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={1}>INR</option>
                                                <option value={2}>USD</option>
                                                <option value={3}>EUR</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* {cityD && cityD?.map((cityItem, indx) => {
                                        return <div key={indx} style={{ border: '1px dotted black',marginBottom:'8px' }}>
                                            <div className='row'>
                                                <h4 className='mb-3' style={{ color: 'red' }}>Option {indx + 1}</h4>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">City</label>
                                                    <input
                                                        disabled
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={cityItem?.name}
                                                        id="fromDate"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">Nights</label>
                                                    <input
                                                        disabled
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={cityItem?.stay}
                                                        id="fromDate"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">Hotel</label>
                                                    <Multiselect
                                                        options={options1}
                                                        selectedValues={selectedIndustry}
                                                        onSelect={onSelectIndustry}
                                                        onRemove={onRemoveIndustry}
                                                        displayValue="name"
                                                        placeholder="Select options"
                                                        style={{
                                                            chips: { BiFontSize: '15px' },
                                                            searchBox: { padding: '0 8px' }
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">Room Type</label>
                                                    <select className="form-select form-control" aria-label="Default select example">
                                                        <option value={""}>Select Room Type</option>
                                                        {roomTypeData && roomTypeData?.map((item, i) => {
                                                            return <option key={i} value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">Room No</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='Enter Room No'
                                                        id="fromDate"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label htmlFor="fromDate">Meal Plan</label>
                                                    <select className="form-select form-control" aria-label="Default select example">
                                                        <option value={1323}>AP (Full Board)</option>
                                                        <option value={2323}>MAP (Half Board)</option>
                                                        <option value={332}>CP (Only Breakfast)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    })} */}

                                    {cityD &&
                                        cityD?.map((cityItem, indx) => {
                                            return (
                                                <div key={indx} style={{ border: "1px dotted black", marginBottom: "8px" }}>
                                                    <div className="row">
                                                        <h4 className="mb-3" style={{ color: "red" }}>
                                                            Option {indx + 1}
                                                        </h4>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="city">City</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={formData[indx].city}
                                                                disabled
                                                            />
                                                        </div>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="nights">Nights</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={formData[indx].nights}
                                                                disabled
                                                            />
                                                        </div>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="hotel">Hotel</label>
                                                            <Multiselect
                                                                options={options1}
                                                                selectedValues={formData[indx].hotel}
                                                                onSelect={(selectedList) => handleHotelChange(selectedList, indx)}
                                                                onRemove={(selectedList) => handleHotelChange(selectedList, indx)}
                                                                displayValue="name"
                                                                placeholder="Select options"
                                                                style={{
                                                                    chips: { fontSize: "15px" },
                                                                    searchBox: { padding: "0 8px" },
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="roomType">Room Type</label>
                                                            <select
                                                                className="form-select form-control"
                                                                value={formData[indx].roomType}
                                                                onChange={(e) => handleInputChange(e, indx, "roomType")}
                                                            >
                                                                <option value="">Select Room Type</option>
                                                                {roomTypeData &&
                                                                    roomTypeData?.map((item, i) => {
                                                                        return (
                                                                            <option key={i} value={item?._id}>
                                                                                {item?.name}
                                                                            </option>
                                                                        );
                                                                    })}
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="roomNo">Room No</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={formData[indx].roomNo}
                                                                onChange={(e) => handleInputChange(e, indx, "roomNo")}
                                                            />
                                                        </div>
                                                        <div className="form-group col-4">
                                                            <label htmlFor="mealPlan">Meal Plan</label>
                                                            <select
                                                                className="form-select form-control"
                                                                value={formData[indx].mealPlan}
                                                                onChange={(e) => handleInputChange(e, indx, "mealPlan")}
                                                            >
                                                                <option value="">Select Meal Plan</option>
                                                                <option value="AP">AP (Full Board)</option>
                                                                <option value="MAP">MAP (Half Board)</option>
                                                                <option value="CP">CP (Only Breakfast)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    <div className="row mt-3">
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Single Sharing (Amt)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Single Sharing (Amt)'
                                                name="singleSharing"
                                                value={hotelInfoInpVal?.singleSharing}
                                                onChange={handleAllInputChange}
                                            />
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Twin/Double Sharing (Amt)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Twin/Double Sharing (Amt)'
                                                name="doubleSharing"
                                                value={hotelInfoInpVal?.doubleSharing}
                                                onChange={handleAllInputChange}
                                            />
                                        </div>
                                        <div className="form-group col-2">
                                            <label htmlFor="fromDate">Triple Sharing (Amt)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Triple Sharing (Amt)'
                                                name="tripleSharing"
                                                value={hotelInfoInpVal?.tripleSharing}
                                                onChange={handleAllInputChange}
                                            />
                                        </div>
                                        <div className="form-group col-2">
                                            <label htmlFor="fromDate">Child With Bed (Amt)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Child With Bed (Amt)'
                                                name="childWithBed"
                                                value={hotelInfoInpVal?.childWithBed}
                                                onChange={handleAllInputChange}
                                            />
                                        </div>
                                        <div className="form-group col-2">
                                            <label htmlFor="fromDate">Child Without Bed</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Child Without Bed (Amt)'
                                                name="childWithoutBed"
                                                value={hotelInfoInpVal?.childWithoutBed}
                                                onChange={handleAllInputChange}
                                            />
                                        </div>
                                    </div>

                                    <h4 className='mb-3' style={{ color: 'red' }}>Other Cost</h4>
                                    <div className='row mt-2'>
                                        <label htmlFor="fromDate" style={{ color: 'gray' }}>Choose Cost Type</label>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Per Person
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group col-2">
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: '1px solid black' }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Total
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Flight Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Flight Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Child Flight Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Child Flight Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Infant Flight Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Infant Flight Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Visa Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Visa Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Travel Insurance Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Travel Insurance Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Tax Cost (INR)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Tax Cost (INR)'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <IoSettings />
                                            <h3 className='mb-0 ms-2'>Other</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={122}>INR</option>
                                                <option value={222}>USD</option>
                                                <option value={322}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Other Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Other Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <RiShip2Fill />
                                            <h3 className='mb-0 ms-2'>Cruise</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={122}>INR</option>
                                                <option value={222}>USD</option>
                                                <option value={322}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Cruise Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Cruise Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaBus />
                                            <h3 className='mb-0 ms-2'>Bus and Taxi</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={122}>INR</option>
                                                <option value={222}>USD</option>
                                                <option value={322}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Bus and Taxi Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Bus and Taxi Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaTrainSubway />
                                            <h3 className='mb-0 ms-2'>Train</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={122}>INR</option>
                                                <option value={222}>USD</option>
                                                <option value={322}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Train Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Train Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaLocationArrow />
                                            <h3 className='mb-0 ms-2'>Sightseen</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={1222}>INR</option>
                                                <option value={2222}>USD</option>
                                                <option value={3222}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Sightseen Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Sightseen Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="form-group col-2" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaLocationArrow />
                                            <h3 className='mb-0 ms-2'>Child Sightseen</h3>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Currency</label>
                                            <select className="form-select form-control" aria-label="Default select example">
                                                <option value={1222}>INR</option>
                                                <option value={2222}>USD</option>
                                                <option value={3222}>EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-3">
                                            <label htmlFor="fromDate">Child Sightseen Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Enter Child Sightseen Cost'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className='col-1'> <FaPlus style={{ marginTop: '45px' }} /></div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-12'>
                                            <div>
                                                <div className="form-check">
                                                    <input className="form-check-input" style={{ border: '1px solid black' }} type="checkbox" defaultValue id="flexCheckChecked" />
                                                    <label className="form-check-label mb-0 mt-0" htmlFor="flexCheckChecked">
                                                        Show Grand Total
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group col-12 mt-3">
                                        <Link className="btn btn-danger float-end" onClick={handleSubmit} to="#" role="button" aria-controls="offcanvasExample">Save & Next</Link>
                                        <Link className="btn btn-primary float-end" to="/create-quotation" role="button" aria-controls="offcanvasExample">Back</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >

                <Modal aria-labelledby="example-modal-sizes-title-lg"
                    dialogClassName="custom-modal" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">Add Hotel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>
                            <div className='row p-0'>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Hotel Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Hotel Name'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">City</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Address'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Contact</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="fromDate"
                                        placeholder='Contact'
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Rating</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Rating</option>
                                        <option value={1}>1 Star</option>
                                        <option value={2}>2 Star</option>
                                        <option value={3}>3 Star</option>
                                        <option value={3}>4 Star</option>
                                        <option value={3}>5 Star</option>
                                    </select>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="fromDate">Hotel Type</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Hotel Type</option>
                                        <option value={122}>Standard</option>
                                        <option value={222}>Deluxe</option>
                                        <option value={322}>Luxury</option>
                                    </select>
                                </div>

                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div >
        </>
    )
}

export default TravelQuotationAddComp
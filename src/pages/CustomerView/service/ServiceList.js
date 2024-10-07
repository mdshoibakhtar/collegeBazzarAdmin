import React, { useState } from "react";
import AddContact from "./AddContact";
import { useParams } from "react-router-dom";

const dummyData = [
    {
        id: 1,
        customerName: "John Doe",
        customerNumber: "+1 234 567 8901",
        taskDetail: "Installation",
        prefDate: "2024-10-01",
        prefTime: "14:00",
        address: "123 Main Street",
        landmark: "Near City Park",
        productDetail: "Air Conditioner",
        modelNo: "AC1234",
        serviceDescription: "Install new air conditioner.",
        message: "Please make sure to call before arrival.",
        attachedPhoto: null, // You can handle images here if needed
    },
    {
        id: 2,
        customerName: "Jane Smith",
        customerNumber: "+44 789 654 3210",
        taskDetail: "Repair",
        prefDate: "2024-10-03",
        prefTime: "10:30",
        address: "456 High Street",
        landmark: "Next to Mall",
        productDetail: "Washing Machine",
        modelNo: "WM5678",
        serviceDescription: "Fix water leakage issue.",
        message: "Bring spare parts if necessary.",
        attachedPhoto: null, // Example with no photo
    },
    // Add more dummy data as needed
];

const ServiceList = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();

    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card" style={{width:"1000px"}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ Service Request</button>
                    <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div>
                </div>
                <AddContact
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="" style={{overflow:"auto"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Customer Number</th>
                                <th scope="col">Task Detail</th>
                                <th scope="col">Preferred Date</th>
                                <th scope="col">Preferred Time</th>
                                <th scope="col">Address</th>
                                <th scope="col">Landmark</th>
                                <th scope="col">Product Detail</th>
                                <th scope="col">Model No</th>
                                <th scope="col">Service Description</th>
                                <th scope="col">Message</th>
                                <th scope="col">Attached Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>
                                    <td>{contact.customerName}</td>
                                    <td>{contact.customerNumber}</td>
                                    <td>{contact.taskDetail}</td>
                                    <td>{contact.prefDate}</td>
                                    <td>{contact.prefTime}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.landmark}</td>
                                    <td>{contact.productDetail}</td>
                                    <td>{contact.modelNo}</td>
                                    <td>{contact.serviceDescription}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        {contact.attachedPhoto ? (
                                            <img
                                                src={URL.createObjectURL(contact.attachedPhoto)}
                                                alt="Attached"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        ) : (
                                            "No Photo"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ServiceList;

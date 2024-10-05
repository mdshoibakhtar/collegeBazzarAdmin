import React, { useState } from "react";
import AddContact from "./AddContact";
import { Link, useParams } from "react-router-dom";
import { Popconfirm } from "antd";
const dummyData = [
    {
        id: 1,
        title: "Note 1",
        description: "This is the first note",
        date: "2023-07-25",
        time: "10:00 AM",
        status: "Active",
        // Add more properties as needed
    }
    // Add more dummy data here if needed
];

const NotesCunstomer = ({ title }) => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary" onClick={() => setModalShow(true)}>+ New Note</button>
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
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Description</th>
                                <th scope="col text-center">Added From</th>
                                <th scope="col text-center">Date Added</th>
                                <th scope="col text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((contact, i) => (
                                <tr key={contact.id}>
                                    <td>{i + 1}</td>
                                    <td>{contact.description}</td>
                                    <td>{contact.date}</td>
                                    <td>{contact.date}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                <i className="fa fa-pencil" />
                                            </Link>
                                            <Popconfirm
                                                title="Delete Note!"
                                                description="Are you sure to delete?"
                                                // onConfirm={() => confirm(item?._id)}
                                                // onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                    <i className="fa fa-trash" />
                                                </Link>
                                            </Popconfirm>
                                        </div>
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

export default NotesCunstomer;

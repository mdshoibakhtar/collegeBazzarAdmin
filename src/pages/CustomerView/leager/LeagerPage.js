import React, { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import { deleteAccLedgerById, getAccLedgerByPage } from "../../../api/login/Login";

const dummyData = [
    {
        id: 1,
        ledgerName: "ABC Ltd",
        ledgerAlias: "ABC",
        acName: "John Doe",
        acNo: "123456789",
        mobile: "9876543210",
        email: "john.doe@example.com",
        address: "123 Street, City",
        bankDetail: "XYZ Bank, IFSC: XYZ0001234",
    },
    {
        id: 2,
        ledgerName: "XYZ Corp",
        ledgerAlias: "XYZ",
        acName: "Jane Smith",
        acNo: "987654321",
        mobile: "8765432109",
        email: "jane.smith@example.com",
        address: "456 Avenue, Town",
        bankDetail: "ABC Bank, IFSC: ABCD0005678",
    },
    // Add more dummy data here if needed
];

const LeagerPage = ({ title }) => {
    const paremss = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    

    // ----------list Api----------
    const param = useParams()
    const getFloorMasters = async (page) => {
        
        setLoading(true)
        try {
            const res = await getAccLedgerByPage( page , count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteAccLedgerById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getFloorMasters(page)
    }, [])
    return (
        <div style={{width:"1000px"}}>
            <h4>{title}</h4>
            <div className="container mt-4 card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link className="btn btn-primary" to={`/customer-view/${paremss.id}/add-leager`} >
                        + New {title}
                    </Link>
                    <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div>
                </div>
                <div className="" style={{overflow:"auto"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Acc Ledger Name</th>
                                <th scope="col">Acc Ledger Alias</th>
                                <th scope="col">AC Name</th>
                                <th scope="col">AC No</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Bank Detail</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((ledger, i) => (
                                <tr key={ledger.id}>
                                    <td>{i + 1}</td>
                                    <td>{ledger.ledgerName}</td>
                                    <td>{ledger.ledgerAlias}</td>
                                    <td>{ledger.acName}</td>
                                    <td>{ledger.acNo}</td>
                                    <td>{ledger.mobile}</td>
                                    <td>{ledger.email}</td>
                                    <td>{ledger.address}</td>
                                    <td>{ledger.bankDetail}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning">Edit</button>
                                        <button className="btn btn-sm btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeagerPage;

import { Popconfirm } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function SaleReport() {
    const item = null
    return (
        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
            <thead>
                <tr role="row">
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                        Type
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                    Bill No
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                    Date
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                    Party
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Passenger
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Basic
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    XT
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    SC
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Total
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Fee
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    OC
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Disc
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Taxable
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Tax%
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    CGST
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    SGST
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    IGST
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    TCS
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                    Net Sale
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                        Status
                    </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                        Remark </th>
                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                        Action</th>
                </tr>
            </thead>
            <tbody>
                <tr role="row" className="odd" >
                    <td colSpan={5} className="text-end">
                        Total
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                    0.00
                    </td>
                    <td>
                        <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                    </td>
                    <td style={{ width: "200rem" }}>
                        <span className='text-nowrap' >{item?.remark ? item?.remark : 'No Remark Avilable'}</span>
                    </td>
                    <td>
                        <div className="d-flex">
                            <Link to={`/newvblock/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                            <Popconfirm
                                title="Delete Block!"
                                description="Are you sure to delete ?"
                                onConfirm=""
                                onCancel=""
                                okText="Yes"
                                cancelText="No"
                            >
                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                            </Popconfirm>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
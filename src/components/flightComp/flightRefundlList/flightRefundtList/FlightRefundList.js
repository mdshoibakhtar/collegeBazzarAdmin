import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FlightRefundList({ onChangeVal }) {
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Flight Refund List
                                    </b></h4>
                                    <div>
                                        {/* <ExportPdf /> */}
                                        {/* {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                        </CSVLink>) : ""} */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>

                                            <tr role='row'>

                                                <th> Booking Ref Number</th>
                                                <th>Amendment Id</th>
                                                <th >Airline</th>
                                                <th >Airline Pnr</th>
                                                <th >GDS PNR</th>
                                                <th>Amendment Type</th>
                                                <th>Amendment Status</th>
                                                <th >Generated On	</th>
                                                <th >Generate By</th>
                                                <th >Journey Type</th>
                                                <th >Travel	Sector	</th>
                                                <th >Travel Date</th>
                                                <th >Fly Type</th>
                                                <th >Ticket No.</th>
                                                <th >Fare Rule</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {aepsData?.data?.map((item, i) => {

                                                    return <tr role="row" className="odd" key={i} style={{ cursor: "pointer" }} onClick={() => { ChangeRouts(item._id) }}>
                                                        <td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td>
                                                        <td>{item?.refer_id}</td>
                                                        <td>{item?.mobile}</td>
                                                        <td>{item?.shop_name ? item?.shop_name : item?.name}</td>

                                                        <td>{item?.refer_code}</td>
                                                        <td>{item?.subject}</td>
                                                        <td>{item?.department_id}</td>
                                                        <td>{item?.priority}</td>
                                                        <td><span className="badge badge-success text-light border-0 w-100" style={{ backgroundColor: `${item?.status === "pending" ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.status === "success" ? '0.8rem' : ''}` }}>{item?.status == "success" ? 'Success' : 'Pending'}</span></td>
                                                        <td>{item?.lastReply}</td>

                                                        <td className='text-center'>

                                                            <Link className='btn btn-warning color2' to={`/disputes/view/${item._id}`}>Reply</Link>
                                                        </td>
                                                    </tr>
                                                })} */}

                                            <tr>
                                                <td colSpan={18}>
                                                    <Empty />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {""} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                        /* showSizeChanger
                                        onShowSizeChange={''} */

                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={aepsData?.totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section>

    )
}

export default FlightRefundList
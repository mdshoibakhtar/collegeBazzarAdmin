import { Empty, Pagination } from 'antd'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BusRefundList({ onChangeVal }) {
    return (
        <section className="ListDistributer exppdf">
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>BUS REFUND LIST
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

                                                <th> Booking Reference Number	</th>
                                                <th>Amendment Id</th>
                                                <th >Refund Type	</th>
                                                <th >Refund Amount	</th>
                                                <th >Refund Status	</th>
                                                <th>Origin	</th>
                                                <th>Destination	</th>
                                                <th >Departure	</th>
                                                <th >Remark</th>
                                                <th >Created
                                                </th>
                                                
                                                
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
                                                <td colSpan={10}>
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

export default BusRefundList
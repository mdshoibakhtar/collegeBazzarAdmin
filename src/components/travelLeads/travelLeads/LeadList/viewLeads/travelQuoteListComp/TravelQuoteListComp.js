import React from 'react'
import { ToastContainer } from 'react-toastify'

import { Link } from 'react-router-dom'
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf'

function TravelQuoteListComp() {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-end">

                </div>
                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Quotation Details</b></h4>
                                        <div>
                                            <ExportPdf />
                                            <Link className="btn btn-primary btn-sm" to="/create-quotation" role="button" aria-controls="offcanvasExample">+ Create Quotation</Link>
                                        </div>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">

                                                    <th style={{ textAlign: 'center' }}>No. Of Day/Night</th>
                                                    <th style={{ textAlign: 'center' }}>Tour Date</th>
                                                    <th style={{ textAlign: 'center' }}>Customer</th>
                                                    <th style={{ textAlign: 'center' }}>User</th>
                                                    <th style={{ textAlign: 'center' }}>Cities</th>
                                                    <th style={{ textAlign: 'center' }}>Created Date</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>5/4</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>25/11/2024</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>Lead lname</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>Abdul quadir</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>Ooty,Mysore</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>18/11/2024 05:08 AM</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <Pagination className="pagination_gutter pagination_primary pagination_sm" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default TravelQuoteListComp
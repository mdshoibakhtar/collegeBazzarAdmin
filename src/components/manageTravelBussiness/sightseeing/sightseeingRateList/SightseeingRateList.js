import { Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import SightseeingRateListFilter from "./sightseeingRateListFilter/SightseeingRateListFilter";


const SightseeingRateList = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: " Manage Travel Business",
        title_2: 'Sightseeing Rates',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SightseeingRateListFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Sightseeing Rates</h4>
                                        <Link to='/add-sightseeingrate' className="btn btn-primary">Add Sightseeing Rates</Link>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Stay Date</th>
                                                    <th style={{ width: '150px' }}>Currency</th>
                                                    <th style={{ width: '150px' }}>Adult Price</th>
                                                    <th style={{ width: '150px' }}>Adult Price</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" >
                                                    {/* <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td> */}
                                                    <td valign="top" className="dataTables_empty" colSpan={5}>No Data Found !</td>


                                                    <td>
                                                        <div className="d-flex">
                                                            <Popconfirm
                                                                title="Delete cow feed!"
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
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {'0'} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SightseeingRateList
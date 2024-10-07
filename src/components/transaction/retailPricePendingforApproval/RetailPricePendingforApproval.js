import { Pagination } from "antd"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"


export const RetailPricePendingforApproval = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Retail Price Pending for Approval',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <Estimate_request_Filter /> */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Retail Price Pending for Approval
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/add-sales-Invoice-for-Update" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>Sr. No.</th>
                                            <th style={{ width: '150px' }}>Request on</th>
                                            <th style={{ width: '150px' }}>		Inv. Date</th>
                                            <th style={{ width: '150px' }}>	Party</th>
                                            <th style={{ width: '150px' }}>Party</th>
                                            <th style={{ width: '150px' }}>Sales Person</th>
                                            <th style={{ width: '150px' }}>	Location</th>
                                            <th style={{ width: '150px' }}>	Location.</th>
                                            <th style={{ width: '150px' }}>	Barcode</th>
                                            <th style={{ width: '150px' }}>	Product Name</th>
                                            <th style={{ width: '150px' }}>MRP</th>
                                            <th style={{ width: '150px' }}>Billed Amt.</th>
                                            <th style={{ width: '150px' }}>Tag Price</th>
                                            <th style={{ width: '150px' }}>Diff.</th>
                                            <th>Add. Dis. Per.</th>
                                            <th>Approve / Reject</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td colSpan={17} className="text-align-center">No Data Found</td>


                                            {/* <td>
                                                <div className="d-flex">

                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    <Popconfirm
                                                        title="Delete Blog Category"
                                                        description="Are you sure to delete?"
                                                        // onConfirm={() => confirm(item?.blog_id)}
                                                        // onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                            <i className="fa fa-trash" />
                                                        </Link>
                                                    </Popconfirm>
                                                </div>
                                            </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total 0 entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={data?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

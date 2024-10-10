import { Pagination } from "antd";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TalukaWiseDealerFilter from "./talukaWiseDealerFilter/TalukaWiseDealerFilter";



const TalukaWiseDealerList = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Electronic Reports",
        title_2: 'Account Report',
        title_3: `Taluka wise Dealer List`,
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />

            <TalukaWiseDealerFilter />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Taluka wise Dealer List
                                </h4>
                                {/* <div>
                                    <Link className="btn btn-primary btn-sm" to="/warehouse-stock-transfer-add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div> */}
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
                                            <th style={{ width: '150px' }}>Dealer Type</th>
                                            <th style={{ width: '150px' }}>Party</th>
                                            <th style={{ width: '150px' }}>	City
                                            </th>
                                            <th style={{ width: '150px' }}>District</th>
                                            <th style={{ width: '150px' }}>Taluka</th>
                                            <th style={{ width: '150px' }}>Mobile No.</th>
                                            <th style={{ width: '150px' }}>	Dr</th>
                                            <th style={{ width: '150px' }}>Cr</th>
                                            <th style={{ width: '150px' }}>View Ledger</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td >
                                                CCD</td>
                                            <td >DEVROTNO ENTERPRYCEC FURNYTUREC</td>
                                            <td >AHAMEDPUR</td>
                                            <td >LATUR</td>
                                            <td >AHMADPUR</td>
                                            <td >8976431888</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>View</td>
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

export default TalukaWiseDealerList
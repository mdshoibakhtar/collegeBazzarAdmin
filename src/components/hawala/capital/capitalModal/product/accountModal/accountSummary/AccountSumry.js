import { Empty } from 'antd'
import React from 'react'

function AccountSumry() {
    return (
        <div>
        <div
            id="empoloyees-tblwrapper_wrapper"
            className="dataTables_wrapper no-footer"
        >
            <table
                id="table-to-xls"
                className="table dataTable no-footer"
                role="grid"
                aria-describedby="empoloyees-tblwrapper_info"
            >
                <thead>
                    <tr role="row">
                        <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Employee ID: activate to sort column descending"
                            style={{ width: "122.312px" }}
                        >
                            No
                        </th>
                        <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Employee ID: activate to sort column descending"
                            style={{ width: "122.312px" }}
                        >
                            Date
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Employee Name: activate to sort column ascending"
                            style={{ width: "203.45px" }}
                        >
                            Product
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Quantity {" "}
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Rate {" "}
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Disc{" "}
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Amount{" "}
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Branch {" "}
                        </th>
                        <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="empoloyees-tblwrapper"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Department: activate to sort column ascending"
                            style={{ width: "156.475px" }}
                        >
                            Voucher {" "}
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr role="row" className="odd">
                        <td className="sorting_1" colSpan={9}>
                            <span>
                                <Empty />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div
                className="dataTables_info"
                id="empoloyees-tblwrapper_info"
                role="status"
                aria-live="polite"
            >
                Showing 1 to 10 of 12 entries
            </div>
            <div
                className="dataTables_paginate paging_simple_numbers"
                id="empoloyees-tblwrapper_paginate"
            >
                <a
                    className="paginate_button previous disabled"
                    aria-controls="empoloyees-tblwrapper"
                    data-dt-idx={0}
                    tabIndex={0}
                    id="empoloyees-tblwrapper_previous"
                >
                    <i className="fa-solid fa-angle-left" />
                </a>
                <span>
                    <a
                        className="paginate_button current"
                        aria-controls="empoloyees-tblwrapper"
                        data-dt-idx={1}
                        tabIndex={0}
                    >
                        1
                    </a>
                    <a
                        className="paginate_button "
                        aria-controls="empoloyees-tblwrapper"
                        data-dt-idx={2}
                        tabIndex={0}
                    >
                        2
                    </a>
                </span>
                <a
                    className="paginate_button next"
                    aria-controls="empoloyees-tblwrapper"
                    data-dt-idx={3}
                    tabIndex={0}
                    id="empoloyees-tblwrapper_next"
                >
                    <i className="fa-solid fa-angle-right" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default AccountSumry
import React from 'react'

function InvoiceTabList() {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className='heading'>
                        <tr>
                            <th>Bill Type</th>
                            <th>Bill No</th>
                            <th>Bill Date</th>
                            <th>Party</th>
                            <th>Bill Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty row for now */}
                        <tr>
                            <td colSpan="5" className="text-muted">No data available</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination and items per page */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <nav>
                    <ul className="pagination mb-0">
                        <li className="page-item disabled">
                            <button className="page-link" tabIndex="-1">«</button>
                        </li>
                        <li className="page-item disabled">
                            <button className="page-link">»</button>
                        </li>
                    </ul>
                </nav>
                <div className="form-group d-flex align-items-center">
                    <label htmlFor="itemsPerPage" className="me-2 mb-0">Items per page:</label>
                    <select className="form-select" id="itemsPerPage" style={{ width: "auto" }}>
                        <option value="10" selected>10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </>)
}

export default InvoiceTabList

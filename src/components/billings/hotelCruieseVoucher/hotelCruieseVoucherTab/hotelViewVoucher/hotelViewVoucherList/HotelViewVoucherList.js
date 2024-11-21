import React from 'react'

function HotelViewVoucherList() {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="heading">
                        <tr>
                            <th>Edit</th>
                            <th>Print-1</th>
                            <th>Print-2</th>
                            <th>Email</th>
                            <th>MSG</th>
                            <th>Type</th>
                            <th>VoucherNo</th>
                            <th>Date</th>
                            <th>Hotel/Cruise</th>
                            <th>Guest</th>
                            <th>Check-In</th>
                            <th>Room/Cabin Type</th>
                            <th>Contact</th>
                            <th>Party</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Empty row for now */}
                        <tr>
                            <td colSpan="14" className="text-muted">No data available</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HotelViewVoucherList

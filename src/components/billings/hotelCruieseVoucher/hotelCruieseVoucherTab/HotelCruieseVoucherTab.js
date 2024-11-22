import React from 'react'
import HotelVoucher from './hotelVoucher/HotelVoucher'
import { Tab, Tabs } from 'react-bootstrap'
import HotelViewVoucher from './hotelViewVoucher/HotelViewVoucher'

function HotelCruieseVoucherTab() {
    return (
        <div className='card'>
            <Tabs
                defaultActiveKey="Voucher"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Voucher" title="Voucher">
                    <HotelVoucher />
                </Tab>
                <Tab eventKey="View Voucher" title=" View Voucher">
                    <HotelViewVoucher />
                </Tab>

            </Tabs>
        </div>
    )
}

export default HotelCruieseVoucherTab

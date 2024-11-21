import React from 'react'
import HotelViewVoucherSearch from './hotelViewVoucherSearch/HotelViewVoucherSearch'
import HotelViewVoucherList from './hotelViewVoucherList/HotelViewVoucherList'

function HotelViewVoucher() {
    return (
        <section className='m-4'>
            <div className='card'>
                <HotelViewVoucherSearch />
                <HotelViewVoucherList />
            </div>
        </section >
    )
}

export default HotelViewVoucher

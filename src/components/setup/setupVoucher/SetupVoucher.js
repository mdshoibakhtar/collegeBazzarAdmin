import React, { useEffect, useState } from 'react'
import SetupVoucherAside from './setupVoucherAside/SetupVoucherAside'
import { voucherSetupAside } from '../../../api/login/Login'

function SetupVoucher() {
    const [state, setState] = useState([])
    const getVoucherTypedatAside = async () => {
        const response = await voucherSetupAside()
        setState(response)
    }
    useEffect(() => {
        getVoucherTypedatAside()
    }, [])
    return (
        <section>
            <div className='row m-4'>
                    <div className="tbl-caption">
                        <div className="card-body p-0">
                            <h4 className="bg-dark text-white p-2 rounded">Voucher Setup</h4>
                            <div className='col-xl-2'>
                                <div className='card'>
                                    <SetupVoucherAside state={state} />
                                </div>
                                <div className='col-xl-10'>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section >
    )
}

export default SetupVoucher
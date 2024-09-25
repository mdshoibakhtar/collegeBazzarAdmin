import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import exelogo from "../../../assets/images/logo/airtel.png"
import UpdateExtention from './updateExtention/UpdtateExtention'
import NeedHelp from './needHelp/NeedHelp'

function Extension() {
    const [showModal, setShowModal] = useState(false)
    const [showLg, setShowLg] = useState(false)
    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Manual Gateways</h4>
                                    </div>
                                    <div className="search-add-new ">
                                        <div className='row align-items-center'>
                                            {/*  <div className='col-xl-6'>
                                                <label for="search2">Search</label>
                                                <input
                                                    type="search"
                                                    className="form-control search-box"
                                                    placeholder="Search..."
                                                    id='search2'
                                                />
                                            </div> */}
                                            <div className='col-xl-6'>
                                                <div>
                                                    {/*  <Button variant="primary" className="ms-2 mt-3">
                                                        <i className="fas fa-search" />
                                                    </Button>
                                                    <Button variant="primary" className="ms-2 mt-3" onClick={() => setShowUpdateMGateway(!showUpdateMGateway)}>+ Add New</Button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Table Section */}
                                    <Table striped bordered hover responsive>
                                        <thead>
                                            <tr style={{ backgroundColor: '#3F00FF', color: '#fff' }}>
                                                <th>Extension</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* First Row */}
                                            <tr>
                                                <td>
                                                    <div className=''>
                                                        <span>
                                                            <img src={exelogo} alt='text-logo' />
                                                        </span>
                                                        <span>Custom Captcha</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Disable</span>

                                                </td>
                                                <td>
                                                    <Button variant="outline-primary" className="me-2" onClick={() => setShowModal(!showModal)}>
                                                        <i class="fa-solid fa-gears"></i> Configure
                                                    </Button>
                                                    <Button variant="outline-warning" onClick={() => setShowLg(!showLg)}>
                                                        <i class="fa-solid fa-circle-question"></i> Help
                                                    </Button>
                                                    <Button variant="outline-danger">
                                                        <i class="fa-solid fa-eye"></i> Enable
                                                    </Button>
                                                </td>
                                            </tr>

                                            {/* Second Row */}
                                            <tr>
                                                <td>
                                                    <div className=''><span>
                                                        <img src={exelogo} alt='text-logo' />
                                                    </span>
                                                        <span>Facebook Comment</span></div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Enabled</span>
                                                </td>
                                                <td>
                                                    <Button variant="outline-primary" className="me-2">
                                                        <i class="fa-solid fa-gears"></i> Configure
                                                    </Button>
                                                    <Button variant="outline-warning">
                                                        <i class="fa-solid fa-circle-question"></i> Help
                                                    </Button>
                                                    <Button variant="outline-danger">
                                                        <i class="fa-solid fa-eye"></i> Enable
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateExtention showModal={showModal} setShowModal={setShowModal} />
            <NeedHelp showLg={showLg} setShowLg={setShowLg} />
        </>
    )
}

export default Extension

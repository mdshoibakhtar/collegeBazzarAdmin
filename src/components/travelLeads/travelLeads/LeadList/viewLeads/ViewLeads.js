
import React from 'react'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import About from './about/About';

const ViewLeads = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'View Lead',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">View Lead</h4>
                                <div className=" text-right">
                                    <Button variant="secondary" className="mr-2">Edit</Button>
                                    <Button variant="primary" className="mr-2">Send Email</Button>
                                    <Button variant="primary" className="mr-2">WhatsApp</Button>
                                    <Button variant="primary" className="mr-2">WhatsApp Template</Button>
                                    <Button variant="primary">Branch</Button>
                                </div>
                            </div>
                            <form className="tbl-captionn tbl-captionn-lead">
                                <div className="row">
                                    <Tabs defaultActiveKey="about" id="lead-tabs" className="mb-3">
                                        <Tab eventKey="about" title="About">
                                            <About />
                                        </Tab>
                                        <Tab eventKey="history" title="History">
                                            <div className="p-3">
                                                <p>History Content</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="reminders" title="Reminders">
                                            <div className="p-3">
                                                <p>Reminders Content</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Files" title="Files">
                                            <div className="p-3">
                                                <p>Files</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Notes" title="Notes">
                                            <div className="p-3">
                                                <p>Notes</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Traveller" title="Traveller">
                                            <div className="p-3">
                                                <p>Traveller</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="FollowUp" title="Follow Up">
                                            <div className="p-3">
                                                <p>Follow Up</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Quote" title="Quote">
                                            <div className="p-3">
                                                <p>Quote</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Suppliers" title="Suppliers">
                                            <div className="p-3">
                                                <p>Suppliers</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Billing" title="Billing">
                                            <div className="p-3">
                                                <p>Billing</p>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-buttons position-fixed" style={{ top: "408px", right: "-99px" }}>
                <Link to={'#'} className="btn btn-info mb-2 mb-2">Flight Quote</Link>
                <Link to="/travel-Vouchers-list" className="btn btn-info mb-2">Voucher</Link>
                <Link to={'/travel-invoice-list'} className="btn btn-info mb-2">Invoice</Link>
            </div>
        </>
    )
}

export default ViewLeads
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Invoice from "./invoice/Invoice";
import PaymentReceipt from "./paymentReceipt/PaymentReceipt";



const TravelInvoice = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Lead Invoice',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Lead Invoice</h4>
                                        <div>
                                            <Link to='#' className="btn btn-primary">Add Credit Note</Link>
                                            <Link to='#' className="btn btn-primary">Add Invoice</Link>
                                            <Link to='#' className="btn btn-primary">Add Receipt</Link>
                                            <Link to='#' className="btn btn-primary">Flight Invoice List</Link>
                                            <Link to='#' className="btn btn-primary">Add Flight Invoice</Link>
                                        </div>
                                    </div>
                                    <form className="tbl-captionn tbl-captionn-lead">
                                        <div className="row">
                                            <Tabs defaultActiveKey="Invoice" id="lead-tabs" className="mb-3">
                                                <Tab eventKey="Invoice" title="Invoice">
                                                    <Invoice />
                                                </Tab>
                                                <Tab eventKey="PaymentReceipt" title="Payment Receipt">
                                                    <PaymentReceipt />
                                                </Tab>
                                                <Tab eventKey="CreditNote" title="Credit Note">
                                                    Credit Note
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelInvoice
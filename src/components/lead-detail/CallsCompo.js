import { useState } from "react";
import CallAddModel from "./CallAddModel";
import CallTable from "./CallTable";

function CallsCompo() {

    const [modalShow, setModalShow] = useState(false);
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <span className="pull-left" style={{alignItems:"center" , display:"flex"}} onClick={() => setModalShow(true)}>

                                Create Calls  <i className="fa fa-plus" />

                            </span>
                            <CallAddModel show={modalShow}
                                onHide={() => setModalShow(false)} />
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Prev
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                        <div className="col-12" style={{ overflowX: "auto" }}>
                            <CallTable />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CallsCompo;
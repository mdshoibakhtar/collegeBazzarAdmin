import { Tab, Tabs } from "react-bootstrap";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import ProjectDetail from "../projectdetail/ProjectDetail";
import RecceMain from "../Recce/RecceMain";

function Projectdetails() {
   

    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div>

                            <h5> Abaris Office Interior Work / JOB ID :ABRIS21448</h5>

                        </div>
                        <div className="card">
                            <div className="card-body p-0">

                                <Tabs
                                    defaultActiveKey="Project Detail"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 res-tab cusnav"
                                    style={{padding:"5px"}}

                                >
                                    <Tab eventKey="Project Detail" title="Project Detail">
                                        <ProjectDetail/>
                                    </Tab>
                                    <Tab eventKey="Recce" title="Recce">
                                        <RecceMain/>
                                    </Tab>
                                    <Tab eventKey="Design" title="Design">
                                        Design
                                    </Tab>
                                    <Tab eventKey="BOQ" title="BOQ">
                                        BOQ
                                    </Tab>
                                    <Tab eventKey="Order" title="Order">
                                        Order
                                    </Tab>
                                    <Tab eventKey="Work Progress" title="Work Progress">
                                        Work Progress
                                    </Tab>
                                    <Tab eventKey="Snag" title="Snag">
                                        Snag
                                    </Tab>
                                    


                                </Tabs>
                                <div className="table-responsive active-projects style-1" style={{ overflowX: 'auto' }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default Projectdetails;

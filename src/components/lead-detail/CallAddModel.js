import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CallAddModel(props) {
    const [formValues, setFormValues] = useState({
        call_number: '',
        start_time: '',
        duration: '',
        call_direct: '',
        call_status: '',
        convert_status: '',
        provider_name: '',
        callerFrom: '',
        callerTo: '',
        recordingFile: '',
        landing_number: '',
        lead_id: '',
        request_id: '',
        auto_Dialer_ID: '',
        siMName: '',
        deviceSerialNumber: '',
        conversationUUID: '',
        leg: '',
        assignTo: [''],
        companyId: '',
        extension_user: '',
        user_id: '',
    });


    const [errors, setErrors] = useState({});

   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quick Create Calls
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="container mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Caller Number</label>
                            <input
                                type="text"
                                name="call_number"
                                style={{ width: "100%" }}
                                value={formValues.call_number}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Start Time</label>
                            <input
                                type="datetime-local"
                                name="start_time"
                                value={formValues.start_time}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Duration</label>
                            <input
                                type="time"
                                name="duration"
                                value={formValues.duration}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Direction</label>
                            <select
                                name="call_direct"
                                value={formValues.call_direct}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Inbound">Inbound</option>
                                <option value="Outbound">Outbound</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Assigned To</label>
                            <select
                                name="assignTo"
                                value={formValues.assignTo[0]}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, assignTo: [e.target.value] })
                                }
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Abdul">Abdul</option>
                                <option value="Someone Else">Someone Else</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Status</label>
                            <select
                                name="call_status"
                                value={formValues.call_status}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Completed">Completed</option>
                                <option value="Failed">Failed</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Convert Status</label>
                            <select
                                name="convert_status"
                                value={formValues.convert_status}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Converted">Converted</option>
                                <option value="Not Converted">Not Converted</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Call Source</label>
                            <select
                                name="callSource"
                                value={formValues.callSource}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="Website">Website</option>
                                <option value="App">App</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Provider Name</label>
                            <input
                                type="text"
                                name="provider_name"
                                style={{ width: "100%" }}
                                value={formValues.provider_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Staff</label>
                            <select
                                name="extension_user"
                                value={formValues.extension_user}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select An Option</option>
                                <option value="User1">User1</option>
                                <option value="User2">User2</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Caller From</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="callerFrom"
                                value={formValues.callerFrom}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Caller To</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="callerTo"
                                value={formValues.callerTo}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Recording File Name</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="recordingFile"
                                value={formValues.recordingFile}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Landing Number</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="landing_number"
                                value={formValues.landing_number}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Lead ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="lead_id"
                                value={formValues.lead_id}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Request ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="request_id"
                                value={formValues.request_id}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Auto Dialer ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="auto_Dialer_ID"
                                value={formValues.auto_Dialer_ID}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>SIM Name</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="siMName"
                                value={formValues.siMName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Device Serial Number</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="deviceSerialNumber"
                                value={formValues.deviceSerialNumber}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Conversation UUID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="conversationUUID"
                                value={formValues.conversationUUID}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Leg</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="leg"
                                value={formValues.leg}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Company ID</label>
                            <input
                                style={{ width: "100%" }}
                                type="text"
                                name="companyId"
                                value={formValues.companyId}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                       
                        <div className="col-md-12 text-center mt-4">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CallAddModel;
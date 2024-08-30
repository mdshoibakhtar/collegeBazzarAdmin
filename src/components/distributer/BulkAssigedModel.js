import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { getServiceCategory, reailerDistIdAgainstAll } from '../../api/login/Login';

function BulkAssignedModel(props) {
    const [data, setData] = useState(props?.selectedUsers);
    const [stream, setStream] = useState([]);
    const [courses, setCourses] = useState([]); // Assuming you have a similar API for courses
    const [leadTypes, setLeadTypes] = useState([]); // Example state for Lead Type options
    const [leadStatuses, setLeadStatuses] = useState([]); // Example state for Lead Status options
    const [leadSubStatuses, setLeadSubStatuses] = useState([]); // Example state for Lead Sub Status options

    useEffect(() => {
        setData(props?.selectedUsers);
        getStream();
        // getCourses(); // Uncomment if you have a separate API for courses
        // getLeadTypes(); // Uncomment if you have a separate API for lead types
        // getLeadStatuses(); // Uncomment if you have a separate API for lead statuses
        // getLeadSubStatuses(); // Uncomment if you have a separate API for lead sub statuses
    }, [props]);

    const getStream = async () => {
        try {
            const res = await getServiceCategory();
            setStream(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (index, key, value) => {
        const updatedData = [...data];
        updatedData[index][key] = value;
        setData(updatedData);
    };

    const [formValues, setFormValues] = useState({
        streams: '',
        courses: '',
        leadAssign: '',
        leadType: '',
        leadStatus: '',
        leadSubStatus: '',
        kycStatus: ''
    });
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
            size="xl"
            fullscreen={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mass Lead Editing
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "auto" }}>
                <Container fluid>
                    
                    <div className="container mt-5">
                        <form onSubmit={handleSubmit} className='row'>
                           

                            <div className="mb-3 col-3">
                                <label htmlFor="leadAssign" className="form-label">Lead Assign</label>
                                <select
                                    className="form-select"
                                    id="leadAssign"
                                    name="leadAssign"
                                    value={formValues.leadAssign}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Lead Assign</option>
                                    <option value="assign1">Assign 1</option>
                                    <option value="assign2">Assign 2</option>
                                    <option value="assign3">Assign 3</option>
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadType" className="form-label">Lead Type</label>
                                <select
                                    className="form-select"
                                    id="leadType"
                                    name="leadType"
                                    value={formValues.leadType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Lead Type</option>
                                    <option value="type1">Type 1</option>
                                    <option value="type2">Type 2</option>
                                    <option value="type3">Type 3</option>
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadStatus" className="form-label">Lead Status</label>
                                <select
                                    className="form-select"
                                    id="leadStatus"
                                    name="leadStatus"
                                    value={formValues.leadStatus}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Lead Status</option>
                                    <option value="status1">Status 1</option>
                                    <option value="status2">Status 2</option>
                                    <option value="status3">Status 3</option>
                                </select>
                            </div>
                            

                            <div className="mb-3 col-3">
                                <label htmlFor="leadSubStatus" className="form-label">Lead Sub Status</label>
                                <select
                                    className="form-select"
                                    id="leadSubStatus"
                                    name="leadSubStatus"
                                    value={formValues.leadSubStatus}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Lead Sub Status</option>
                                    <option value="substatus1">Sub Status 1</option>
                                    <option value="substatus2">Sub Status 2</option>
                                    <option value="substatus3">Sub Status 3</option>
                                </select>
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="streams" className="form-label">Streams</label>
                                <select
                                    className="form-select"
                                    id="streams"
                                    name="streams"
                                    value={formValues.streams}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Stream</option>
                                    <option value="stream1">Stream 1</option>
                                    <option value="stream2">Stream 2</option>
                                    <option value="stream3">Stream 3</option>
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="courses" className="form-label">Courses</label>
                                <select
                                    className="form-select"
                                    id="courses"
                                    name="courses"
                                    value={formValues.courses}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Course</option>
                                    <option value="course1">Course 1</option>
                                    <option value="course2">Course 2</option>
                                    <option value="course3">Course 3</option>
                                </select>
                            </div>
                            <div className="mb-3 col-3">
                                <label htmlFor="kycStatus" className="form-label">KYC Status</label>
                                <select
                                    className="form-select"
                                    id="kycStatus"
                                    name="kycStatus"
                                    value={formValues.kycStatus}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select KYC Status</option>
                                    <option value="kyc1">KYC 1</option>
                                    <option value="kyc2">KYC 2</option>
                                    <option value="kyc3">KYC 3</option>
                                </select>
                            </div>

                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                        </form>
                    </div>
                    <Table responsive bordered>
                        <thead className="table" style={{ width: "1500px" }}>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Member Type</th>
                                <th>Name</th>
                                <th>Streams</th>
                                <th>Courses</th>
                                <th>Lead Assign</th>
                                <th>Lead Type</th>
                                <th>Lead Status</th>
                                <th>Lead Sub Status</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Main Balance</th>
                                <th>KYC Status</th>

                            </tr>
                        </thead>
                        <tbody className='tbodyCustom'>
                            {data?.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.member_type}
                                            onChange={(e) => handleInputChange(index, 'member_type', e.target.value)}
                                        />

                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.name}
                                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.streams}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'streams', e.target.value)}
                                        >
                                            <option value="">Select Stream</option>
                                            {stream.map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.courses}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'courses', e.target.value)}
                                        >
                                            <option value="">Select Course</option>
                                            {courses.map((course) => (
                                                <option key={course.id} value={course.name}>
                                                    {course.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.lead_assign}
                                            onChange={(e) => handleInputChange(index, 'lead_assign', e.target.value)}
                                        >
                                            <option value="">Select Assign</option>
                                            {/* Add options for Lead Assign here */}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.lead_type}
                                            onChange={(e) => handleInputChange(index, 'lead_type', e.target.value)}
                                        >
                                            <option value="">Select Lead Type</option>
                                            {leadTypes.map((type) => (
                                                <option key={type.id} value={type.name}>
                                                    {type.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.lead_status}
                                            onChange={(e) => handleInputChange(index, 'lead_status', e.target.value)}
                                        >
                                            <option value="">Select Lead Status</option>
                                            {leadStatuses.map((status) => (
                                                <option key={status.id} value={status.name}>
                                                    {status.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.lead_sub_status}
                                            onChange={(e) => handleInputChange(index, 'lead_sub_status', e.target.value)}
                                        >
                                            <option value="">Select Lead Sub Status</option>
                                            {leadSubStatuses.map((subStatus) => (
                                                <option key={subStatus.id} value={subStatus.name}>
                                                    {subStatus.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.mobile}
                                            onChange={(e) => handleInputChange(index, 'mobile', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="email"
                                            style={{ width: "200px" }}
                                            value={row.email}
                                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.main_wallet}
                                            onChange={(e) => handleInputChange(index, 'main_wallet', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.kycStatus}
                                            onChange={(e) => handleInputChange(index, 'kycStatus', e.target.value)}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="In Progress">In Progress</option>
                                        </Form.Select>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BulkAssignedModel;

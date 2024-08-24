import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { getServiceCategory, reailerDistIdAgainstAll } from '../../api/login/Login';

function BulkAssignedModel(props) {
    const [data, setData] = useState(props.selectedUsers);
    const [stream, setStream] = useState([]);
    const [members, setMembers] = useState([]);
    const [courses, setCourses] = useState([]); // Assuming you have a similar API for courses

    useEffect(() => {
        setData(props.selectedUsers);
        getStream();
        getAllmember();
        // getCourses(); // Uncomment if you have a separate API for courses
    }, [props]);

    const getStream = async () => {
        try {
            const res = await getServiceCategory();
            setStream(res?.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getAllmember = async () => {
        try {
            const res = await reailerDistIdAgainstAll();
            setMembers(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (index, key, value) => {
        const updatedData = [...data];
        updatedData[index][key] = value;
        setData(updatedData);
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
                    Bulk Assigned
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "auto" }}>
                <Container fluid>
                    <Table responsive bordered>
                        <thead className="table-dark" style={{ width: "1500px" }}>
                            <tr>
                                <th>Created At</th>
                                <th>Member Type</th>
                                <th>Name</th>
                                <th>Streams</th>
                                <th>Courses</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Main Balance</th>
                                <th>KYC Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.createdAt}
                                            readOnly
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.member_type}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'member_type', e.target.value)}
                                        >
                                            <option value="">Select Member type</option>
                                            {members?.map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Form.Select>
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

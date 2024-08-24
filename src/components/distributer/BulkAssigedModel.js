import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function BulkAssignedModel(props) {
    const [data, setData] = useState(props.selectedUsers);

    useEffect(() => {
        setData(props.selectedUsers)
    }, [props])


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
                                        // onChange={(e) => handleInputChange(index, 'createdAt', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.member_type}
                                        // onChange={(e) => handleInputChange(index, 'member_type', e.target.value)}
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
                                        <Form.Control
                                            type="text"
                                            value={row.streams}
                                            onChange={(e) => handleInputChange(index, 'streams', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.courses}
                                            onChange={(e) => handleInputChange(index, 'courses', e.target.value)}
                                        />
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
                                        <Form.Control
                                            type="text"
                                            value={row.kycStatus}
                                            onChange={(e) => handleInputChange(index, 'kycStatus', e.target.value)}
                                        />
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

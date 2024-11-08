import React, { useEffect, useState } from 'react';
import { Accordion, Form, Button, Dropdown } from 'react-bootstrap';
import { addOrganisationSettingsMdlsttingTemp, deleteOrganisationSettingsMdlsttingTemp, getByOrganisationSettingsMdlsttingTempId, getListOrganisationSettingsMdlsttingTemp, updateOrganisationSettingsMdlsttingTemp } from '../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function Reccetemplet() {
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [initialValues, setInitialValues] = useState({
        module_id: "668e5daefb64e62951f47e6b",
        name: "",
        isActive: true,
        sort_no: 1,
        /* assigned_to: [{
            type: staff._Id, ref: 'staff'
        }],
        stack_holders: [{
            type: staff._Id, ref: 'staff'
        }], */
        // instructions: "",
        // sort_no: { type: Number, index: true },
    });

    // Toast Success and Error Messages
    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };

    // Fetch Template List
    const getListData = async (page) => {
        setLoading(true);
        try {
            const res = await getListOrganisationSettingsMdlsttingTemp(page, count);
            setData(res?.data);
            setPage(page);
        } catch (error) {
            toastErrorMessage("Failed to load templates.");
        }
        setLoading(false);
    };

    // Handle Form Input Change
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const clone = { ...initialValues, [name]: value };
        setInitialValues(clone);
    };

    // Submit Form (Add or Update)
    const submitForm = async (e) => {
        e.preventDefault();

        try {
            if (!initialValues._id) { // Add new template
                const res = await addOrganisationSettingsMdlsttingTemp(initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Template Added Successfully");
                    setInitialValues({
                        module_id: "668e5daefb64e62951f47e6b",
                        name: "",
                        isActive: true,
                        sort_no: 1
                    });  // Reset form fields to default values
                    getListData(page);
                    setShow(false); // Hide form after success
                } else {
                    toastErrorMessage("Failed to Add Template");
                }
            } else { // Update existing template
                const res = await updateOrganisationSettingsMdlsttingTemp(initialValues._id, initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Template Updated Successfully");
                    getListData(page); // Refresh the list after update
                    setShow(false); // Hide form after success
                } else {
                    toastErrorMessage("Failed to Update Template");
                }
            }
        } catch (error) {
            toastErrorMessage("Error processing the form.");
        }
    };

    // Delete Template
    const deleteBlockAdd = async (id) => {
        setLoading(true);
        try {
            await deleteOrganisationSettingsMdlsttingTemp(id);
            getListData(page); // Refresh the list after deletion
            toastSuccessMessage("Template Deleted Successfully");
        } catch (error) {
            toastErrorMessage("Failed to delete template.");
        }
        setLoading(false);
    };

    // Set Data for Editing (when "Rename" is clicked)
    const setUpdateData = async (id) => {
        try {
            if (id) {
                const response = await getByOrganisationSettingsMdlsttingTempId(id);
                if (response?.statusCode === "200") {
                    setInitialValues(response?.data);
                    setShow(true); // Show the form for editing
                }
            }
        } catch (error) {
            toastErrorMessage("Failed to fetch template data.");
        }
    };

    // Reset form when "Add Template" is clicked
    const handleAddTemplate = () => {
        setInitialValues({
            module_id: "668e5daefb64e62951f47e6b",
            name: "",
            isActive: true,
            sort_no: 1
        });
        setShow(true);
    };

    useEffect(() => {
        getListData(page);
    }, [page]);

    return (
        <>
            <div className='col-xl-4'>
                <div className='card ' style={{ height: "77vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className=''>
                                    <h6>Recce Template</h6>
                                </div>
                                <div className=''>
                                    <button className='btn btn-sm btn-outline-primary' onClick={handleAddTemplate}> + Add Template</button>
                                </div>
                            </div>
                        </div>
                        {loading ? (
                            "Loading..."
                        ) : (
                            data?.map((item, i) => (
                                <div key={i} className="my-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span>
                                            <b>{item?.name}</b>
                                        </span>
                                        <span>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    {/* Icon or button here */}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setUpdateData(item?._id)}>
                                                        <i className="fas fa-pen"></i> Rename
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={() => deleteBlockAdd(item?._id)}>
                                                        <i className="fas fa-trash"></i> Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}



                        {show && (
                            <div className='my-3'>
                                <form onSubmit={submitForm}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='w-75'>
                                            <input
                                                type='text'
                                                placeholder='Enter Template Name'
                                                className='px-2 py-0 w-100'
                                                name='name'
                                                value={initialValues.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className=''>
                                            <button
                                                type="submit"
                                                style={{ border: "none", backgroundColor: "inherit", color: "#000", padding: "0 4px" }}
                                            >
                                                <i className="fa-sharp fa-regular fa-circle-check"></i>
                                            </button>
                                            &nbsp;
                                            <span onClick={() => setShow(false)}>
                                                <i className="fa-sharp fa-regular fa-circle-xmark"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className='col-xl-5'>
                <div className='card' style={{ height: "77vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                    <div className='border-bottom'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className=''>
                                <h6>Recce Template Details</h6>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <Accordion defaultActiveKey="0">
                            {/* Recce Detail Section */}
                            <Accordion.Item eventKey="0" className='border-0 mb-0'>
                                <Accordion.Header onClick={() => setExpanded(!expanded)} className='p-0'>
                                    Recce Detail
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group controlId="assignRecce">
                                            <Form.Label>Assign Recce to (will receive Recce Link)</Form.Label>
                                        </Form.Group>
                                        <Form.Group controlId="projectStakeholders" className="mt-3">
                                            <Form.Label>Project Stakeholders Details</Form.Label>
                                        </Form.Group>
                                        <Form.Group controlId="instructionRecce" className="mt-3">
                                            <Form.Label>Instruction for Recce</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Enter instructions here" />
                                        </Form.Group>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* External Environment */}
                            <Accordion.Item eventKey="1" className='border-0 mb-0'>
                                <Accordion.Header className='p-0'>
                                    External Environment
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group controlId="additionalDetails">
                                            <Form.Label><small>Section Guide Video</small></Form.Label>
                                            <Form.Control disabled={true} rows={3} placeholder="https://support.google.com/news" />
                                        </Form.Group>
                                        <small>External Photos and Videos</small>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Internal Environment */}
                            <Accordion.Item eventKey="2" className='border-0 mb-0'>
                                <Accordion.Header className='p-0'>
                                    Internal Environment
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Group controlId="additionalDetails">
                                            <Form.Label><small>Section Guide Video</small></Form.Label>
                                            <Form.Control disabled={true} rows={3} placeholder="https://support.google.com/news" />
                                        </Form.Group>
                                        <small>Internal Photos and Videos</small>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Capture Space */}
                            <Accordion.Item eventKey="4" className='border-0 mb-0'>
                                <Accordion.Header className='p-0'>
                                    Capture Space
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>My Space</strong>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Signage And Facade */}
                            <Accordion.Item eventKey="5" className='border-0 mb-0'>
                                <Accordion.Header className='p-0'>
                                    Signage And Facade
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Store Name</li>
                                        <li>Store GSTIN</li>
                                        <li>Signage contact number</li>
                                        <li>Local Language</li>
                                        <li>Store name in local language</li>
                                        {/* More list items... */}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <ToastContainer className={"text-center"} />
            </div>
        </>
    );
}

export default Reccetemplet;

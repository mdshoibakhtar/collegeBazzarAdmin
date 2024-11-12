import React from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Select from 'react-select';
import './createTask.css';

function CreateTask({ show, setShow, handleCreateTask, staffdata, initialValues }) {
    const handleClose = () => setShow(false);
    const handleMultiSelectChange = (name, selectedOptions) => {

    };
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="responsive-offcanvas" style={{ width: "600px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-white">Create Task</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className="task-form" onSubmit={handleCreateTask}>
                        {/* Task Details */}
                        <div className="row">
                            <div className="form-group col-xl-6">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" id="taskName" placeholder="Task Name" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Subject" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="hourlyRate">Hourly Rate</label>
                                <input type="text" id="hourlyRate" placeholder="Hourly Rate" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="repeatedNo">Repeated No</label>
                                <input type="text" id="repeatedNo" placeholder="Repeated No" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="startDate">Start Date Time</label>
                                <input type="date" id="startDate" placeholder="Start Date" className="form-control" />
                            </div>
                            <div className="form-group col-xl-6">
                                <label htmlFor="startDate">End Date Time</label>
                                <input type="date" id="startDate" placeholder="Start Date" className="form-control" />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="dueDate">Expect Due Date</label>
                                <input type="date" id="dueDate" placeholder="Expect Due Date" className="form-control" />
                            </div>
                            <div className="form-group col-xl-6">
                                <label htmlFor="priority">Priority</label>
                                <select id="priority" className='w-100'>
                                    <option value="">Select priority</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Alice Johnson">Alice Johnson</option>
                                </select>
                            </div>

                            
                            {/* <div className="form-group col-xl-6">
                               
                            </div> */}
                            {/* Assignee Selection */}
                            <div className="form-group col-xl-6">
                                <label htmlFor="assignee">Assignee</label>
                                <Select
                                    options={staffdata?.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Rloes"
                                    value={initialValues?.stack_holders?.map(id => {
                                        const item = staffdata?.find(item => item._id === id);
                                        return item ? { label: item.name, value: id } : null;
                                    }).filter(Boolean)}
                                    onChange={(selected) => handleMultiSelectChange("stack_holders", selected)}
                                    isMulti
                                />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="followers">Followers</label>
                                <Select
                                    options={staffdata?.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Rloes"
                                    value={initialValues?.stack_holders?.map(id => {
                                        const item = staffdata?.find(item => item._id === id);
                                        return item ? { label: item.name, value: id } : null;
                                    }).filter(Boolean)}
                                    onChange={(selected) => handleMultiSelectChange("stack_holders", selected)}
                                    isMulti
                                />
                            </div>
                            <div className="form-group col-xl-6 mt-5">
                                <div className="row">
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input type="checkbox" id="public" className="form-check-input" />
                                            <label htmlFor="public" className="form-check-label">Public</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input type="checkbox" id="billable" className="form-check-input" />
                                            <label htmlFor="billable" className="form-check-label">Billable</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* Task Description */}
                        <div className="form-group">
                            <label htmlFor="taskDescription">Task Description <span className="required">*</span></label>
                            <textarea id="taskDescription" placeholder="Enter Task Description" rows="4" required className="form-control"></textarea>

                            <div className="icon-group mt-2">
                                <button type="button" className="icon-button" title="Attach File">
                                    <span role="img" aria-label="Attach">📎</span>
                                </button>
                                <button type="button" className="icon-button" title="Attach Image">
                                    <span role="img" aria-label="Image">🖼️</span>
                                </button>
                            </div>
                        </div>



                        {/* Form Actions */}
                        <div className="button-group d-flex justify-content-end mt-4">
                            <Button type="submit" variant="danger" className="submit-button me-2">Submit</Button>
                            <Button type="button" variant="outline-secondary" onClick={handleClose} className="cancel-button">Cancel</Button>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CreateTask;

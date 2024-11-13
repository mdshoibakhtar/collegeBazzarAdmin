import React from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Select from 'react-select';
import './createTask.css';

function CreateTask({ show, setShow, handleCreateTask, staffdata, initialValues, handleChange, formSubmit }) {
    const handleClose = () => setShow(false);

    const handleMultiSelectChange = (name, selectedOptions) => {
        // handle multi-select change
    };

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="responsive-offcanvas" style={{ width: "600px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-white">Create Task</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className="task-form" onSubmit={formSubmit}>
                        {/* Task Details */}
                        <div className="row">
                            <div className="form-group col-xl-6">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" id="taskName" name="task_name" placeholder="Task Name" className="form-control"
                                    value={initialValues?.task_name || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control"
                                    value={initialValues?.subject || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="hourlyRate">Hourly Rate</label>
                                <input type="number" id="hourlyRate" name="hourly_rate" placeholder="Hourly Rate" className="form-control"
                                    value={initialValues?.hourly_rate || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="repeatedNo">Repeated No</label>
                                <input type="text" id="repeatedNo" name="repeated_no" placeholder="Repeated No" className="form-control"
                                    value={initialValues?.repeated_no || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="startDate">Start Date Time</label>
                                <input type="date" name="start_date_time" id="startDate" className="form-control"
                                    value={initialValues?.start_date_time || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group col-xl-6">
                                <label htmlFor="endDate">End Date Time</label>
                                <input type="date" id="endDate" name="end_date_time" className="form-control"
                                    value={initialValues?.end_date_time || ''} onChange={handleChange} />
                            </div>
                            <div className="form-group col-xl-6">
                                <label htmlFor="complition_date_time">Completion Date Time</label>
                                <input type="date" id="complition_date_time" name="complition_date_time" className="form-control"
                                    value={initialValues?.complition_date_time || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="dueDate">Expected Due Date</label>
                                <input type="date" name="expect_due_date_time" id="dueDate" className="form-control"
                                    value={initialValues?.expect_due_date_time || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="repeat">Repeat Every</label>
                                <select id="repeat" className="w-100" name="repeat"
                                    value={initialValues?.repeat || ''} onChange={handleChange}>
                                    <option value="">Select Repeat</option>
                                    <option value="day">Day</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="priority">Priority</label>
                                <select id="priority" className="w-100" name="priority"
                                    value={initialValues?.priority || ''} onChange={handleChange}>
                                    <option value="">Select priority</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Alice Johnson">Alice Johnson</option>
                                </select>
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="tags">Tags</label>
                                <Select
                                    isMulti
                                    onChange={(selected) => handleMultiSelectChange("tags", selected)}
                                    value={initialValues?.tags || []}
                                    options={[]}
                                    placeholder="Select Tags"
                                />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="total_cycle">Total Cycle</label>
                                <input type="text" id="total_cycle" name="total_cycle" placeholder="Total Cycle" className="form-control"
                                    value={initialValues?.total_cycle || ''} onChange={handleChange} />
                            </div>

                            {/* Assignee Selection */}
                            <div className="form-group col-xl-6">
                                <label htmlFor="assignee">Assignee</label>
                                <Select
                                    options={staffdata?.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Assignee"
                                    value={initialValues?.assignees || []}
                                    onChange={(selected) => handleMultiSelectChange("assignees", selected)}
                                    isMulti
                                />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="followers">Followers</label>
                                <Select
                                    options={staffdata?.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Followers"
                                    value={initialValues?.followers || []}
                                    onChange={(selected) => handleMultiSelectChange("followers", selected)}
                                    isMulti
                                />
                            </div>

                            {/* Checkboxes */}
                            <div className="form-group col-xl-12">
                                <div className="row">
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="public"
                                                id="public"
                                                className="form-check-input"
                                                checked={initialValues?.public || false}
                                                onChange={() => handleChange({ target: { name: "public", value: !initialValues?.public } })}
                                            />
                                            <label htmlFor="public" className="form-check-label">Public</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-xl-6 col-md-6 col-12">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="billable"
                                                name="billable"
                                                className="form-check-input"
                                                checked={initialValues?.billable || false}
                                                onChange={() => handleChange({ target: { name: "billable", value: !initialValues?.billable } })}
                                            />
                                            <label htmlFor="billable" className="form-check-label">Billable</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Task Description */}
                        <div className="form-group">
                            <label htmlFor="taskDescription">Task Description <span className="required">*</span></label>
                            <textarea
                                id="taskDescription"
                                placeholder="Enter Task Description"
                                name="task_description"
                                rows="4"
                                required
                                className="form-control border-bottom-0"
                                value={initialValues?.task_description || ''}
                                onChange={handleChange}
                            ></textarea>
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

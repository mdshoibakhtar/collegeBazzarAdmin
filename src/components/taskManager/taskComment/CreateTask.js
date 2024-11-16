import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Select from 'react-select';
import { dmtDisputePriority, getAllAssign } from '../../../api/login/Login';
import './createTask.css';

function CreateTask({ show, setShow, setInitialValues, initialValues, handleChange, formSubmit }) {
    const handleClose = () => setShow(false);
    const [priorityState, setPriorityState] = useState([]);
    const [staffData, setStaffData] = useState([]);
    const [tags, setTags] = useState([]);

    const getPriorityData = async () => {
        try {
            const response = await dmtDisputePriority();
            setPriorityState(response?.data || []);
        } catch (error) {
            alert(`Failed to fetch priority data: ${error.message}`);
            console.error("Priority data fetch error:", error);
        }
    };

    const getStaffData = async () => {
        try {
            const response = await getAllAssign();
            setStaffData(response?.data || []);
        } catch (error) {
            console.error("Error fetching assigned staff:", error);
        }
    };

    useEffect(() => {
        getPriorityData();
        getStaffData();
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            if (initialValues?.tags?.trim()) {
                addTag(initialValues.tags.trim());
                setInitialValues((prev) => ({ ...prev, tags: '' })); 
            }
        }
    };
    
    const addTag = (tag) => {
        if (tag && !tags.includes(tag)) {
            const updatedTags = [...tags, tag];
            setTags(updatedTags);
            handleChange({ target: { name: 'tags', value: updatedTags } });
        }
    };

    const removeTag = (indexToRemove) => {
        const updatedTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(updatedTags);
        handleChange({ target: { name: 'tags', value: updatedTags } });
    };
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
        }
    };
    const handleMultiSelectChange = (name, selectedOptions) => {
        handleChange({
            target: {
                name: name,
                value: selectedOptions,
            },
        });
    };
    const styles = {
        tagInputContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            border: '1px solid #ddd',
            padding: '5px',
            borderRadius: '5px',
            gap: '5px',
        },
        tag: {
            display: 'flex',
            alignItems: 'center',
            background: '#e0e0e0',
            borderRadius: '3px',
            padding: '3px 8px',
            fontSize: '0.9em',
        },
        removeTag: {
            marginLeft: '5px',
            cursor: 'pointer',
            color: '#555',
        },
        input: {
            border: 'none',
            outline: 'none',
            flex: '1',
            fontSize: '0.9em',
            minWidth: '120px',
        },
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
                                    {priorityState?.map((item, i) =>
                                        <option value={item?._id}>{item?.priority}</option>
                                    )}
                                </select>
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="tags">Tags</label>
                                <div style={styles.tagInputContainer}>
                                    {tags.map((tag, index) => (
                                        <div key={index} style={styles.tag}>
                                            {tag}
                                            <span style={styles.removeTag} onClick={() => removeTag(index)}>
                                                &times;
                                            </span>
                                        </div>
                                    ))}
                                    <input
                                        type="text"
                                        name="tags"
                                        value={initialValues?.tags}
                                        onChange={handleChange}
                                        onKeyDown={handleKeyPress}
                                        placeholder="Type a tag and press Enter"
                                        style={styles.input}
                                    />
                                </div>
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="total_cycle">Total Cycle</label>
                                <input type="text" id="total_cycle" name="total_cycle" placeholder="Total Cycle" className="form-control"
                                    value={initialValues?.total_cycle || ''} onChange={handleChange} />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="assignee">Assignee</label>
                                <Select
                                    name="assignees"
                                    options={staffData.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Assignee"
                                    value={initialValues?.assignees?.ref}
                                    onChange={(selected) => handleMultiSelectChange("assignees", selected)}
                                    isMulti
                                />
                            </div>

                            <div className="form-group col-xl-6">
                                <label htmlFor="followers">Followers</label>
                                {/* <Select
                                    name="followers"
                                    options={staffData.map(staff => ({ label: staff.name, value: staff._id }))}
                                    placeholder="Select Followers"
                                    value={initialValues?.followers?.ref}
                                    onChange={(selected) => handleMultiSelectChange("followers", selected)}
                                    isMulti
                                /> */}
                                <select id="priority" className="w-100" name="priority"
                                    value={initialValues?.priority || ''} onChange={handleChange}>
                                    <option value="">Select Follower</option>
                                    {staffData.map((item, i) =>
                                        <option value={item?._id}>{item?.name}</option>
                                    )}
                                </select>
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
                        <div className="form-group position-relative">
                            <label htmlFor="taskDescription">
                                Task Description <span className="required">*</span>
                            </label>
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

                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                name='attach_files'
                                value={initialValues?.attach_files}
                                onChange={handleFileUpload} // Define this function to handle file uploads
                            />

                            {/* Icon buttons */}
                            <div
                                className="icon-group position-absolute"
                                style={{
                                    bottom: '10px',
                                    right: '10px',
                                    display: 'flex',
                                    gap: '8px',
                                    alignItems: 'center',
                                }}
                            >
                                <i
                                    className="bi bi-link cursor-pointer"
                                    onClick={() => document.getElementById('fileInput').click()}
                                    title="Attach a link"
                                    style={{ fontSize: '1.2em' }}
                                ></i>
                                <i
                                    className="bi bi-image cursor-pointer"
                                    onClick={() => document.getElementById('fileInput').click()}
                                    title="Attach an image"
                                    style={{ fontSize: '1.2em' }}
                                ></i>
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

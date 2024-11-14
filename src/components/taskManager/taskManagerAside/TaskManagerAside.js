import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import CreateTask from '../taskComment/CreateTask';
import { addTaskType, getAllAssign } from '../../../api/login/Login';
import { toast } from 'react-toastify';

function TaskManagerAside() {
    const [activeKey, setActiveKey] = useState("Important");
    
    const [show, setShow] = useState(false);
    const [initialValues, setInitialValues] = useState(
        {
            task_name: "",
            public: false,
            billable: false,
            attach_files: "",
            subject: "",
            hourly_rate: "",
            start_date_time: "",
            complition_date_time: "",
            end_date_time: "",
            expect_due_date_time: "",
            priority: { type: "", ref: 'priority' },
            repeat_every: { type: String, enum: ["days", "week", "month", "year"] },
            repeated_no: null,
            assignees: [{ type: [], ref: 'staff' }],
            followers: { type: "", ref: 'staff' },
            tags: [""],
            task_description: "",
            total_cycle: null,
            user_id: { type: "", ref: "user" },
        }
    );
    const [expandedItems, setExpandedItems] = useState({});

    const handleCreateTask = () => setShow(!show);
    const toastSuccessMessage = (message) => toast .success(message, { position: "top-right" });
    const toastErrorMessage = (message) => toast.error(message, { position: "top-right" });
    const linkStyle = {
        fontSize: "16px",
        fontWeight: 700,
        color: "#000",
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: "#fff",
        backgroundColor: "#007bff",
    };

    const navLinksData = [
        { label: "Important", icon: "fa-sharp fa-regular fa-star", route: "" },
        { label: "Reminders", icon: "fa-sharp fa-regular fa-clock", route: "design" },
        { label: "Mentions", icon: "fa-sharp fa-solid fa-at", route: "mentions" },
        {
            label: "Task For me", icon: "fa-sharp fa-solid fa-clipboard-list", route: "task-for-me", subItems: [
                { label: "Active", count: 1 }, { label: "Archived", count: 0 }
            ]
        },
        {
            label: "Task By me", icon: "fa-sharp fa-solid fa-clipboard", route: "task-by-me", subItems: [
                { label: "Active", count: 1 }, { label: "Archived", count: 0 }
            ]
        },
        {
            label: "My Request", icon: "fa-sharp fa-regular fa-circle-check", route: "my-request", subItems: [
                { label: "Pending Requests", count: 1 }, { label: "Draft Requests", count: 0 },
                { label: "Archived Requests", count: 0 }, { label: "Immediate", count: 0 }
            ]
        },
        {
            label: "My Approvals", icon: "fa-sharp fa-solid fa-circle-check fa-fade", route: "my-approvals", subItems: [
                { label: "All Approvals", count: 0 }, { label: "Upcoming", count: 0 },
                { label: "Immediate", count: 0 }
            ]
        },
        { label: "My Comments", icon: "fa-solid fa-comments fa-bounce", route: "my-comments" }
    ];

    

    
    const handleNavClick = (label) => {
        setActiveKey(label);
        setExpandedItems((prevExpanded) => ({
            ...prevExpanded,
            [label]: !prevExpanded[label] // Toggle the expanded state for the clicked label
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
    const formSubmit = async (e) => {
        e.preventDefault()


        try {
            if (!initialValues._id) {
                const res = await addTaskType(initialValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Template Added Successfully");
                    // Reset form values, keeping module_id if needed
                    setInitialValues({
                        task_name: "",
                        public: false,
                        billable: false,
                        attach_files: "",
                        subject: "",
                        hourly_rate: "",
                        start_date_time: "",
                        complition_date_time: "",
                        end_date_time: "",
                        expect_due_date_time: "",
                        priority: { type: "", ref: 'priority' },
                        repeat_every: { type: String, enum: ["days", "week", "month", "year"] },
                        repeated_no: null,
                        assignees: [{ type: [], ref: 'staff' }],
                        followers: { type: "", ref: 'staff' },
                        tags: [""],
                        task_description: "",
                        total_cycle: null,
                        user_id: { type: "", ref: "user" },
                    });
                    // getListData(page);
                } else {
                    toastErrorMessage("Failed to Add Template");
                }
            } else {
                // const res = await updateOrganisationSettingsMdlsttingTemp(initialValues._id, initialValues);
                // if (res?.statusCode === "200") {
                //     toastSuccessMessage("Template Updated Successfully");
                //     getListData(page);
                //     setShow(false);
                // } else {
                //     toastErrorMessage("Failed to Update Template");
                // }
            }
        } catch (error) {
            toastErrorMessage("Error processing the form.");
        }

    }

    return (
        <>
            <div className='d-flex flex-column h-100'>
                {/* Dropdown Button Group */}
                <Dropdown as={ButtonGroup} className="create-task-dropdown">
                    <Button variant="light" style={{ color: "red", borderColor: "red" }}>
                        <span>
                            <i className="fa-sharp fa-solid fa-pen fa-beat mr-3"></i>
                        </span>
                        <span style={{ fontWeight: "bold" }} onClick={handleCreateTask}>Create New Task</span>
                    </Button>
                    <Dropdown.Toggle
                        split
                        variant="light"
                        style={{ color: "red", borderColor: "red", marginLeft: "-1px" }}
                        id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Task Option 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Task Option 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Task Option 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Scrollable Nav Container */}
                <div className='flex-grow-1' style={{ overflowY: "auto", scrollbarColor: "rgb(33 37 41)" }}>
                    <Nav
                        variant="pills"
                        className="flex-column mb-3 h-100"
                    >
                        {navLinksData.map((link, index) => (
                            <React.Fragment key={index}>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to={link.subItems ? "" : link.route}
                                        style={activeKey === link.label ? activeLinkStyle : linkStyle}
                                        className="my-2 border"
                                        onClick={() => handleNavClick(link.label)}
                                    >
                                        <span>
                                            <i className={link.icon}></i>
                                        </span>
                                        &nbsp;
                                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                            {link.label}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                {link.subItems && expandedItems[link.label] && (
                                    <div className="ml-3 pl-3 border-left">
                                        {link.subItems.map((subItem, subIndex) => (
                                            <Nav.Item key={subIndex} className="my-1">
                                                <Nav.Link
                                                    style={{
                                                        ...linkStyle,
                                                        fontSize: "14px",
                                                        fontWeight: "normal",
                                                        color: "#333",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    }}
                                                    disabled
                                                >
                                                    <span>{subItem.label}</span>
                                                    <span className="float-end">{subItem.count}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </Nav>
                </div>
            </div>
            <CreateTask
                placement="end"
                setShow={setShow}
                show={show}
                handleCreateTask={handleCreateTask}
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                handleChange={handleChange}
                formSubmit={formSubmit}
            />
        </>
    );
}

export default TaskManagerAside;

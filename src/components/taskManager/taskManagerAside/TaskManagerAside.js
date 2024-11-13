import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

function TaskManagerAside() {
    const [activeKey, setActiveKey] = useState("Important");

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
        {
            "label": "Important",
            "icon": "fa-sharp fa-regular fa-star",
            "route": ""
        },
        {
            "label": "Reminders",
            "icon": "fa-sharp fa-regular fa-clock",
            "route": "design"
        },
        {
            "label": "Mentions",
            "icon": "fa-sharp fa-solid fa-at",
            "route": "mentions"
        },
        {
            "label": "Task For me",
            "icon": "fa-sharp fa-solid fa-clipboard-list",
            "route": "task-for-me"
        },
        {
            "label": "Task By me",
            "icon": "fa-sharp fa-solid fa-clipboard",
            "route": "task-by-me"
        },
        {
            "label": "My Request",
            "icon": "fa-sharp fa-regular fa-circle-check",
            "route": "my-request"
        },
        {
            "label": "My Approvals",
            "icon": "fa-sharp fa-solid fa-circle-check fa-fade",
            "route": "my-approvals"
        },
        {
            "label": "My Comments",
            "icon": "fa-solid fa-comments fa-bounce",
            "route": "my-comments"
        }
    ]

    return (
        <>
            <Dropdown as={ButtonGroup} className="create-task-dropdown">
                <Button variant="light" style={{ color: "red", borderColor: "red" }}>
                    <span>
                        <i className="fa-sharp fa-solid fa-pen fa-beat mr-3"></i>
                    </span>
                    <span style={{ fontWeight: "bold" }}>Create New Task</span>
                </Button>
                <Dropdown.Toggle
                    split
                    variant="light"
                    style={{ color: "red", borderColor: "red", marginLeft: "-1px" }} // Adjusts gap
                    id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Task Option 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Task Option 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Task Option 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Nav
                variant="pills"
                className="flex-column mb-3"
                style={{ height: "70vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}
            >
                {navLinksData.map((link, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link
                            as={Link}
                            to={link.route}
                            style={activeKey === link.label ? activeLinkStyle : linkStyle}
                            className="my-2 border"
                            onClick={() => setActiveKey(link.label)}
                        >
                            <span>
                                <i className={link.icon}></i>
                            </span>
                            &nbsp;
                            <span>{link.label}</span>
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </>
    );
}

export default TaskManagerAside;

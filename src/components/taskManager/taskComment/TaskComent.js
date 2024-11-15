import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Badge, Button, Form } from 'react-bootstrap';
import ReminderLater from './remainder/ReminderLater';
import { getCommentTaskById } from '../../../api/login/Login';

function TaskComent({ mnualData }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [taskDetails, setTaskDetails] = useState()
    const handleTaskDetails = async (id) => {
        try {
            const resp = await getCommentTaskById(id)
            setTaskDetails(resp?.data)
            handleTaskDetails(resp?.data[0]._id)
        } catch (error) {
            console.log("Network Api Error")
        }
    }
    return (
        <>
            <div className='col-xl-4 h-100'>
                <div className='card ' style={{ overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className=''>
                                <h6>Important</h6>
                                <small className=''>
                                    0 , Task &nbsp; 0,unread
                                </small>

                            </div>
                        </div>

                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='border d-flex align-items-center  w-100'>
                                    <span>
                                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <div className=''>
                                        <input
                                            type='search'
                                            placeholder='search'
                                            className='px-2 py-0 w-100 border-0 w-100'
                                            name='name'

                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <button
                                        type="submit"
                                        style={{ border: "none", backgroundColor: "inherit", color: "#000", padding: "0 4px" }}
                                    >
                                        <i class="fa-sharp fa-solid fa-filter"></i>
                                    </button>
                                </div>
                            </div>
                            <div className=''>
                                <small>
                                    <b>
                                        No Task
                                    </b>
                                </small>
                            </div>
                            {mnualData?.map((data, i) => {
                                return <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#f8f9fc', // light gray background
                                        padding: '10px 15px',
                                        borderRadius: '8px',
                                        margin: "6px 0",
                                        fontSize: '14px', // font size to match the example
                                        color: '#6c757d'  // muted gray text color
                                    }}
                                    key={i}
                                    onClick={() => handleTaskDetails(data?._id)}

                                >
                                    <div>
                                        <div style={{ fontWeight: '500', color: '#000' }}>
                                            {data?.createdBy?.name ? `${data?.createdBy?.name} commented on a task` : ""}
                                        </div>

                                        <div style={{ color: '#6c757d', fontSize: '12px' }}>{data?.task_description}</div>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '12px', color: '#6c757d' }}>
                                            {data?.createdAt
                                                ? new Date(data.createdAt).toLocaleString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: true,
                                                })
                                                : ''}
                                        </div>

                                        <Badge style={{ backgroundColor: '#f0ad4e', color: '#fff', fontSize: '12px', fontWeight: '500' }}>
                                            Delayed
                                        </Badge>
                                    </div>
                                </div>
                            })}

                        </div>

                        <div className='my-3'>

                        </div>

                    </div>
                </div>
            </div>

            <div className='col-xl-5 h-100'>
                <div className='card' >
                    <div
                        className=""
                        style={{
                            overflowY: "scroll",
                            scrollbarColor: "rgb(33 37 41)",
                            display: "flex",
                            flexDirection: "column", // Ensures content inside this div is stacked vertically
                        }}
                    >
                        <div
                            style={{
                                padding: '20px',
                                maxWidth: '600px',
                                margin: 'auto',
                                fontFamily: 'Arial, sans-serif',
                                flexGrow: 1,
                            }}
                        >
                            {/* Header Buttons */}
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <Button variant="outline-secondary" size="sm" className="mr-2">Mark as Done</Button>
                                    <Button variant="outline-secondary" size="sm" onClick={() => setModalShow(true)}>Remind Later</Button>
                                    <ReminderLater
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                                <Button variant="link" size="sm">
                                    <i className="fas fa-ellipsis-h"></i>
                                </Button>
                            </div>

                            {/* Task Information */}


                            <>
                                {taskDetails?.createdBy && (
                                    <div
                                        style={{
                                            backgroundColor: '#f8f9fc',
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            color: '#6c757d',
                                            fontSize: '14px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {`Task created for you by ${taskDetails?.createdBy?.name || "Unknown"}`}
                                    </div>
                                )}

                                <div
                                    className="d-flex justify-content-between align-items-center mb-3"
                                    style={{ fontSize: '14px' }}
                                >
                                    {taskDetails?.assignees && taskDetails.assignees?.length > 0 ? (
                                        <span>
                                            Assignee:{" "}
                                            {taskDetails?.assignees?.map((assignee, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        marginRight: "5px",
                                                    }}
                                                >
                                                    <Badge
                                                        bg="info"
                                                        style={{
                                                            borderRadius: "50%",
                                                            padding: "5px 10px",
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        {assignee.name.charAt(0).toUpperCase()}
                                                    </Badge>
                                                    {assignee.name}
                                                </span>
                                            ))}
                                        </span>
                                    ) : (
                                        <span>No Assignees Found</span>
                                    )}

                                    <span>
                                        Due Date:{" "}
                                        {taskDetails?.expect_due_date_time
                                            ? new Intl.DateTimeFormat("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            }).format(new Date(taskDetails.expect_due_date_time))
                                            : "Not Specified"}
                                    </span>

                                </div>



                                {/* Comments */}
                                <div className="mb-3">
                                    <div className="d-flex align-items-start mb-2">
                                        <Badge bg="info" style={{ borderRadius: '50%', padding: '5px 10px', marginRight: '10px' }}>A</Badge>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Abdul Quadir</div>
                                            <div style={{ fontSize: '12px', color: '#6c757d' }}>5 Nov 2024, 04:46 PM</div>
                                            <div style={{ fontSize: '14px', marginTop: '5px' }}>See the software</div>
                                            <div style={{ fontSize: '12px', color: '#007bff', cursor: 'pointer' }}>1 Reply</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <Badge bg="info" style={{ borderRadius: '50%', padding: '5px 10px', marginRight: '10px' }}>A</Badge>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Abdul Quadir</div>
                                            <div style={{ fontSize: '12px', color: '#6c757d' }}>5 Nov 2024, 04:48 PM</div>
                                            {taskDetails?.task_description ?

                                                <div style={{ fontSize: '14px', marginTop: '5px' }}>
                                                    <small>*Task Description*</small>
                                                    <p>{taskDetails?.task_description}</p>
                                                    {/* Hi, Dear <Badge bg="light" text="dark" style={{ borderRadius: '4px', padding: '2px 5px' }}>Imran khan</Badge>, sir, I’m seeing the software. Soon I’ll revert to you.
                                                Right now I created a task, so it’s listing in Task By Me tab, but not listing in Tasks for me tab? */}
                                                </div> : ""}
                                        </div>
                                    </div>
                                </div>
                            </>



                            {/* Reply Input */}
                            <Form.Group controlId="replyInput" style={{ marginTop: 'auto' }}>
                                <Form.Control
                                    type="text"
                                    placeholder="Reply or mention others with @..."
                                    style={{ fontSize: '14px' }}
                                />
                            </Form.Group>
                        </div>

                        <div className='accor-btn'></div>
                    </div>

                    {/* <button className='btn btn-sm btn-primary' type='button' >
                        Save
                    </button> */}
                </div>
                <ToastContainer className={"text-center"} />
            </div>


        </>
    )
}

export default TaskComent
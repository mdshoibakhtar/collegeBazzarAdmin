import React from 'react'
import { ToastContainer } from 'react-toastify'

function TaskComent() {
    return (
        <>
            <div className='col-xl-4'>
                <div className='card ' style={{ height: "77vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
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
                        </div>

                        <div className='my-3'>

                        </div>

                    </div>
                </div>
            </div>

            <div className='col-xl-5'>
                <div className='card' >
                    <div className='' style={{ height: "67vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}>
                        <div className='border-bottom'>
                            <div className=''>
                                <div className=''>

                                </div>
                            </div>
                        </div>

                        <div className='accor-btn '>

                        </div>
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
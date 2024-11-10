import { Pagination, Popconfirm, Tabs } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function CallStatusMasterList({ data = [], totalCount, page, count, onChangeVal, confirm, cancel }) {
    const [activeTab, setActiveTab] = useState("all");

    // Fallback data if none is provided
    const mockData = [
        {
            _id: '1',
            job_id: 'JOB001',
            project_name: 'Abaris Office Interior Work',
            client_name: 'Client A',
            business_category: 'Category 1',
            state: 'State 1',
            city: 'City A',
            project_stage: 'Planning',
            project_estimate: '$10000',
            recce_due_date: '2024-10-01',
            created_on: '2024-09-15',
            execution_due_date: '2024-12-01',
            actual_completion_date: '2024-11-10',
            created_by: 'Admin',
            recce_completion_date: '2024-09-30',
        },
        {
            _id: '1',
            job_id: 'JOB001',
            project_name: 'Abaris Office Interior Work',
            client_name: 'Client A',
            business_category: 'Category 1',
            state: 'State 1',
            city: 'City A',
            project_stage: 'Planning',
            project_estimate: '$10000',
            recce_due_date: '2024-10-01',
            created_on: '2024-09-15',
            execution_due_date: '2024-12-01',
            actual_completion_date: '2024-11-10',
            created_by: 'Admin',
            recce_completion_date: '2024-09-30',
        },
        // Additional mock data...
    ];

    const tableData = data.length ? data : mockData;

    // Filter data based on active tab
    const filteredData = tableData.filter((item) => {
        if (activeTab === "all") return true;
        if (activeTab === "created") return item.project_stage === "Project Created";
        if (activeTab === "reccePending") return item.project_stage === "Recce Pending";
        if (activeTab === "designPending") return item.project_stage === "Design Pending";
        if (activeTab === "designFreeze") return item.project_stage === "Design Freeze";
        if (activeTab === "scopeApprovalAwaited") return item.project_stage === "Scope Approval Awaited";
        if (activeTab === "partialScopeApproved") return item.project_stage === "Partial Scope Approved";
        if (activeTab === "fullScopeApproved") return item.project_stage === "Full Scope Approved";
        if (activeTab === "executionInProgress") return item.project_stage === "Execution In Progress";
        if (activeTab === "executionCompleted") return item.project_stage === "Execution Completed";
        if (activeTab === "hold") return item.project_stage === "Hold";
        if (activeTab === "lost") return item.project_stage === "Lost";
        if (activeTab === "rectification") return item.project_stage === "Rectification";
        if (activeTab === "archived") return item.project_stage === "Archived";
        return true;
    });

    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <Tabs
                                    defaultActiveKey="all"
                                    onChange={setActiveTab}
                                    style={{ marginBottom: 16 }}
                                >
                                    <Tabs.TabPane tab="All Projects" key="all" />
                                    <Tabs.TabPane tab="Project Created" key="created" />
                                    <Tabs.TabPane tab="Recce Pending" key="reccePending" />
                                    <Tabs.TabPane tab="Design Pending" key="designPending" />
                                    <Tabs.TabPane tab="Design Freeze" key="designFreeze" />
                                    <Tabs.TabPane tab="Scope Approval Awaited" key="scopeApprovalAwaited" />
                                    <Tabs.TabPane tab="Partial Scope Approved" key="partialScopeApproved" />
                                    <Tabs.TabPane tab="Full Scope Approved" key="fullScopeApproved" />
                                    <Tabs.TabPane tab="Execution In Progress" key="executionInProgress" />
                                    <Tabs.TabPane tab="Execution Completed" key="executionCompleted" />
                                    <Tabs.TabPane tab="Hold" key="hold" />
                                    <Tabs.TabPane tab="Lost" key="lost" />
                                    <Tabs.TabPane tab="Rectification" key="rectification" />
                                    <Tabs.TabPane tab="Archived" key="archived" />
                                </Tabs>
                                <div className="table-responsive active-projects style-1" style={{ overflowX: 'auto' }}>
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0" style={{padding:"10px"}}>My Projects List</h4>
                                        <div>
                                            <Link
                                                className="btn btn-primary btn-sm"
                                                to="/add-projects"
                                                role="button"
                                                aria-controls="offcanvasExample"
                                            >
                                                + ADD Project
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button
                                                className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                                                tabIndex={0}
                                                type="button"
                                            >
                                                <span>
                                                    <i className="fa-solid fa-file-excel" /> Export Report
                                                </span>
                                            </button>
                                        </div>
                                        <table
                                            className="table dataTable no-footer"
                                            role="grid"
                                            aria-describedby="projects-table_info"
                                        >
                                            <thead>
                                                <tr role="row">
                                                    <th>S.No</th>
                                                    <th>Job Id</th>
                                                    <th>Project Name</th>
                                                    <th>Client Name</th>
                                                    <th>Business Category</th>
                                                    <th>State</th>
                                                    <th>City</th>
                                                    <th>Project Stage</th>
                                                    <th>Project Estimate</th>
                                                    <th>Recce Due Date</th>
                                                    <th>Created On</th>
                                                    <th>Execution Due Date</th>
                                                    <th>Actual Completion Date</th>
                                                    <th>Created By</th>
                                                    <th>Recce Completion Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData.map((item, i) => (
                                                    <tr key={item._id} role="row">
                                                        <td>{(i + 1) + (page * count)}</td>
                                                        <td>{item.job_id}</td>
                                                        <td><b><Link to={`/projects/${item._id}`}>{item.project_name}</Link></b></td>
                                                        <td>{item.client_name}</td>
                                                        <td>{item.business_category}</td>
                                                        <td>{item.state}</td>
                                                        <td>{item.city}</td>
                                                        <td>{item.project_stage}</td>
                                                        <td>{item.project_estimate}</td>
                                                        <td>{item.recce_due_date}</td>
                                                        <td>{item.created_on}</td>
                                                        <td>{item.execution_due_date}</td>
                                                        <td>{item.actual_completion_date}</td>
                                                        <td>{item.created_by}</td>
                                                        <td>{item.recce_completion_date}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link
                                                                    to={`#`}
                                                                    style={{ width: "80px" }}
                                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                                >
                                                                    Archive
                                                                </Link>
                                                                <Link
                                                                    to={`#`}
                                                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                                                >
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="dataTables_info" role="status" aria-live="polite">
                                    Total {totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers">
                                    <Pagination
                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default CallStatusMasterList;

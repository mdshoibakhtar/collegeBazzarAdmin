import React, { useState, useEffect } from 'react';
import { Input, Button, DatePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tab, Tabs } from "react-bootstrap";
import { getVoucherTypeData, postAddBookCode, updateAddBookCodeById } from '../../../../../api/login/Login';
import { MyOrganisation } from './MyOrganisation';
import { OtherOrganisation } from './OtherOrganisation';

function ProjectDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const [clientOptions, setClientOptions] = useState([]);
    const [formData, setFormData] = useState({
        projectName: 'Abaris Office Interior Work',
        client: 'Abaris Client',
        businessCategory: 'Commercial',
        projectAddress: '98B, II Floor, NFC',
        state: 'Delhi',
        city: 'New Delhi',
        projectScope: 'Design and Build',
        projectEstimate: '1000000',
        projectArea: '500',
        clientPOCName: '',
        clientPOCNumber: '',
        recceDueDate: null,
        expectedStartDate: null,
        executionDueDate: null,
        projectUsers: [{ user: '', role: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (name, date) => {
        setFormData({ ...formData, [name]: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.projectName || !formData.client || !formData.projectAddress || !formData.projectEstimate) {
            toast.error("All required fields must be filled");
            return;
        }

        try {
            const response = params?.id
                ? await updateAddBookCodeById(params.id, formData)
                : await postAddBookCode(formData);

            if (response?.statusCode === "200") {
                toast.success(params?.id ? "Updated successfully" : "Added successfully");
                navigate(`/project-list`);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to submit form");
        }
    };

    useEffect(() => {
        const fetchOptions = async () => {
            const voucherData = await getVoucherTypeData('', 0, 100, '', '');
            const options = voucherData.data.voucher.map((item) => ({
                value: item?.accLedgerId?.name,
                label: item?.voucherType?.name,
            }));
            setClientOptions(options);
        };

        fetchOptions();
    }, []);

    const handleAddUser = () => {
        setFormData({
            ...formData,
            projectUsers: [...formData.projectUsers, { user: '', role: '' }]
        });
    };

    const handleRemoveUser = (index) => {
        const updatedUsers = formData.projectUsers.filter((_, i) => i !== index);
        setFormData({ ...formData, projectUsers: updatedUsers });
    };

    const fakeUsers = [
        { id: '1', name: 'John Doe', label: 'John Doe', value: 'John Doe' },
        { id: '2', name: 'Jane Smith', label: 'Jane Smith', value: 'Jane Smith' },
        { id: '3', name: 'David Johnson', label: 'David Johnson', value: 'David Johnson' }
    ];

    const fakeRoles = [
        { id: '1', role: 'Manager', label: 'Manager', value: 'Manager' },
        { id: '2', role: 'Developer', label: 'Developer', value: 'Developer' },
        { id: '3', role: 'Designer', label: 'Designer', value: 'Designer' }
    ];

    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="row">
                    <div className="card-body p-0 col-8">
                        <div className="table-responsive active-projects style-1">
                            <form onSubmit={handleSubmit} style={{ padding: "10px 0" }}>
                                <div className="row">
                                    {/* Basic Details */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Basic Details</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Name *</label>
                                        <Input
                                            name="projectName"
                                            onChange={handleChange}
                                            value={formData.projectName}
                                            placeholder="Enter Project Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Select Client *</label>
                                        <select
                                            name="client"
                                            onChange={(e) => handleSelectChange("client", e.target.value)}
                                            value={formData.client}
                                            className="form-control"
                                        >
                                            <option value="">Select Client</option>
                                            <option value="Playnif">Playnif</option>
                                            <option value="Expert Eyr">Expert Eyr</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Business Category</label>
                                        <Input
                                            name="businessCategory"
                                            onChange={handleChange}
                                            value={formData.businessCategory}
                                            placeholder="Enter Business Category"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address *</label>
                                        <Input
                                            name="projectAddress"
                                            onChange={handleChange}
                                            value={formData.projectAddress}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>State *</label>
                                        <select
                                            name="state"
                                            onChange={(e) => handleSelectChange("state", e.target.value)}
                                            value={formData.state}
                                            className="form-control"
                                        >
                                            <option value="">Select State</option>
                                            <option value="Bihar">Bihar</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>City *</label>
                                        <select
                                            name="city"
                                            onChange={(e) => handleSelectChange("city", e.target.value)}
                                            value={formData.city}
                                            className="form-control"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Gaya">Gaya</option>
                                        </select>
                                    </div>

                                    {/* Project Scope */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Project Scope</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Scope *</label>
                                        <select
                                            name="projectScope"
                                            onChange={(e) => handleSelectChange("projectScope", e.target.value)}
                                            value={formData.projectScope}
                                            className="form-control"
                                        >
                                            <option value="">Enter Project Scope</option>
                                            <option value="Developing">Developing</option>
                                            <option value="UI">UI</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Estimate (in INR) *</label>
                                        <Input
                                            type="number"
                                            name="projectEstimate"
                                            onChange={handleChange}
                                            value={formData.projectEstimate}
                                            placeholder="Enter Project Estimate"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Area (in SQFT)</label>
                                        <Input
                                            type="number"
                                            name="projectArea"
                                            onChange={handleChange}
                                            value={formData.projectArea}
                                            placeholder="Enter Project Area"
                                        />
                                    </div>

                                    {/* Client Point of Contact */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Client Point of Contact</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Name</label>
                                        <Input
                                            name="clientPOCName"
                                            onChange={handleChange}
                                            value={formData.clientPOCName}
                                            placeholder="Enter Client POC Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Number</label>
                                        <Input
                                            type="tel"
                                            name="clientPOCNumber"
                                            onChange={handleChange}
                                            value={formData.clientPOCNumber}
                                            placeholder="Enter Client POC Number"
                                        />
                                    </div>

                                    {/* Due Dates */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Due Dates</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Recce Due Date</label>
                                        <DatePicker
                                            name="recceDueDate"
                                            onChange={(date) => handleDateChange("recceDueDate", date)}
                                            value={formData.recceDueDate}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Expected Start Date</label>
                                        <DatePicker
                                            name="expectedStartDate"
                                            onChange={(date) => handleDateChange("expectedStartDate", date)}
                                            value={formData.expectedStartDate}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Execution Due Date</label>
                                        <DatePicker
                                            name="executionDueDate"
                                            onChange={(date) => handleDateChange("executionDueDate", date)}
                                            value={formData.executionDueDate}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* Project Users */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Project Users</h5>

                                    {formData.projectUsers.map((user, index) => (
                                        <div key={index} className="row mb-3">
                                            <div className='col-xl-5'>
                                                <label>User</label>
                                                <select
                                                    name={`projectUsers[${index}].user`}
                                                    value={user.user}
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.projectUsers];
                                                        newUsers[index].user = e.target.value;
                                                        setFormData({ ...formData, projectUsers: newUsers });
                                                    }}
                                                    className="form-control"
                                                >
                                                    <option value="">Select User</option>
                                                    {fakeUsers.map((u) => (
                                                        <option key={u.id} value={u.value}>
                                                            {u.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='col-xl-5'>
                                                <label>Role</label>
                                                <select
                                                    name={`projectUsers[${index}].role`}
                                                    value={user.role}
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.projectUsers];
                                                        newUsers[index].role = e.target.value;
                                                        setFormData({ ...formData, projectUsers: newUsers });
                                                    }}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Role</option>
                                                    {fakeRoles.map((r) => (
                                                        <option key={r.id} value={r.value}>
                                                            {r.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {formData.projectUsers.length > 1 && (
                                                <div>
                                                    <button
                                                        type="button"
                                                        style={{ width: "80px", height: "40px", margin: "10px 0" }}
                                                        onClick={() => handleRemoveUser(index)}
                                                        className="btn btn-danger"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" style={{ width: "80px" }} onClick={handleAddUser} className="btn btn-success">
                                        Add User
                                    </button>
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Documents and attachments</h5>
                                    <div className="col-xl-6 mb-3">
                                        <input className='form-control' type='file' />
                                    </div>



                                    {/* Submit Button */}
                                    <div className="col-12 mt-3">
                                        <Button type="submit" className="btn btn-primary">
                                            {params?.id ? "Update" : "Add"} Project
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-4' style={{marginTop:"16px"}}>
                        <Tabs
                            defaultActiveKey="My Organisation"
                            id="uncontrolled-tab-example"
                            className="mb-3 cusnav"
                            style={{ padding: "5px" }}

                        >
                            <Tab eventKey="My Organisation" title="My Organisation">
                                <MyOrganisation/>
                            </Tab>
                            <Tab eventKey="Other Organisation" title="Other Organisation">
                                <OtherOrganisation/>
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;

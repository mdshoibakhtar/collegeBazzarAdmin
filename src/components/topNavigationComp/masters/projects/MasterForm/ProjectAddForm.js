import React, { useState, useEffect } from 'react';
import { Input, Button, DatePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import {  cityAddCollageSelectList, countryList, getAccProjectBusinessCategoryByPage, getAllAssign, postAddBookCode, StateAddCollageSelectList, updateAddBookCodeById } from '../../../../../api/login/Login';
import Loadar from '../../../../../common/loader/Loader'
function ProjectAddForm() {
    const navigate = useNavigate();
    const params = useParams();
    const [formData, setFormData] = useState({
        project_name: '',
        client: '',
        business_category: '',
        prj_address_line1: '',
        prj_address_line2: '',
        country: '',
        state: '',
        city: '',
        zip_code: '',
        currency: '',
        tax_type: '',
        time_zone: '',
        prj_scope: '',
        prj_estimate: '',
        prj_area_in_sqft: '',
        client_poc_name: '',
        client_poc_nmber: '',
        recce_due_date: null,
        expected_start_date: null,
        executation_due_date_assign_prj_user: null,
        projectUsers: [{ assign_prj_user: '', user_role: '' }]
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
        console.log(formData);
        return
        // Basic validation
        if (!formData.project_name || !formData.client || !formData.prj_address_line1 || !formData.prj_estimate) {
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

    const [masterStore, setMasterStore] = useState({
        business_category: [],
        client: [],
        country: [],
        state: [],
        city: [],
        zip_code: [],
        currency: [],
        tax_type: [],
        prj_scope: [],
        role: [],
        user: [],
    })

    const getAllMaster = async () => {
        const businescat = await getAccProjectBusinessCategoryByPage(0, 100)
        const clients = await getAllAssign(0, 100)
        const countrys = await countryList(0, 100)

        const obj = {
            business_category: businescat.data,
            client: clients.data,
            country: countrys.data,
            state: [],
            city: [],
            zip_code: [],
            currency: [],
            tax_type: [],
            prj_scope: [],
            role: [],
            user: [],
        }
        setMasterStore(obj);
    };

    useEffect(() => {
        getAllMaster();
    }, []);

    const [loade , setLoad] = useState(false)
    const handleChangeLocation = async (str, id) => {
        setLoad(true)
        if (str == 'country') {
            const stat = await StateAddCollageSelectList(id)
            const obj = {...masterStore , state:stat.data}
            setMasterStore(obj);
        }
        if (str == 'state') {
            const res = await cityAddCollageSelectList(id)
            const obj = {...masterStore , city:res.data}
            setMasterStore(obj);
        }
        handleDateChange(str,id)
        setLoad(false)
    }



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
            <Breadcrumbs breadCrumbsTitle={{ title_2: "Add Project" }} />
            <div style={{ margin: "14px" }}>
                {loade && <Loadar/>}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0" style={{ padding: "10px" }}>
                                    {params?.id ? "Update" : "Add"} Project
                                </h4>
                            </div>
                            <form onSubmit={handleSubmit} style={{ padding: "10px 0" }}>
                                <div className="row">
                                    {/* Basic Details */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Basic Details</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Name *</label>
                                        <Input
                                            name="project_name"
                                            onChange={handleChange}
                                            value={formData.project_name}
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
                                            {masterStore.client?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Business Category</label>

                                        <select
                                            name="business_category"
                                            onChange={(e) => handleSelectChange("business_category", e.target.value)}
                                            value={formData.business_category}
                                            className="form-control"
                                        >
                                            <option value="">Select business_category</option>
                                            {masterStore.business_category?.map((item) => {
                                                return <option value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 1 *</label>
                                        <Input
                                            name="prj_address_line1"
                                            onChange={handleChange}
                                            value={formData.prj_address_line1}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Address Line 2 *</label>
                                        <Input
                                            name="prj_address_line2"
                                            onChange={handleChange}
                                            value={formData.prj_address_line2}
                                            placeholder="Enter Project Address"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Country *</label>
                                        <select
                                            name="country"
                                            onChange={(e) => handleChangeLocation("country", e.target.value)}
                                            value={formData.country}
                                            className="form-control"
                                        >
                                            <option value="">Select country</option>
                                            {masterStore.country?.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>State *</label>
                                        <select
                                            name="state"
                                            onChange={(e) => handleChangeLocation("state", e.target.value)}
                                            value={formData.state}
                                            className="form-control"
                                        >
                                            <option value="">Select State</option>
                                            {masterStore.state?.map((item)=>{
                                                return <option value={item._id}>{item.name}</option>
                                            })}
                                            
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>City *</label>
                                        <select
                                            name="city"
                                            onChange={(e) => handleChangeLocation("city", e.target.value)}
                                            value={formData.city}
                                            className="form-control"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Gaya">Gaya</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Zip Code *</label>
                                        <select
                                            name="zip_code"
                                            onChange={(e) => handleSelectChange("zip_code", e.target.value)}
                                            value={formData.zip_code}
                                            className="form-control"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Gaya">Gaya</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Currency *</label>
                                        <select
                                            name="currency"
                                            onChange={(e) => handleSelectChange("currency", e.target.value)}
                                            value={formData.currency}
                                            className="form-control"
                                        >
                                            <option value="">Select currency</option>
                                            <option value="Gaya">Gaya</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Tax Type *</label>
                                        <select
                                            name="tax_type"
                                            onChange={(e) => handleSelectChange("tax_type", e.target.value)}
                                            value={formData.tax_type}
                                            className="form-control"
                                        >
                                            <option value="">Select tax_type</option>
                                            <option value="Gaya">Gaya</option>
                                        </select>
                                    </div>

                                    {/* Project Scope */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Project Scope</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Scope *</label>
                                        <select
                                            name="prj_scope"
                                            onChange={(e) => handleSelectChange("prj_scope", e.target.value)}
                                            value={formData.prj_scope}
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
                                            name="prj_estimate"
                                            onChange={handleChange}
                                            value={formData.prj_estimate}
                                            placeholder="Enter Project Estimate"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Project Area (in SQFT)</label>
                                        <Input
                                            type="number"
                                            name="prj_area_in_sqft"
                                            onChange={handleChange}
                                            value={formData.prj_area_in_sqft}
                                            placeholder="Enter Project Area"
                                        />
                                    </div>

                                    {/* Client Point of Contact */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Client Point of Contact</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Name</label>
                                        <Input
                                            name="client_poc_name"
                                            onChange={handleChange}
                                            value={formData.client_poc_name}
                                            placeholder="Enter Client POC Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Client POC Number</label>
                                        <Input
                                            type="tel"
                                            name="client_poc_nmber"
                                            onChange={handleChange}
                                            value={formData.client_poc_nmber}
                                            placeholder="Enter Client POC Number"
                                        />
                                    </div>

                                    {/* Due Dates */}
                                    <h5 style={{ backgroundColor: "gray", margin: "10px", padding: "10px", color: "#ffff" }}>Due Dates</h5>
                                    <div className="col-xl-6 mb-3">
                                        <label>Time Zone</label>
                                        <input
                                            name="time_zone"
                                            type='time'
                                            onChange={(date) => handleDateChange("time_zone", date)}
                                            value={formData.time_zone}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Recce Due Date</label>
                                        <DatePicker
                                            name="recce_due_date"
                                            onChange={(date) => handleDateChange("recce_due_date", date)}
                                            value={formData.recce_due_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Expected Start Date</label>
                                        <DatePicker
                                            name="expected_start_date"
                                            onChange={(date) => handleDateChange("expected_start_date", date)}
                                            value={formData.expected_start_date}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label>Execution Due Date</label>
                                        <DatePicker
                                            name="executation_due_date_assign_prj_user"
                                            onChange={(date) => handleDateChange("executation_due_date_assign_prj_user", date)}
                                            value={formData.executation_due_date_assign_prj_user}
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
                                                    name={`projectUsers[${index}].assign_prj_user`}
                                                    value={user.assign_prj_user}
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.projectUsers];
                                                        newUsers[index].assign_prj_user = e.target.value;
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
                                                    name={`projectUsers[${index}].user_role`}
                                                    value={user.user_role}
                                                    onChange={(e) => {
                                                        const newUsers = [...formData.projectUsers];
                                                        newUsers[index].user_role = e.target.value;
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
                </div>
            </div>
        </>
    );
}

export default ProjectAddForm;

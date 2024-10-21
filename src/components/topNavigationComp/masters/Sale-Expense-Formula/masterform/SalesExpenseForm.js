import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import {
    getNatureById,
    postNature,
    updateNatureById,
} from '../../../../../api/login/Login';

function SalesExpenseForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: " Sale Expense Formula",
    };

    const [formData, setFormData] = useState({
        name: "",
        acEffect: "",
        type: "",
        addOrDeduct: "",
        taxType: "",
        calculation: "",
        calculationType: "",
        percentage: "",
        calculationBasedOn: "",
        expenseName: "",
        expenseAccount: "",
        columnName: "",
        uniqColumnName: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                const res = await postNature(formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Added");
                    setTimeout(() => navigate(`/nature_master`), 2000);
                }
            } else {
                const res = await updateNatureById(params.id, formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Updated");
                    setTimeout(() => navigate(`/nature_master`), 2000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, { position: "top-right" });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getNatureById(params.id);
                setFormData(response?.data || {});
            }
        };
        fetchData();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Sale Expense Formula
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label> A/C Effect</label>
                                        <select
                                            className="form-select"
                                            name="acEffect"
                                            value={formData.acEffect}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select A/C Effect</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Type</label>
                                        <select
                                            className="form-select"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Tax">Tax</option>
                                            {/* Other options can be added */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Add/Deduct</label>
                                        <select
                                            className="form-select"
                                            name="addOrDeduct"
                                            value={formData.addOrDeduct}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Add/Deduct</option>
                                            <option value="Add">Add</option>
                                            <option value="Deduct">Deduct</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Tax Type</label>
                                        <select
                                            className="form-select"
                                            name="taxType"
                                            value={formData.taxType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Tax Type</option>
                                            {/* Options for Tax Type */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Calculation</label>
                                        <select
                                            className="form-select"
                                            name="calculation"
                                            value={formData.calculation}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Calculation</option>
                                            {/* Options for Calculation */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Calculation Type</label>
                                        <select
                                            className="form-select"
                                            name="calculationType"
                                            value={formData.calculationType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Type</option>
                                            {/* Options for Type */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>@%</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="percentage"
                                            value={formData.percentage}
                                            onChange={handleChange}
                                            placeholder="%"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Calculation Based On</label>
                                        <select
                                            className="form-select"
                                            name="calculationBasedOn"
                                            value={formData.calculationBasedOn}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Calculation Based On</option>
                                            {/* Options for Calculation Based On */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Expense Name</label>
                                        <select
                                            className="form-select"
                                            name="expenseName"
                                            value={formData.expenseName}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Expense Name</option>
                                            {/* Options for Expense Name */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Expense Account</label>
                                        <select
                                            className="form-select"
                                            name="expenseAccount"
                                            value={formData.expenseAccount}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Expense Account</option>
                                            {/* Options for Expense Account */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Column Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="columnName"
                                            value={formData.columnName}
                                            onChange={handleChange}
                                            placeholder="Column Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Uniq Column Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="uniqColumnName"
                                            value={formData.uniqColumnName}
                                            onChange={handleChange}
                                            placeholder="Uniq Column Name"
                                        />
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            {params?.id ? "Update" : "Add"}
                                        </button>
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

export default SalesExpenseForm;

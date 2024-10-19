import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import {
    getNatureById,
    postNature,
    updateNatureById,
} from '../../../../../api/login/Login';

function SalesInvoiceForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Sales Invoice Type",
    };

    const [formData, setFormData] = useState({
        name: "",
        salesAccount: "",
        formName: "",
        taxMaster: "",
        isMultiTax: false,
        fixedAccount: false,
        taxType: "",
        taxCalculation: "",
        rcmOther: "",
        reverseCharge: "",
        exportType: "",
        posType: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                const res = await postNature(formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Invoice Type Successfully Added");
                    setTimeout(() => navigate(`/nature_master`), 2000);
                }
            } else {
                const res = await updateNatureById(params.id, formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Invoice Type Successfully Updated");
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
                                    {params?.id ? "UPDATE" : "ADD"} Sales Invoice Type
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
                                        <label>Sales A/C</label>
                                        <select
                                            className="form-select"
                                            name="salesAccount"
                                            value={formData.salesAccount}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Sales A/C</option>
                                            {/* Options for Sales A/C */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Form Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formName"
                                            value={formData.formName}
                                            onChange={handleChange}
                                            placeholder="Form Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Tax Master</label>
                                        <select
                                            className="form-select"
                                            name="taxMaster"
                                            value={formData.taxMaster}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Tax Master</option>
                                            {/* Options for Tax Master */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Is MultiTax</label>
                                        <select
                                            className="form-select"
                                            name="isMultiTax"
                                            value={formData.isMultiTax ? "true" : "false"}
                                            onChange={handleChange}
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Fixed Account</label>
                                        <select
                                            className="form-select"
                                            name="fixedAccount"
                                            value={formData.fixedAccount ? "true" : "false"}
                                            onChange={handleChange}
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
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
                                        <label>Tax Calculation</label>
                                        <select
                                            className="form-select"
                                            name="taxCalculation"
                                            value={formData.taxCalculation}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Tax Calculation</option>
                                            {/* Options for Tax Calculation */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Rcm/Other</label>
                                        <select
                                            className="form-select"
                                            name="rcmOther"
                                            value={formData.rcmOther}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Rcm/Other</option>
                                            {/* Options for Rcm/Other */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Reverse Charge</label>
                                        <select
                                            className="form-select"
                                            name="reverseCharge"
                                            value={formData.reverseCharge}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Reverse Charge</option>
                                            {/* Options for Reverse Charge */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Export Type</label>
                                        <select
                                            className="form-select"
                                            name="exportType"
                                            value={formData.exportType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Export Type</option>
                                            {/* Options for Export Type */}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>POS Type</label>
                                        <select
                                            className="form-select"
                                            name="posType"
                                            value={formData.posType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select POS Type</option>
                                            {/* Options for POS Type */}
                                        </select>
                                    </div>
                                    <div className="col-xl-2 mb-3">
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

export default SalesInvoiceForm;

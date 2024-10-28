import React, { useState, useEffect } from 'react';
import { voucherMasterAdd, getVoucherById, getvoucherMasterId, voucherMasterUpdate } from '../../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function AddVoucher() {
    const [formData, setFormData] = useState({
        name: "",
        alias: "",
        abbreviation: "",
        methodOfNumber: "",
        advanceConfig: "",
        useEffectiveDateForVoucher: "",
        isOptional: "",
        commonNaration: "",
        narationForEntry: "",
        selected: false,
    });
    const params = useParams();
    const navigate = useNavigate();



    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                try {
                    const response = params.id
                        ? await voucherMasterAdd(formData, params.id) // Update if id exists
                        : await voucherMasterAdd(formData); // Add new voucher
                        toastSuccessMessage(response.data.message || "Voucher Type saved successfully!");
                        if (response?.statusCode == "200") {
                            navigate(`/voucher-type-list`);
                            toastErrorMessage(response?.data?.message || `Failed to ${params.id ? "update" : "add"} Voucher Type`);
                        }
                } catch (error) {
                    toastErrorMessage(error.response?.data?.message || `Failed to ${params.id ? "update" : "add"} voucher`);
                }
            } else {
                const res = await voucherMasterUpdate(params.id, formData);
                console.log(res);
                
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Voucher updated successfully");
                    setTimeout(() => {
                        navigate(`/voucher-type-list`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        if (params?.id) {
            const fetchData = async () => {
                try {
                    const response = await getvoucherMasterId(params.id);
                    setFormData(response.data);
                } catch (error) {
                    toast.error("Failed to load voucher data for editing");
                }
            };
            fetchData();
        }
    }, [params.id]);

    return (
        <div className="row mx-4">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Voucher Type
                                </h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Name: <span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.name}
                                            type="text"
                                            name="name"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Alias: <span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.alias}
                                            type="text"
                                            name="alias"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Abbreviation:
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.abbreviation}
                                            type="text"
                                            name="abbreviation"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Method of Number:
                                        </label>
                                        <select
                                            className="form-control"
                                            value={formData.methodOfNumber}
                                            name="methodOfNumber"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Method</option>
                                            <option value="Automatic">Automatic</option>
                                            <option value="Manual">Manual</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Advance Config:
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.advanceConfig}
                                            type="text"
                                            name="advanceConfig"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Use Effective Date for Voucher:
                                        </label>
                                        <select
                                            className="form-control"
                                            value={formData.useEffectiveDateForVoucher}
                                            name="useEffectiveDateForVoucher"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>In Active</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Is Optional:
                                        </label>
                                        <select
                                            className="form-control"
                                            value={formData.isOptional}
                                            name="isOptional"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>De Active</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Common Narration:
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.commonNaration}
                                            type="text"
                                            name="commonNaration"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Narration for Entry:
                                        </label>
                                        <input
                                            className="form-control"
                                            value={formData.narationForEntry}
                                            type="text"
                                            name="narationForEntry"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-8 form-group mg-b-0">
                                        <label className="form-label">
                                            Status:
                                        </label>
                                        <select
                                            className="form-control"
                                            value={formData.selected}
                                            name="selected"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>De Active</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <button
                                            className="btn btn-primary pd-x-20"
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
            <ToastContainer className={"text-center"} />
        </div>
    );
}

export default AddVoucher;

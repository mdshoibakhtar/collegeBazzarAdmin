import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postNature, updateNatureById, getNatureById } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function TcsAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "TCS Master",
    };

    const [formValues, setFormValues] = useState({
        name: "",
        rows: [{ taxMaster: "", effDate: "" }]
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleAddRow = () => {
        setFormValues((prev) => ({
            ...prev,
            rows: [...prev.rows, { taxMaster: "", effDate: "" }]
        }));
    };

    const handleRemoveRow = (index) => {
        setFormValues((prev) => ({
            ...prev,
            rows: prev.rows.filter((_, idx) => idx !== index)
        }));
    };

    const handleChangeRow = (index, field, value) => {
        const updatedRows = [...formValues.rows];
        updatedRows[index][field] = value;
        setFormValues((prev) => ({
            ...prev,
            rows: updatedRows
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (params?.id) {
                const res = await updateNatureById(params.id, formValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Updated successfully");
                    navigate(`/nature_master`);
                }
            } else {
                const res = await postNature(formValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Added successfully");
                    navigate(`/nature_master`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, { position: "top-right" });
    };

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} TCS Master</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues.name}
                                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                            placeholder=" Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues?.tcslimit}
                                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                            placeholder="tcs limit"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues?.tcspercent}
                                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                            placeholder="tcs %"
                                            required
                                        />
                                    </div>
                                </div>

                               

                                <div className="row">
                                    <div className="col-xl-2 mb-3">
                                        <button className="btn btn-primary me-1" type="submit">
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

export default TcsAdd;

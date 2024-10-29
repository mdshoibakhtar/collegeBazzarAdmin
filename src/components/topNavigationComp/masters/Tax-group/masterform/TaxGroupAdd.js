import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postNature, updateNatureById, getNatureById, getAccTaxMasterByPage } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function TaxGroupAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Tax Group",
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
    const [taxMasterData, setTaxMasterData] = useState([]);
    const getDatas = async () => {
        const response = await getAccTaxMasterByPage(0, 100);
        setTaxMasterData(response?.data);
    }

    useEffect(() => {
        getDatas();
    }, []);
    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} Tax Group</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formValues.name}
                                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                            placeholder="Tax Group Name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Dynamic Table */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Tax Master</th>
                                                <th>Eff. Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formValues.rows.map((row, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <select
                                                            className="form-select"
                                                            value={row.taxMaster}
                                                            onChange={(e) => handleChangeRow(index, 'taxMaster', e.target.value)}
                                                            required
                                                        >
                                                            <option value="">Select Tax Master</option>
                                                            {taxMasterData?.map((taxMaster) => (
                                                                <option key={taxMaster._id} value={taxMaster._id}>
                                                                    {taxMaster.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            value={row.effDate}
                                                            onChange={(e) => handleChangeRow(index, 'effDate', e.target.value)}
                                                            required
                                                        />
                                                    </td>
                                                    <td>
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => handleRemoveRow(index)}
                                                            >
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button type="button" className="btn btn-primary" onClick={handleAddRow}>
                                        <i className="fa fa-plus"></i> Add Row
                                    </button>
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

export default TaxGroupAdd;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { updateMarketTypeById, postMarketType, getMarketTypeById } from '../../../../../api/login/Login';

function GroupForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Group",
    };

    const [initialValues, setInitialValues] = useState({
        name: '',
        alias: '',
        under: '', // Select field for "Under"
        nature: '', // Select field for "Nature"
        subLedger: '', // Option for "Group Behave like a sub-ledger"
        debitCreditBalance: '', // Option for "Net Debit/Credit Balance for Reporting"
        usedForCalculation: '', // Option for "Used For Calculation"
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Group Name is required";
        }
        if (!values.alias) {
            errors.alias = "Alias is required";
        }
        if (!values.under) {
            errors.under = "Under option is required";
        }
        if (!values.nature) {
            errors.nature = "Nature option is required";
        }
        if (!values.subLedger) {
            errors.subLedger = "Please select whether the group behaves like a sub-ledger";
        }
        if (!values.debitCreditBalance) {
            errors.debitCreditBalance = "Please select whether Net Debit/Credit Balance is for reporting";
        }
        if (!values.usedForCalculation) {
            errors.usedForCalculation = "Please select whether it's used for calculation";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        console.log("Submitting form with values:", values);
        return

        try {
            if (!params?.id) {
                const res = await postMarketType(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Group added successfully");
                    setTimeout(() => {
                        navigate(`/market-type`);
                    }, 1000);
                }
            } else {
                const res = await updateMarketTypeById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Group updated successfully");
                    setTimeout(() => {
                        navigate(`/market-type`);
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchMarketTypeData = async () => {
            if (params?.id) {
                const response = await getMarketTypeById(params.id);
                if (response?.data) {
                    setInitialValues(response.data);
                }
            }
        };

        fetchMarketTypeData();
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
                                    {params?.id ? "UPDATE" : "ADD"} Group
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <h6>Name</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={initialValues.name}
                                            onChange={(e) => setInitialValues({ ...initialValues, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Alias</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="alias"
                                            value={initialValues.alias}
                                            onChange={(e) => setInitialValues({ ...initialValues, alias: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Under</h6>
                                        <select
                                            className="form-select"
                                            name="under"
                                            value={initialValues.under}
                                            onChange={(e) => setInitialValues({ ...initialValues, under: e.target.value })}
                                        >
                                            <option value="">Select Under</option>
                                            <option value="capital">Capital</option>
                                            <option value="revenue">Revenue</option>
                                            <option value="expenses">Expenses</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Nature</h6>
                                        <select
                                            className="form-select"
                                            name="nature"
                                            value={initialValues.nature}
                                            onChange={(e) => setInitialValues({ ...initialValues, nature: e.target.value })}
                                        >
                                            <option value="">Select Nature</option>
                                            <option value="asset">Asset</option>
                                            <option value="liability">Liability</option>
                                            <option value="income">Income</option>
                                            <option value="expense">Expense</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Group Behave like a sub-ledger</h6>
                                        <select
                                            className="form-select"
                                            name="subLedger"
                                            value={initialValues.subLedger}
                                            onChange={(e) => setInitialValues({ ...initialValues, subLedger: e.target.value })}
                                        >
                                            <option value="">Select Option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Net Debit/Credit Balance for Reporting</h6>
                                        <select
                                            className="form-select"
                                            name="debitCreditBalance"
                                            value={initialValues.debitCreditBalance}
                                            onChange={(e) => setInitialValues({ ...initialValues, debitCreditBalance: e.target.value })}
                                        >
                                            <option value="">Select Option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Used For Calculation</h6>
                                        <select
                                            className="form-select"
                                            name="usedForCalculation"
                                            value={initialValues.usedForCalculation}
                                            onChange={(e) => setInitialValues({ ...initialValues, usedForCalculation: e.target.value })}
                                        >
                                            <option value="">Select Option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-12 mb-3">
                                        <Link to="#" className="btn btn-danger light ms-1">
                                            Cancel
                                        </Link>
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

export default GroupForm;

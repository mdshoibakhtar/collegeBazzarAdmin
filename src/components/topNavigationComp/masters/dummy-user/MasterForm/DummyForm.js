import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postDummyUser, updateDummyUserById, getDummyUserById } from '../../../../../api/login/Login';
import Select from 'react-select';  // Import react-select

function DummyForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Dummy User Master",
    };

    const [initialValues, setInitialValues] = useState({
        contestids: [],
        start_prediction: "",
        end_prediction: "",
        no_of_dummy_user: "",
        no_of_participate_each: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.contestids || values.contestids.length === 0) errors.contestids = "Contest ID is required";
        if (!values.start_prediction) errors.start_prediction = "Start Prediction is required";
        if (!values.end_prediction) errors.end_prediction = "End Prediction is required";
        if (!values.no_of_dummy_user) errors.no_of_dummy_user = "Number of Dummy Users is required";
        if (!values.no_of_participate_each) errors.no_of_participate_each = "Participation count is required";
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, { position: "top-right" });
    };

    const submitForm = async (values) => {
        const payload = {
            contestids: values.contestids.map((option) => option.value), // Map the selected options
            start_prediction: parseInt(values.start_prediction),
            end_prediction: parseInt(values.end_prediction),
            no_of_dummy_user: parseInt(values.no_of_dummy_user),
            no_of_participate_each: parseInt(values.no_of_participate_each),
        };

        try {
            if (!params?.id) {
                const res = await postDummyUser(payload);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Dummy User Added Successfully");
                    navigate(`/Dummy-User-Master`);
                }
            } else {
                const res = await updateDummyUserById(params.id, payload);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Dummy User Updated Successfully");
                    navigate(`/Dummy-User-Master`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchDummyUser = async () => {
            if (params?.id) {
                const response = await getDummyUserById(params.id);
                setInitialValues({
                    ...response?.data,
                    contestids: response?.data?.contestids.map((id) => ({ label: id, value: id })), // Update initial values
                });
            } else {
                setInitialValues({
                    contestids: [],
                    start_prediction: "",
                    end_prediction: "",
                    no_of_dummy_user: "",
                    no_of_participate_each: "",
                });
            }
        };

        fetchDummyUser();
    }, [params?.id]);

    // Sample options for the react-select multi-select
    const contestOptions = [
        { label: "Contest 1", value: "1" },
        { label: "Contest 2", value: "2" },
        { label: "Contest 3", value: "3" },
    ];

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} Dummy User</h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        setFieldValue,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="contestids">Contest IDs</label>
                                                    <Select
                                                        id="contestids"
                                                        name="contestids"
                                                        options={contestOptions}
                                                        value={values.contestids}
                                                        onChange={(selectedOptions) => setFieldValue('contestids', selectedOptions)}
                                                        isMulti
                                                        className={errors.contestids && touched.contestids ? 'is-invalid' : ''}
                                                    />
                                                    {errors.contestids && touched.contestids && (
                                                        <div className="invalid-feedback">{errors.contestids}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label htmlFor="contestids">Start Prediction</label>
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.start_prediction}
                                                        hasError={errors.start_prediction && touched.start_prediction}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.start_prediction}
                                                        id="start_prediction"
                                                        name="start_prediction"
                                                        placeholder="Start Prediction"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                <label htmlFor="contestids">End Prediction</label>
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.end_prediction}
                                                        hasError={errors.end_prediction && touched.end_prediction}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.end_prediction}
                                                        id="end_prediction"
                                                        name="end_prediction"
                                                        placeholder="End Prediction"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                <label htmlFor="contestids">Number Of Dummy User</label>
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.no_of_dummy_user}
                                                        hasError={errors.no_of_dummy_user && touched.no_of_dummy_user}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.no_of_dummy_user}
                                                        id="no_of_dummy_user"
                                                        name="no_of_dummy_user"
                                                        placeholder="Number of Dummy Users"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                <label htmlFor="contestids">Number of Participate Each</label>
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.no_of_participate_each}
                                                        hasError={errors.no_of_participate_each && touched.no_of_participate_each}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.no_of_participate_each}
                                                        id="no_of_participate_each"
                                                        name="no_of_participate_each"
                                                        placeholder="Number of Participation per User"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/Dummy-User-Master" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DummyForm;

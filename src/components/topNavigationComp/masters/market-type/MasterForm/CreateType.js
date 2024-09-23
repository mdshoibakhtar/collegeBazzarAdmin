import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast , ToastContainer} from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { updateMarketTypeById, postMarketType, getMarketTypeById } from '../../../../../api/login/Login';

function CreateTypemarket() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Market Type",
    };

    const [initialValues, setInitialValues] = useState({
        isActive: "",
        name: '',
    });

    const params = useParams();
    const navigate = useNavigate();

    // Updated validate function
    const validate = (values) => {
        let errors = {};
        if (!values.isActive) {
            errors.isActive = "Market Type status is required";
        }
        if (!values.name) {
            errors.name = "Market Type name is required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        console.log("Submitting form with values:", values); // Debugging log

        try {
            if (!params?.id) {
                // POST request to create a new market type
                const res = await postMarketType(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Market Type added successfully");
                    setTimeout(() => {
                        navigate(`/market-type`);
                    }, 1000);
                }
            } else {
                // PUT request to update an existing market type
                const res = await updateMarketTypeById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Market Type updated successfully");
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
        <ToastContainer/>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Market Type
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Market Type</h6>
                                                    <CustomInputField
                                                        type="text"
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        name="name"
                                                    />
                                                    {touched.name && errors.name && (
                                                        <div className="text-danger">{errors.name}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <h6>Market Type Status</h6>
                                                    <select
                                                        className="form-select"
                                                        name="isActive"
                                                        value={values.isActive}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Status</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {touched.isActive && errors.isActive && (
                                                        <div className="text-danger">{errors.isActive}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/market-type" className="btn btn-danger light ms-1">
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!(isValid && dirty)}  // Disables button if form is invalid
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

export default CreateTypemarket;

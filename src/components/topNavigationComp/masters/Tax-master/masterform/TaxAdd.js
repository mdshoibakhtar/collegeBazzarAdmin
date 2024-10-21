import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import {  getNatureById, getTaskRelatedToById, postNature, postTaskRelatedTo, updateNatureById, updateTaskRelatedToById } from '../../../../../api/login/Login';
import { toast , ToastContainer } from 'react-toastify';

function TaxAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Tax Master",
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        slug: "",
        type: '',
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Related To Name Is Required";
        }
        if (!values.type) {
            errors.type = "Related To  Is Required";
        }
        return errors;
    };
    const blankBtn = () => {
        setInitialValues({
            name: "",
            slug: "",
            type: null,
        });
    }
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await postNature(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Nature Successfully");
                        setTimeout(() => {
                            navigate(`/nature_master`)
                        }, 2000);
                    }
                    blankBtn()
                    // getFloorMasters(page)
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateNatureById(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Nature Successfully");
                        blankBtn()
                        setTimeout(() => {
                            navigate(`/nature_master`)
                        }, 2000);
                    }

                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Nature To Successfully");
                        blankBtn()
                    }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getNatureById(params.id);
                    const currencyData = response;
                    setInitialValues(currencyData?.data);

                } else {
                    setInitialValues({
                        name: "",
                        slug: "",
                        type: null,
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
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
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Tax Master
                                </h4>
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
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Nature"
                                                    />
                                                </div>
                                                {/* <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.slug}
                                                        hasError={errors.slug && touched.slug}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.slug}
                                                        autoFocus={true}
                                                        id="slug"
                                                        name="slug"
                                                        placeholder="Lead Sub Status Slug"
                                                    />
                                                </div> */}
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.type}
                                                        name="type"
                                                    >
                                                        <option value="" disabled>
                                                            Select  Type
                                                        </option>
                                                    </select>
                                                    {errors.type && touched.type && (
                                                        <div className="error">{errors.type}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.CGST}
                                                        hasError={errors.CGST && touched.CGST}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.CGST}
                                                        autoFocus={true}
                                                        id="CGST"
                                                        name="CGST"
                                                        placeholder="CGST"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.SGST}
                                                        hasError={errors.SGST && touched.SGST}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.SGST}
                                                        autoFocus={true}
                                                        id="SGST"
                                                        name="SGST"
                                                        placeholder="SGST"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.IGST}
                                                        hasError={errors.IGST && touched.IGST}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.IGST}
                                                        autoFocus={true}
                                                        id="IGST"
                                                        name="IGST"
                                                        placeholder="IGST"
                                                    />
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    {/* <Link to='/floor-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        // disabled={!isValid || !dirty}
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
    )
}

export default TaxAdd

import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getDealById, getNifty, postDeal, updateDealById, updateNifty } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';
import Loadar from '../../../../../common/loader/Loader';

function CreateNiftySale() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Niftyfy Sale",
    };

    const [initialValues, setInitialValues] = useState({
        name: "",
        isActive: null,
        current_price: "",    // New field
        highest_price: "",    // New field
        lowest_price: "",     // New field
        closing_price_edit: "", // New field
    });

    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};

        if (!values.current_price) {
            errors.current_price = "Current Price is Required";
        }
        if (!values.highest_price) {
            errors.highest_price = "Highest Price is Required";
        }
        if (!values.lowest_price) {
            errors.lowest_price = "Lowest Price is Required";
        }
        if (!values.closing_price_edit) {
            errors.closing_price_edit = "Closing Price is Required";
        }
        return errors;
    };

    const blankBtn = () => {
        setInitialValues({ name: "", isActive: "", current_price: "", highest_price: "", lowest_price: "", closing_price_edit: "" });
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [loader, setLoader] = useState()
    const submitForm = async (values) => {
        setLoader(true)
        try {
            if (!params?.id) {
                try {
                    const res = await updateNifty(params.id, values);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("Niftyfy Sale Updated Successfully");
                        setTimeout(() => {
                            blankBtn();
                            navigate(`/Nifty-Rate-List`);
                        }, 1000);
                    }
                } catch (error) {
                    alert(`Error: ${error}`);
                }
            } else {

            }
        } catch (error) {
            console.error("Error:", error);
        }
        setLoader(false)
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await getNifty();
                setInitialValues(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCurrency();
    }, []);

    return (
        <>
            {loader && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Niftyfy Sale
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
                                                        type="number"
                                                        value={values?.current_price}
                                                        hasError={errors.current_price && touched.current_price}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.current_price}
                                                        id="current_price"
                                                        name="current_price"
                                                        placeholder="Current Price"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.highest_price}
                                                        hasError={errors.highest_price && touched.highest_price}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.highest_price}
                                                        id="highest_price"
                                                        name="highest_price"
                                                        placeholder="Highest Price"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.lowest_price}
                                                        hasError={errors.lowest_price && touched.lowest_price}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.lowest_price}
                                                        id="lowest_price"
                                                        name="lowest_price"
                                                        placeholder="Lowest Price"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values?.closing_price_edit}
                                                        hasError={errors.closing_price_edit && touched.closing_price_edit}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.closing_price_edit}
                                                        id="closing_price_edit"
                                                        name="closing_price_edit"
                                                        placeholder="Closing Price"
                                                    />
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/Nifty-Rate-List' className="btn btn-danger light ms-1">Cancel</Link>
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

export default CreateNiftySale;

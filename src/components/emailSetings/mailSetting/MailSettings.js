import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";

function MailSeting() {
    const navigate = useNavigate();

    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New Api Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            // const data = await getCountryAdd()
            // setCombo(data?.data)
        } catch (error) {
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    /* const res = await ApiTransactionAdd(values);
                       if (res?.statusCode == "200") {
                       toastSuccessMessage();
                       setTimeout(() => {
                         navigate('/api-master')
                       }, [4000])
                     } */
                } catch (error) { }
            } else {
                try {
                    // const res = await apiMasterUpdate(params.id, values);
                    // if (res?.statusCode == "200") {
                    //   toastSuccessMessage();
                    // }
                } catch (error) { }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getapiMasterId(params.id);
                    // const currencyData = response.data;
                    // setInitialValues(currencyData);
                } else {
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    const handleEmailEngineChange = (event) => {
        setEmailEngine(event.target.value);
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
                enableReinitialize
                className="tbl-captionn"
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
                        <div className="row m-4">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">Email Settings</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <label className="m-2">
                                                    <b>Email Engine</b>
                                                </label>
                                                <div className="col-xl-12 my-2">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={(e) => {
                                                            handleEmailEngineChange(e);
                                                            handleChange(e);
                                                        }}
                                                        value={emailEngine}
                                                        name="emailEngine"
                                                    >
                                                        <option value="sendEmail">PHP Mail</option>
                                                        <option value="smtp">SMTP</option>
                                                    </select>
                                                </div>

                                                <div className="py-4 my-2">
                                                    <span><b>SMTP Information</b></span>
                                                </div>
                                                <>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            disable={emailEngine === "smtp"}
                                                            type="text"
                                                            value={values?.smtpUsername}
                                                            hasError={errors.smtpUsername && touched.smtpUsername}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smtpUsername}
                                                            id="smtpUsername"
                                                            name="smtpUsername"
                                                            placeholder="SMTP Host"
                                                        />
                                                    </div>

                                                    <div className="col-xl-12 mb-3">
                                                        <label className="form_control">SMTP Auth</label>
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}
                                                            disabled={emailEngine !== "smtp"}  
                                                            value={emailEngine}
                                                            name="emailEngine"
                                                        >
                                                            <option value={true}>TRUE</option>
                                                            <option value={false}>FALSE</option>
                                                        </select>
                                                    </div>


                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            disable={emailEngine === "smtp"}
                                                            type="text"
                                                            value={values?.smtpServer}
                                                            hasError={errors.smtpServer && touched.smtpServer}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smtpServer}
                                                            id="smtpServer"
                                                            name="smtpServer"
                                                            placeholder="SMTP Port"
                                                        />
                                                    </div>

                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            disable={emailEngine === "smtp"}
                                                            type="text"
                                                            value={values?.smtpPort}
                                                            hasError={errors.smtpPort && touched.smtpPort}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smtpPort}
                                                            id="smtpPort"
                                                            name="smtpPort"
                                                            placeholder="SMTP Username"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            disable={emailEngine === "smtp"}
                                                            type="text"
                                                            value={values?.smtpPort}
                                                            hasError={errors.smtpPort && touched.smtpPort}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smtpPort}
                                                            id="smtpPort"
                                                            name="smtpPort"
                                                            placeholder="SMTP Username"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            disable={emailEngine === "smtp"}
                                                            type="password"
                                                            value={values?.smtpPort}
                                                            hasError={errors.smtpPort && touched.smtpPort}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.smtpPort}
                                                            id="smtpPort"
                                                            name="smtpPort"
                                                            placeholder="SMTP Password"
                                                        />
                                                    </div>

                                                    
                                                </>

                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-danger light ms-1"
                                                    >
                                                        Cancel
                                                    </Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "send" : "Save"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik >

            <ToastContainer />
        </>
    );
}

export default MailSeting;

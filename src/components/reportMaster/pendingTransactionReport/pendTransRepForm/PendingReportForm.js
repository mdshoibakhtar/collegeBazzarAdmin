import React, { useState } from 'react'
import PendingTransctionModal from '../pendingTransactionModal/PendingTransctionModal';
import { FaDownload, FaSearch } from 'react-icons/fa';
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
const initialValues = {
    from:"",
    to:""
}
function PendingReportForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Abcd",
            value: "Abcd",
        },
        {
            name: "Abce",
            value: "Abce",
        },
        {
            name: "Abcf",
            value: "Abcf",
        },
    ];
    const validate = (values) => {
        let errors = {};

        if (!values.from) {
            errors.from = "From Date Name is required";
        }

        if (!values.to) {
            errors.to = "To Date is required";
        }
        return errors;
    };
    const submitForm = (values) => {
        console.log(values);
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
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
                        <section>
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">ADD Pancard</h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={submitForm}>
                                                    <div className="row">
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField   
                                                                type="date"
                                                                placeholder="From *"
                                                                value={values.from}
                                                                hasError={errors.from && touched.from}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.from}
                                                                autoFocus={true}
                                                                id="from"
                                                            />
                                                        </div>
                                                        <div className="col-xl-4 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="To *"
                                                                value={values.to}
                                                                hasError={errors.to && touched.to}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.to}
                                                                autoFocus={true}
                                                                id="to"
                                                            />
                                                        </div>

                                                        <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                                <FaSearch /> Search
                                                            </button>
                                                            <button
                                                                className="btn btn-danger pd-x-20"
                                                                type="button"
                                                                data-toggle="modal"
                                                                data-target="#transaction_download_model"
                                                                onClick={handleShow}
                                                                aria-label="Download"
                                                            >
                                                                <FaDownload /> Download
                                                            </button>
                                                            <PendingTransctionModal handleClose={handleClose} show={show} />
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                }}
            </Formik>
        </>
    )
}

export default PendingReportForm

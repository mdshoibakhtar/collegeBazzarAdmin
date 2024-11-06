import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { getOperater } from '../../api/login/Login';
import { useParams } from 'react-router-dom';

function NotificationFilter({ aepsData, submitForm, title }) {
    // Get the current date in the format YYYY-MM-DD
    const [defaultInitialValues, setdefaultInitialValues] = useState({
        package_id: '',
        member_code: '',
        name: '',
        startDate: '',
        endDate: ''
    })

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        setdefaultInitialValues({
            package_id: '',
            member_code: '',
            name: '',
            startDate: `${year}-${month}-${day}`,
            endDate: `${year}-${month}-${day}`
        })
        return `${year}-${month}-${day}`;
    };
    useState(() => {
        getCurrentDate()
    }, [])



    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>{title} Search</b></h4>
                                </div>
                                <Formik
                                    initialValues={defaultInitialValues}
                                    onSubmit={submitForm}
                                    className="tbl-captionn"
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            resetForm,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty,
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date"
                                                            name="startDate"
                                                            value={values.startDate}
                                                            hasError={errors.startDate && touched.startDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.startDate}
                                                            id="startDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date"
                                                            name="endDate"
                                                            value={values.endDate}
                                                            hasError={errors.endDate && touched.endDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.endDate}
                                                            id="endDate"
                                                        />
                                                    </div>
                                                  
                                                    {/* <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name="type"
                                                            value={values.type}
                                                            hasError={errors.type && touched.type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}>
                                                            <option >Select Service Provider </option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>

                                                    </div> */}
                                                    {/* <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Member Code"
                                                            name="member_code"
                                                            value={values.member_code}
                                                            hasError={errors.member_code && touched.member_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.member_code}
                                                            id="member_code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Member Name"
                                                            name="name"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            id="name"
                                                        />
                                                    </div> */}


                                                    <div className="col-lg-4 col-md-4">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                                <i className="fas fa-search"></i> Search
                                                            </button>
                                                            <button className="btn btn-primary pd-x-20 color2" type="button" onClick={resetForm}>
                                                                <i className="fas fa-refresh"></i> Reset
                                                            </button>
                                                        </div>
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
            </div>
        </>
    );
}

export default NotificationFilter;

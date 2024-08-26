import React, { useState } from 'react'
import CustomInputField from '../../../../../common/CustomInputField';
import { Formik } from 'formik';

function LogsFilter({ count, page, submitForm, title }) {
    const [defaultInitialValues, setdefaultInitialValues] = useState({
        adhaar_no: '',
        customer_mobile: '',
        startDate: '',
        endDate: '',
        count: count,
        page: page,

    })

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        setdefaultInitialValues({
            adhaar_no: '',
            customer_mobile: '',
            startDate: `${year}-${month}-${day}`,
            endDate: `${year}-${month}-${day}`,
            count: count,
            page: page,
        })
        return `${year}-${month}-${day}`;
    };
    useState(() => {
        getCurrentDate()
    }, [])
    return (
        <>
            <div className="row">
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

                                                    <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                            value={values.ServiceProvider}
                                                            hasError={errors.ServiceProvider && touched.ServiceProvider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}>
                                                            <option >Select Gateway </option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                            value={values.ServiceProvider}
                                                            hasError={errors.ServiceProvider && touched.ServiceProvider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}>
                                                            <option >Select Status </option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Template ID"
                                                            name="adhaar_no"
                                                            value={values.adhaar_no}
                                                            hasError={errors.adhaar_no && touched.adhaar_no}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adhaar_no}
                                                            id="adhaar_no"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Status"
                                                            name="customer_mobile"
                                                            value={values.customer_mobile}
                                                            hasError={errors.customer_mobile && touched.customer_mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.customer_mobile}
                                                            id="customer_mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Mobile No"
                                                            name="customer_mobile"
                                                            value={values.customer_mobile}
                                                            hasError={errors.customer_mobile && touched.customer_mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.customer_mobile}
                                                            id="customer_mobile"
                                                        />
                                                    </div>


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
    )
}

export default LogsFilter

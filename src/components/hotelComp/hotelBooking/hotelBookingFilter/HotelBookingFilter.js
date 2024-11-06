import React, { useState } from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import { Pagination } from 'antd';
function HotelBookingFilter({ count, page, submitForm, title }) {
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

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b> Search Hotel Booking </b></h4>
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
                                                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                            value={values.ServiceProvider}
                                                            hasError={errors.ServiceProvider && touched.ServiceProvider}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}>
                                                            <option disabled>Select key to search by</option>
                                                            <option value={2}>First Name</option>
                                                            <option value={3}>Last Name</option>
                                                            <option value={3}>Booking Reff No</option>
                                                            <option value={3}>Amendments Type</option>
                                                            <option value={3}>Booking Status</option>
                                                            <option value={3}>Amendments Status</option>
                                                            <option value={3}>Amendments Id</option>
                                                            <option value={3}>Date Range</option>
                                                        </select>


                                                    </div>

                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Value"
                                                            name="value"
                                                            value={values.value}
                                                            hasError={errors.value && touched.value}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.value}
                                                            id="value"
                                                        />
                                                    </div>
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

export default HotelBookingFilter
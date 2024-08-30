import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
// import { addTypes_Of_AffilatedBy_Master, getAffilatedBy_MasterId,updateTypes_Of_AffilatedBy_Master } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';

function CompanyFormMaster() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Company Type",
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        type: "",
        domain: "",
    });
    const [domains, setDomains] = useState([{ id: Date.now(), value: '' }]);
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Company Name  Is Required";
        }
        if (!values.type) {
            errors.type = "Type Is Required";
        }
        if (!values.domain) {
            errors.domain = "Domain Is Required";
        }
        return errors;
    };


    const handleAddDomain = () => {
        setDomains([...domains, { id: Date.now(), value: '' }]);
    };

    const handleDeleteDomain = (id) => {
        setDomains(domains.filter(domain => domain.id !== id));
    };

    const handleChange = (id, event) => {
        const newDomains = domains.map(domain => {
            if (domain.id === id) {
                return { ...domain, value: event.target.value };
            }
            return domain;
        });
        setDomains(newDomains);
    };
    const blankBtn = () => {
        setInitialValues({ name: "", type: "", domain: "" });
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                // try {
                //     const res = await addTypes_Of_AffilatedBy_Master(values);
                //     if (res?.statusCode == "200") {
                //         toastSuccessMessage(" Affilated Successfully");
                //         navigate(`/affilated-by`)
                //     }
                //     blankBtn()
                // } catch (error) {
                //     alert(error.message)
                // }

            } else {
                try {
                    // const res = await updateTypes_Of_AffilatedBy_Master(params.id, values);

                    // if (res?.statusCode == "200") {
                    //     toastSuccessMessage("Affilated Successfully");
                    //     blankBtn()
                    //     navigate(`/affilated-by`)
                    // }
                    // if (res?.statusCode == "403") {
                    //     toastSuccessMessage("Affilated Successfully");
                    //     blankBtn()
                    // }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                // if (params?.id) {
                //     const response = await getAffilatedBy_MasterId(params.id);
                //     setInitialValues(response?.data);

                // } else {
                //     setInitialValues({
                //         name: "",
                //         type: ""
                //     });
                // }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Company
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
                                                        value={values?.directory}
                                                        hasError={errors.directory && touched.directory}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.directory}
                                                        autoFocus={true}
                                                        id="directory"
                                                        name="directory"
                                                        placeholder="Directory Name"
                                                    />
                                                </div>
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
                                                        placeholder="Company Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.role}
                                                        hasError={errors.role && touched.role}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.role}
                                                        autoFocus={true}
                                                        id="role"
                                                        name="role"
                                                        placeholder="Role Name"
                                                    />
                                                </div><div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.mailing}
                                                        hasError={errors.mailing && touched.mailing}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mailing}
                                                        autoFocus={true}
                                                        id="mailing"
                                                        name="mailing"
                                                        placeholder="Mailing Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.addressLine1}
                                                        hasError={errors.addressLine1 && touched.addressLine1}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.addressLine1}
                                                        autoFocus={true}
                                                        id="addressLine1"
                                                        name="addressLine1"
                                                        placeholder="AddressLine 1 "
                                                    />
                                                </div><div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.addressLine2}
                                                        hasError={errors.addressLine2 && touched.addressLine2}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.addressLine2}
                                                        autoFocus={true}
                                                        id="addressLine2"
                                                        name="addressLine2"
                                                        placeholder="AddressLine 2"
                                                    />
                                                </div><div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.country}
                                                        hasError={errors.country && touched.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.country}
                                                        autoFocus={true}
                                                        id="country"
                                                        name="country"
                                                        placeholder="Country"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.state}
                                                        hasError={errors.state && touched.state}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.state}
                                                        autoFocus={true}
                                                        id="state"
                                                        name="state"
                                                        placeholder="State"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.city}
                                                        hasError={errors.city && touched.city}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.city}
                                                        autoFocus={true}
                                                        id="city"
                                                        name="city"
                                                        placeholder="City"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.email}
                                                        hasError={errors.email && touched.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.email}
                                                        autoFocus={true}
                                                        id="email"
                                                        name="email"
                                                        placeholder="E-mail"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.mobileNo}
                                                        hasError={errors.mobileNo && touched.mobileNo}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobileNo}
                                                        autoFocus={true}
                                                        id="mobileNo"
                                                        name="mobileNo"
                                                        placeholder="Mobile No"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.faxNo}
                                                        hasError={errors.faxNo && touched.faxNo}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.faxNo}
                                                        autoFocus={true}
                                                        id="faxNo"
                                                        name="faxNo"
                                                        placeholder="Fax No"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.firstName}
                                                        hasError={errors.firstName && touched.firstName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.firstName}
                                                        autoFocus={true}
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.lastName}
                                                        hasError={errors.lastName && touched.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.lastName}
                                                        autoFocus={true}
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.type}
                                                        name="companyType"
                                                    >
                                                        <option value="" disabled>
                                                            Select Company Type
                                                        </option>

                                                    </select>
                                                    {errors.type && touched.type && (
                                                        <div className="error">{errors.type}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-10 mb-3">
                                                    {domains.map((domain, index) => (
                                                        <div className='row' key={domain.id}>
                                                            <div className='col-xl-7'>
                                                                <div className='mb-3'>
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={domain.value}
                                                                        hasError={false}  // Adjust this according to your validation logic
                                                                        onChange={(e) => handleChange(domain.id, e)}
                                                                        id={`domain-${domain.id}`}
                                                                        name={`domain-${domain.id}`}
                                                                        placeholder={`Company Domain ${index + 1}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='col-xl-2'>
                                                                <button
                                                                    className='btn btn-outline-danger mt-2'
                                                                    type='button'
                                                                    onClick={() => handleDeleteDomain(domain.id)}
                                                                    disabled={domains.length === 1}
                                                                >
                                                                    <MdDelete />
                                                                </button>
                                                            </div>
                                                            {index === domains.length - 1 && (
                                                                <div className='col-xl-3'>
                                                                    <button
                                                                        className='btn btn-warning mt-2'
                                                                        type='button'
                                                                        onClick={handleAddDomain}
                                                                    >
                                                                        <IoMdAddCircle /> <span><small>Create More Domain</small></span>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="col-xl-12 mb-3">
                                                    <b> Books and Financial Year</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="date"
                                                        value={values?.financialYearfrom}
                                                        hasError={errors.financialYearfrom && touched.financialYearfrom}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.financialYearfrom}
                                                        autoFocus={true}
                                                        id="financialYearfrom"
                                                        name="financialYearfrom"
                                                        placeholder="Financial Year from"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="date"
                                                        value={values?.booksBeigningFrom}
                                                        hasError={errors.booksBeigningFrom && touched.booksBeigningFrom}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.booksBeigningFrom}
                                                        autoFocus={true}
                                                        id="booksBeigningFrom"
                                                        name="booksBeigningFrom"
                                                        placeholder="Books Beigning From"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Security Control</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="password"
                                                        value={values?.password}
                                                        hasError={errors.password && touched.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.password}
                                                        autoFocus={true}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                                        <span className="ms-2">Use Security control</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Vochers Settings</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.vochersPrefix}
                                                        hasError={errors.vochersPrefix && touched.vochersPrefix}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.vochersPrefix}
                                                        autoFocus={true}
                                                        id="vochersPrefix"
                                                        name="vochersPrefix"
                                                        placeholder="Vochers Prefix"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.vochersSequence}
                                                        hasError={errors.vochersSequence && touched.vochersSequence}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.vochersSequence}
                                                        autoFocus={true}
                                                        id="vochersSequence"
                                                        name="vochersSequence"
                                                        placeholder="Vochers Sequence"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Base Currency Imformation</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.baseCurrencyImformation}
                                                        hasError={errors.baseCurrencyImformation && touched.baseCurrencyImformation}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.baseCurrencyImformation}
                                                        autoFocus={true}
                                                        id="baseCurrencyImformation"
                                                        name="baseCurrencyImformation"
                                                        placeholder="Vochers Sequence"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.baseCurrencyImformation}
                                                        hasError={errors.baseCurrencyImformation && touched.baseCurrencyImformation}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.baseCurrencyImformation}
                                                        autoFocus={true}
                                                        id="baseCurrencyImformation"
                                                        name="baseCurrencyImformation"
                                                        placeholder="Base Currency Imformation"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.formalName}
                                                        hasError={errors.formalName && touched.formalName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.formalName}
                                                        autoFocus={true}
                                                        id="formalName"
                                                        name="formalName"
                                                        placeholder="Formal Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                                        <span className="ms-2">Suffix Symbol to amount</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                                        <span className="ms-2">Add space b/w amount and symbol</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                                        <span className="ms-2">Show amount in millian</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.Numberofdecimalplace}
                                                        hasError={errors.Numberofdecimalplace && touched.Numberofdecimalplace}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.Numberofdecimalplace}
                                                        autoFocus={true}
                                                        id="Numberofdecimalplace"
                                                        name="Numberofdecimalplace"
                                                        placeholder="Number Of Decimal place"
                                                    />
                                                </div>



                                                <div className="col-xl-12 mb-3">
                                                    <Link to='/company-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
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
    )
}

export default CompanyFormMaster

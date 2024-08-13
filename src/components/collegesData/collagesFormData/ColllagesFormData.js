import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import CustomInputField from '../../../common/CustomInputField';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import {
    addCollegescrud,
    cityAddCollageSelectList,
    clodinaryImage,
    countryList,
    getAffiliatedListSelect,
    getApproveListSelect,
    getCollegeTypeListSelect,
    getFacilitiesListSelect,
    getStreamListSelect,
    getupdateCollegesCrudStatusId,
    StateAddCollageSelectList,
    updateCollegescrud
} from '../../../api/login/Login';
import JoditEditor from 'jodit-react';
import CustomTextArea from '../../../common/CustomTextArea';
import { baseUrlImage } from '../../../baseUrl';

function CollagesFormData() {
    const breadCrumbsTitle = {
        title_1: "College",
        title_2: "Create Colleges",
    };
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [profileImage, setProfileImage] = useState();
    const [logoImage, setLogoImage] = useState();
    const [bannImageState, setbannImageState] = useState();
    const [iconImageState, setIconImageState] = useState();
    const [initialValues, setInitialValues] = useState({
        name: "",
        establish: "",
        college_type_id: "",
        affiliate: [],
        approvedBy: [],
        tags: [],
        location: "",
        overview: "",
        facilities: [],
        eligibilityCriteria: "",
        video_link: "",
        placement_desc: "",
        placement_company_name: "",
        Other: "",
        country: "",
        state: "",
        city: "",
        logo_img: "",
        banner_img: "",
        stream_id: [],
        // courses: [{ course_id, fee }]
    });
    const [selectedStreamState, setselectedStreamState] = useState([]);
    const [streamState, SetStreamState] = useState();
    // --------------------------------------------------------------------------------
    const [countryState, SetCountryState] = useState();
    const [countryWiseState, setCountryWiseState] = useState();
    // --------------------------------------------------------------------------------

    const [stateWiseCity, setStateWisecCity] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState2, setSelectedState2] = useState([]);
    const [state2, setState2] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState3, setSelectedState3] = useState([]);
    const [state3, setState3] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState4, setSelectedState4] = useState([]);
    const [state4, setState4] = useState();
    // --------------------------------------------------------------------------------

    const [state5, setState5] = useState();
    // --------------------------------------------------------------------------------

    const params = useParams();
    const navigate = useNavigate();
    // --------------------------------------------------------------------------------

    const validate = (values) => {
        let errors = {};
        // if (!values.name) {
        //     errors.name = "College Name Is Required";
        // }
        // if (!values.establish) {
        //     errors.establish = "Establish Is Required";
        // }
        // if (!values.college_type_id) {
        //     errors.college_type_id = "College Type Is Required";
        // }
        // if (selectedState4.length === 0) {
        //     errors.affiliate = "Affiliate Is Required";
        // }
        // if (selectedState3.length === 0) {
        //     errors.approvedBy = "Approval Is Required";
        // }
        // if (selectedState2.length === 0) {
        //     errors.facilities = "Facilities Is Required";
        // }
        // if (!values.location) {
        //     errors.location = "Location Is Required";
        // }
        // if (!values.overview) {
        //     errors.overview = "Overview Is Required";
        // }
        // if (!values.eligibilityCriteria) {
        //     errors.eligibilityCriteria = "Eligibility Criteria Is Required";
        // }
        // if (!values.video_link) {
        //     errors.video_link = "Video Url Is Required";
        // }
        // if (!values.placement_desc) {
        //     errors.placement_desc = "Placement Description Is Required";
        // }
        // if (!values.placement_company_name) {
        //     errors.placement_company_name = "Placement Company Name Is Required";
        // }
        // if (!values.Other) {
        //     errors.Other = "Other Is Required";
        // }
        return errors;
    };
    // microphone----------------



    const handleChangeCountry = async (e) => {
        setInitialValues({
            ...initialValues,
            country: e.target.value,
        });
        try {
            const resSrtate = await StateAddCollageSelectList(e.target.value)
            setCountryWiseState(resSrtate?.data);

        } catch (error) {
            alert(error.message)
        }
    };
    const handleChangeState = async (e) => {
        setInitialValues({
            ...initialValues,
            state: e.target.value,
        });
        try {
            const resCity = await cityAddCollageSelectList(e.target.value)
            console.log(resCity);

            setStateWisecCity(resCity?.data);

        } catch (error) {
            alert(error.message)
        }
    };
    const handleChangeCity = async (e) => {
        setInitialValues({
            ...initialValues,
            city: e.target.value,
        });

    };
    const imgs = new FormData();
    const handleImageUpload = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)

            setTimeout(() => {
                setProfileImage(res?.data)
                setbannImageState(res?.data?.data?.url)
            }, 3000)


        } catch (error) {
            alert(`Banner Images Not Upload`)
        }
    }
    const logoimgs = new FormData();
    const handleImageUploadLogo = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(logoimgs)

            setTimeout(() => {
                // setLogoImage(res?.data)
                setLogoImage(res?.data?.data?.url)
            }, 3000)


        } catch (error) {
            alert(`Logo Not Upload`)
        }
    }


    const submitForm = async (values) => {
        const submissionData = {
            ...values,
            affiliate: selectedState4.map(option => option.value),
            approvedBy: selectedState3.map(option => option.value),
            facilities: selectedState2.map(option => option.value),
            stream_id: selectedStreamState.map(option => option.value),
            overview: content
        };
        try {
            if (!params?.id) {
                const res = await addCollegescrud(submissionData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("College Successfully Added");
                    navigate(`/admin/list-colleges`);
                }
            } else {
                const res = await updateCollegescrud(params.id, submissionData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("College Successfully Updated");
                    navigate(`/admin/list-colleges`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getupdateCollegesCrudStatusId(params.id);
                    const collegeData = response?.data;
                    console.log(collegeData);
                    setInitialValues({
                        ...collegeData,
                        affiliate: collegeData?.affiliate?.map(item => ({ value: item?._id, label: item?.name })),
                        approvedBy: collegeData?.approvedBy?.map(item => ({ value: item?._id, label: item?.name })),
                        facilities: collegeData?.facilities?.map(item => ({ value: item?._id, label: item?.name })),
                        stream_id: collegeData?.stream_id?.map(item => ({ value: item?._id, label: item?.name })),
                        overview: content
                    });

                    setSelectedState4(collegeData?.affiliate?.map(item => ({ value: item?._id, label: item?.name })));
                    setSelectedState3(collegeData?.approvedBy?.map(item => ({ value: item?._id, label: item?.name })));
                    setSelectedState2(collegeData?.facilities?.map(item => ({ value: item?._id, label: item?.name })));
                    setselectedStreamState(collegeData?.stream_id?.map(item => ({ value: item?._id, label: item?.name })));
                    setContent(collegeData?.overview)
                }
            } catch (error) {
                console.error("Error fetching college data:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    console.log(initialValues?.stream_id);


    useEffect(() => {
        const getCollegesDataForSelect = async () => {
            try {
                const response = await getCollegeTypeListSelect();
                setState5(response?.data);
            } catch (error) {
                alert(error.message);
            }
        };

        const getAffiliateDataForSelect = async () => {
            try {
                const response = await getAffiliatedListSelect();
                setState4(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };

        const getApproveDataForSelect = async () => {
            try {
                const response = await getApproveListSelect();
                setState3(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };

        const getFacilitiesDataForSelect = async () => {
            try {
                const response = await getFacilitiesListSelect();
                setState2(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };
        const getStreamDataForSelect = async () => {
            try {
                const response = await getStreamListSelect();
                SetStreamState(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };
        const getCountryDataForSelect = async () => {
            try {
                const response = await countryList();
                SetCountryState(response?.data)
            } catch (error) {
                alert(error.message);
            }
        };

        getCollegesDataForSelect();
        getAffiliateDataForSelect();
        getApproveDataForSelect();
        getFacilitiesDataForSelect();
        getStreamDataForSelect()
        getCountryDataForSelect()
    }, []);

    const affiliatedHandler = (selectedOptions) => {
        setSelectedState4(selectedOptions);
    };

    const approveHandler = (selectedOptions) => {
        setSelectedState3(selectedOptions);
    };

    const facilitiesHandler = (selectedOptions) => {
        setSelectedState2(selectedOptions);
    };
    const streamsHandler = (selectedOptions) => {
        setselectedStreamState(selectedOptions);
    };


    function handleTagKeyDown(e) {
        if (e.key !== "Enter") return;
        if (!e.target.value.trim()) return;
        setInitialValues({
            ...initialValues,
            tags: [...initialValues.tags, e.target.value],
        });
        e.target.value = "";
    }

    const removeTag = (index) => {
        setInitialValues({
            ...initialValues,
            tags: initialValues.tags.filter((_, i) => i !== index),
        });
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} College
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
                                            <div className="row align-items-end">
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="College Name"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values.establish}
                                                        hasError={errors.establish && touched.establish}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.establish}
                                                        autoFocus={false}
                                                        id="establish"
                                                        name="establish"
                                                        placeholder="Establish Year"
                                                        min="1800"  // Set a reasonable minimum year
                                                        max={new Date().getFullYear()}  // Set the maximum year to the current year
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        id="college_type_id"
                                                        name="college_type_id"
                                                        className="form-select  "
                                                        value={values.college_type_id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">College Type</option>
                                                        {state5?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.college_type_id && touched.college_type_id ? (
                                                        <small className="error-cls">
                                                            {errors.college_type_id}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Streams</label>
                                                    <Select
                                                        name="stream_id"
                                                        isMulti
                                                        value={selectedStreamState}
                                                        onChange={streamsHandler}
                                                        options={streamState}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="select Streams"
                                                    />
                                                    {errors.stream_id && touched.stream_id ? (
                                                        <small className="error-cls">
                                                            {errors.stream_id}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Affiliate BY</label>
                                                    <Select
                                                        name="affiliate"
                                                        isMulti
                                                        value={selectedState4}
                                                        onChange={affiliatedHandler}
                                                        options={state4}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Affiliate"
                                                    />
                                                    {errors.affiliate && touched.affiliate ? (
                                                        <small className="error-cls">
                                                            {errors.affiliate}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Approved By</label>
                                                    <Select
                                                        name="approvedBy"
                                                        isMulti
                                                        value={selectedState3}
                                                        onChange={approveHandler}
                                                        options={state3}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Approved By"
                                                    />
                                                    {errors.approvedBy && touched.approvedBy ? (
                                                        <small className="error-cls">
                                                            {errors.approvedBy}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Facilities</label>
                                                    <Select
                                                        name="facilities"
                                                        isMulti
                                                        value={selectedState2}
                                                        onChange={facilitiesHandler}
                                                        options={state2}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Facilities"
                                                    />
                                                    {errors.facilities && touched.facilities ? (
                                                        <small className="error-cls">
                                                            {errors.facilities}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Country</label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        className="form-select"
                                                        value={values.country}
                                                        onChange={(e) => {
                                                            handleChangeCountry(e);
                                                            handleChange(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select Country</option>
                                                        {countryState?.map((item, index) => (
                                                            <option key={index} value={item?.id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.country && touched.country ? (
                                                        <small className="error-cls">{errors.country}</small>
                                                    ) : null}

                                                </div>
                                                {values?.country ? (<div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>State</label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        className="form-select"
                                                        value={values.state}
                                                        onChange={(e) => {
                                                            handleChangeState(e);
                                                            handleChange(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select State</option>
                                                        {countryWiseState?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.country && touched.country ? (
                                                        <small className="error-cls">{errors.country}</small>
                                                    ) : null}

                                                </div>) : ""}
                                                {values?.state ? (<div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>City</label>
                                                    <select
                                                        id="state"
                                                        name="state"
                                                        className="form-select"
                                                        value={values.city}
                                                        onChange={(e) => {
                                                            handleChangeCity(e);
                                                            handleChange(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select State</option>
                                                        {stateWiseCity?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.state && touched.state ? (
                                                        <small className="error-cls">{errors.state}</small>
                                                    ) : null}

                                                </div>) : ""}
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.location}
                                                        hasError={errors.location && touched.location}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.location}
                                                        autoFocus={false}
                                                        id="location"
                                                        name="location"
                                                        placeholder="Location"
                                                    />
                                                </div>
                                               
                                                <div className="form-group col-md-12 mb-4">
                                                    <label htmlFor="txtUserId">Description <span style={{ color: 'red' }}>*</span></label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content ? content : values?.overview}
                                                        onChange={newContent => setContent(newContent)}

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.eligibilityCriteria}
                                                        hasError={errors.eligibilityCriteria && touched.eligibilityCriteria}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.eligibilityCriteria}
                                                        autoFocus={false}
                                                        id="eligibilityCriteria"
                                                        name="eligibilityCriteria"
                                                        placeholder="Eligibility Criteria"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="url"
                                                        value={values.video_link}
                                                        hasError={errors.video_link && touched.video_link}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.video_link}
                                                        autoFocus={false}
                                                        id="video_link"
                                                        name="video_link"
                                                        placeholder="Video URL"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.placement_company_name}
                                                        hasError={errors.placement_company_name && touched.placement_company_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.placement_company_name}
                                                        autoFocus={false}
                                                        id="placement_company_name"
                                                        name="placement_company_name"
                                                        placeholder="Placement Company Name"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.placement_desc}
                                                        hasError={errors.placement_desc && touched.placement_desc}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.placement_desc}
                                                        autoFocus={false}
                                                        id="placement_desc"
                                                        name="placement_desc"
                                                        placeholder="Placement Description"
                                                    />
                                                </div>

                                                <div className="col-xl-6 mb-3">
                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.Other}
                                                        hasError={errors.Other && touched.Other}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.Other}
                                                        autoFocus={false}
                                                        id="Other"
                                                        name="Other"
                                                        placeholder="Other"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <div className='row align-items-center'>
                                                        <div className='col-xl-8'>
                                                            <CustomInputField
                                                                type="file"
                                                                onChange={handleImageUpload}
                                                                onBlur={handleBlur}
                                                                value={values?.profileImage?.data?.url ?values?.profileImage?.data?.url:values.banner_img}
                                                                id="image"
                                                                name="image"
                                                                placeholder="image"

                                                            />
                                                        </div>
                                                        <div className='col-xl-4'>
                                                            {profileImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${profileImage?.data?.url}`} alt='profile_pic' style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "contain" }} />
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {values.banner_img && !profileImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${values.banner_img}`} alt='profile_pic' style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "contain" }} />
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {!values.image && !profileImage?.data?.url && (
                                                                <div className='border  rounded'><img id="avatar-image" src="https://st4.depositphotos.com/16940446/26122/v/450/depositphotos_261227048-stock-illustration-vinyl-banner-blank-white-isolated.jpg" alt="Profile Picture" style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "cover" }} /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <div className='row align-items-center'>
                                                        <div className='col-xl-10'>
                                                            <CustomInputField
                                                                type="file"
                                                                onChange={handleImageUploadLogo}
                                                                onBlur={handleBlur}
                                                                value={values?.profileImage?.data?.url ?values?.profileImage?.data?.url:values.logo_img}
                                                                id="logo_img"
                                                                name="logo_img"
                                                                placeholder="Logo"

                                                            />
                                                        </div>
                                                        <div className='col-xl-2'>
                                                            {logoImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${logoImage?.data?.url}`} alt='logo_pic' style={{ objectFit: "cover" }}/>
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {values.logo_img && !logoImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${values.logo_img}`} alt='logo_pic'style={{ objectFit: "cover" }} />
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {!values.image && !logoImage?.data?.url && (
                                                                <div className='border p-2 rounded-circle'><img id="avatar-image" src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw" alt="icon Picture" style={{ objectFit: "cover" }} /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right col-12">
                                                    <Link
                                                        to="/admin/list-colleges"
                                                        className="btn btn-outline-primary mr-2"
                                                    >
                                                        Close
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
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

export default CollagesFormData;

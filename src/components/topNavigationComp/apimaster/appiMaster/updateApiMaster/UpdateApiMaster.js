import { Link } from "react-router-dom"
import CustomTextArea from "../../../../../common/CustomTextArea";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomInputField from "../../../../../common/CustomInputField";
import { Formik } from "formik";
const initialValues = {
    apiName : "",
    apiUrl : "",
}
function UpdateApiMaster() {
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const validate = (values) => {
        let errors = {};
        if (!values.apiName) {
            errors.apiName = "API Name is required";
        }
        if (!values.apiUrl) {
            errors.apiUrl = "API URL is required";
        }
        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };

    return (
        <><Formik
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
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE API</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Api Name *"
                                                            value={values.apiName}
                                                            hasError={errors.apiName && touched.apiName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.apiName}
                                                            autoFocus={true}
                                                            id="apiName"
                                                        />
                                                    </div>
                                        <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="--Api Method-- "
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                        <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="--Response Type-- "
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                        <div className="col-xl-4 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Api URL *"
                                                            value={values.apiUrl}
                                                            hasError={errors.apiUrl && touched.apiUrl}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.apiUrl}
                                                            autoFocus={true}
                                                            id="apiUrl"
                                                        />
                                                    </div>
                                    </div>
                                    <div>
                                        <Link to='/admin/api-master' className="btn btn-danger light ms-1">Cancel</Link>
                                        <button className="btn btn-primary me-1">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  );
              }}
          </Formik>
        </>
    )
}
export default UpdateApiMaster
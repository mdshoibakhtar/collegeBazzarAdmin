import { Alert } from "antd";
import { useEffect, useState } from "react";

function DisterbuterFIlter({ submitForm, initialValues, params, getReailerDistIdAgainst }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        refer_id: '',
        kycStatus: 'verified'
    });
    const [error, setError] = useState('');
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);

    useEffect(() => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: ''
        });
    }, [params]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        const trimmedValue = value.trim();
        // Ensure mobile number starts with a country code and is followed by 7 to 10 digits
        const mobileRegex = /^\+[1-9]\d{1,3}\d{7,10}$/;

        // Validate phone number format including country code
        if (!mobileRegex.test(trimmedValue)) {
            setError('Invalid mobile number. Please enter a valid number with country code.');
            setIsSearchDisabled(true);
        } else {
            setError('');
            setIsSearchDisabled(false);
        }

        // Update form data with trimmed value
        setFormData((prevData) => ({ ...prevData, mobile: trimmedValue }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            // Prevent form submission if there's an error
            return;
        }
        submitForm(formData);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            refer_id: '',
            kycStatus: ''
        });
        getReailerDistIdAgainst(0);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">
                                            <b>
                                                Filter &nbsp; &nbsp;
                                                {`${params?.name}`}
                                            </b>
                                        </h4>
                                    </div>
                                    <form className="row g-3" onSubmit={handleSubmit}>
                                        <div className="col-md-3">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="mobile" className="form-label">
                                                Mobile Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="mobile"
                                                placeholder="Enter mobile number with country code"
                                                value={formData.mobile}
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="refer_id" className="form-label">
                                                {params?.name} Ref id
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="refer_id"
                                                placeholder={`Enter ${params?.name} ref id`}
                                                value={formData.refer_id}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="refer_id" className="form-label">
                                                Streams
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="refer_id"
                                                placeholder={`Enter Stream`}
                                                value={formData.streams}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="refer_id" className="form-label">
                                                Course
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="refer_id"
                                                placeholder={`Enter course`}
                                                value={formData.streams}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="kycStatus" className="form-label">
                                                KYC Status
                                            </label>
                                            <select
                                                className="form-control"
                                                id="kycStatus"
                                                value={formData.kycStatus}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>
                                                    Select Status
                                                </option>
                                                <option value="verified">Verified</option>
                                                <option value="unverified">Unverified</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            {error && (
                                                <Alert
                                                    message="Warning"
                                                    description={error}
                                                    type="warning"
                                                    showIcon
                                                    closable
                                                />
                                            )}
                                        </div>
                                        <div className="col-12 d-flex justify-content-between">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSearchDisabled}
                                            >
                                                SEARCH
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={resetForm}
                                            >
                                                RESET
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DisterbuterFIlter;

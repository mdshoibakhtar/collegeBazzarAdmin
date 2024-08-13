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
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Filter &nbsp; &nbsp;{`${params?.name}`}  </b></h4>
                                </div>
                                <form className="row cusforms" style={{ padding: "20px" }} onSubmit={handleSubmit}>
                                    <div className="form-group col-4">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter mobile number with country code"
                                            value={formData.mobile}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="refer_id">{params?.name} Ref id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="refer_id"
                                            placeholder={`Enter ${params?.name} ref id`}
                                            value={formData.refer_id}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="kycStatus">KYC Status</label>
                                        <select
                                            className="form-control"
                                            id="kycStatus"
                                            value={formData.kycStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Status </option>
                                            <option value="verified">verified </option>
                                            <option value="unverified">unverified </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12">
                                        {error ? (<Alert message="Warning" description={error} type="warning" showIcon closable />) : ""}
                                    </div>
                                    <div className="form-group col-12" style={{ margin: "20px 0" }}>
                                        <button type="submit" className="btn btn-primary" disabled={isSearchDisabled}>
                                            SEARCH
                                        </button>
                                        <button type="button" className="btn btn-warning" onClick={resetForm}>
                                            RESET
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisterbuterFIlter;

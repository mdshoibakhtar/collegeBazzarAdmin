import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PackageSelector.css';
import './Package.css';

const ChengePass = ({ retailerInfo,data }) => {
  console.log(data);
  
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { newPassword, confirmPassword } = passwords;

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage('New password should be at least 6 characters long.');
      return;
    }

    // Add logic to update the password here, such as an API call
    setSuccessMessage('Password updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '20px' }}>
      <h2 className="mb-4">Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <button type="submit" className="btn btn-primary w-100" style={{margin:"0"}}>
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChengePass;

import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon

function LeadInformation() {
  const [formData, setFormData] = useState({
    name: "Receptionist",
    assignedTo: "Rsoft",
    mobilePhone: "+91 8851746286",
    altPhone: "+91",
    email: "abarisapps@gmail.com",
    secondaryEmail: "",
    leadSource: "Offline",
    leadMedium: "",
    leadStatus: "New Lead",
    leadSubStatus: "",
    followUpOn: "29-07-2024 03:19:44 PM",
    reEngagement: "Spoken",
    address: "",
    cpName: "",
  });

  // State to manage individual edit mode for each input field
  const [isEditMode, setIsEditMode] = useState({
    name: false,
    assignedTo: false,
    mobilePhone: false,
    altPhone: false,
    email: false,
    secondaryEmail: false,
    leadSource: false,
    leadMedium: false,
    leadStatus: false,
    leadSubStatus: false,
    followUpOn: false,
    reEngagement: false,
    address: false,
    cpName: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Reset all fields to non-edit mode after submitting
    setIsEditMode(Object.keys(isEditMode).reduce((acc, field) => ({ ...acc, [field]: false }), {}));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {Object.keys(formData).map((field, index) => (
                  <div className="col-12 mb-2" key={index}>
                    <label>
                      <strong>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                      </strong>
                    </label>
                    <div className="input-container" style={{ position: "relative" }}>
                      <input
                        type="text"
                        className="form-control"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        disabled={!isEditMode[field]}
                        style={{
                          paddingRight: "30px", // Give space for the icon
                        }}
                      />
                      <FaPencilAlt
                        onClick={() => toggleEditMode(field)}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: isEditMode[field] ? "#28a745" : "#6c757d", // Color based on edit mode
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadInformation;

import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Importing the edit icon

function RequirementDetail() {
  // State to hold form data
  const [formData, setFormData] = useState({
    course: "MCA",
    interestedCourses: "Gold Mine,Excellene",
    courseType: "",
    budget: "25-30 Lakhs",
    location: "",
    fbFormId: "",
    fbFormName: "",
    fbPageName: "",
  });

  // State to manage individual edit mode for each field
  const [isEditMode, setIsEditMode] = useState({
    course: false,
    interestedCourses: false,
    courseType: false,
    budget: false,
    location: false,
    fbFormId: false,
    fbFormName: false,
    fbPageName: false,
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode for a specific field
  const toggleEditMode = (field) => {
    setIsEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle form submission (or other actions)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data updated:", formData);
    // After submission, disable all fields
    setIsEditMode({
      course: false,
      interestedCourses: false,
      courseType: false,
      budget: false,
      location: false,
      fbFormId: false,
      fbFormName: false,
      fbPageName: false,
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Course */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Course *: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      disabled={!isEditMode.course}
                    >
                      <option value="MCA">MCA</option>
                      <option value="BCA">BCA</option>
                      <option value="MBA">MBA</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("course")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.course ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Interested Courses */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Interested Courses: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="interestedCourses"
                      value={formData.interestedCourses}
                      onChange={handleInputChange}
                      disabled={!isEditMode.interestedCourses}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("interestedCourses")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.interestedCourses ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Course Type */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Course Type: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="courseType"
                      value={formData.courseType}
                      onChange={handleInputChange}
                      disabled={!isEditMode.courseType}
                    >
                      <option value="">Select Course Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                    </select>
                    <FaPencilAlt
                      onClick={() => toggleEditMode("courseType")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.courseType ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Budget: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      disabled={!isEditMode.budget}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("budget")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.budget ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>Location: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isEditMode.location}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("location")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.location ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Form ID */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Form ID: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fbFormId"
                      value={formData.fbFormId}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbFormId}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbFormId")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbFormId ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Form Name */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Form Name: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fbFormName"
                      value={formData.fbFormName}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbFormName}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbFormName")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbFormName ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>

                {/* FB Page Name */}
                <div className="col-12 mb-2">
                  <label>
                    <strong>FB Page Name: </strong>
                  </label>
                  <div className="input-container" style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="fbPageName"
                      value={formData.fbPageName}
                      onChange={handleInputChange}
                      disabled={!isEditMode.fbPageName}
                    />
                    <FaPencilAlt
                      onClick={() => toggleEditMode("fbPageName")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: isEditMode.fbPageName ? "#28a745" : "#6c757d",
                      }}
                    />
                  </div>
                </div>
              </div>

              {Object.values(isEditMode).some((mode) => mode) && (
                <button type="submit" className="btn btn-success mt-3">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequirementDetail;

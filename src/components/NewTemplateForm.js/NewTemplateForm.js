import React from "react";
import "./NewTemplateForm.css"; // Import the CSS file
import { Link } from "react-router-dom";

const NewTemplateForm = () => {
    return (
        <div className="form-container">
            <h2>New Template Message</h2>
            <form>
                <div className="form-group">
                    <label>Add Number<span>*</span></label>
                    <select className="form-control">
                        <option value="">Select Number</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <div className="form-group">
                    <label>Template Category<span>*</span></label>
                    <select className="form-control">
                        <option value="">Select Category...</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <div className="form-group">
                    <label>Template Name<span>*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Template Name" />
                </div>

                <div className="form-group">
                    <label>Select Language<span>*</span></label>
                    <select className="form-control">
                        <option value="">Select Language</option>
                        {/* Add more options here */}
                    </select>
                </div>

                <button type="submit" className="btn-next">Next</button>
            </form>
            <Link to="/utility-master" className="back-link">Go back to template list</Link>
        </div>
    );
};

export default NewTemplateForm;

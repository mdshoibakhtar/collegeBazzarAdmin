import { useState } from "react";
import AddTempleteModal from "./addTemplete/AddTempleteModal";

function ManageTemplete() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [show, setShow] = useState(false);

    const templates = [
        {
            _id: "1A1212D",
            userName: 'demo',
            templateName: 'testadcsda',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 16, 2024'
        },
        {
            _id: "1B1212D",
            userName: 'demo',
            templateName: 'dfbnvjfbdjvf',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'NONE',
            language: 'ar',
            status: 'APPROVED',
            createdAt: 'Aug 13, 2024'
        },
        {
            _id: "1C1212D",
            userName: 'demo',
            templateName: 'test_11_aug_24',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'TEXT',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 11, 2024'
        },
        {
            _id: "1D1212D",
            userName: 'demo',
            templateName: 'testing_with_aliya',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 6, 2024'
        },
        {
            _id: "1E1212D",
            userName: 'demo_user',
            templateName: 'welcome_message',
            phoneNumber: '+918765432109',
            templateType: 'customer_service',
            headerType: 'VIDEO',
            language: 'es',
            status: 'PENDING',
            createdAt: 'Aug 5, 2024'
        }
    ];

    const handleCheckboxChange = (event, user) => {
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser._id !== user._id));
        }
    };

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            setSelectedUsers(templates);
        } else {
            setSelectedUsers([]);
        }
    };

    return (
        <>
            <div className="card">
                <div className="mb-3 text-end">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(!show)}>
                        <span className="me-2 fs-4"><i class="fas fa-text-height"></i></span>Add Templete
                    </button>
                </div>
                <div style={{overflow:"auto"}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                <p className="m-0"><small style={{ fontSize: "0.8em" }}>Select All</small></p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="selectAll"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                </div>
                            </th>
                            <th>User Name</th>
                            <th>Template Name</th>
                            <th>Phone Number</th>
                            <th>Template Type</th>
                            <th>Header Type</th>
                            <th>Language</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template, index) => {
                            const isChecked = selectedUsers.some(user => user?._id === template?._id);
                            return (
                                <tr key={template._id}>
                                    <td>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={(e) => handleCheckboxChange(e, template)}
                                            />
                                        </div>
                                    </td>
                                    <td>{template.userName}</td>
                                    <td>{template.templateName}</td>
                                    <td>{template.phoneNumber}</td>
                                    <td>{template.templateType}</td>
                                    <td>{template.headerType}</td>
                                    <td>{template.language}</td>
                                    <td>{template.status}</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-eye"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
            <AddTempleteModal show={show} setShow={setShow} />
        </>
    );
}

export default ManageTemplete;

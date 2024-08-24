import { Form } from "formik";


function ManageSenderId() {
    const templates = [
        {
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

    return (
        <>
            <div className="card">
                <table className=''>
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="selectAll"
                                        // checked={selectAll}
                                        // onChange={handleSelectAll}
                                    />
                                </div>

                            </th>
                            <th>Header</th>
                            <th>User Assign To</th>
                            <th>PE Id</th>
                            <th>Template type</th>
                            <th>Header Type</th>
                            <th>Language</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template, index) => (
                            <tr>
                                <td>{template.userName}</td>
                                <td>{template.templateName}</td>
                                <td>{template.phoneNumber}</td>
                                <td>{template.templateType}</td>
                                <td>{template.headerType}</td>
                                <td>{template.language}</td>
                                <td>{template.status}</td>
                                <td>--</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManageSenderId

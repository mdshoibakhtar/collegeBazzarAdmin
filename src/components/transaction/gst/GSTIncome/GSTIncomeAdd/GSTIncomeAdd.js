import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const GSTIncomeAdd = () => {
    const [formData, setFormData] = useState({
        voucher: '',
        date: '',
        voucherAmount: '',
        taxType: ''
    });

    // State for dynamic expense and taxes data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on tax type
    const taxTypeData = {
        "GST 5%": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', Product: 'CGST (O/P)', rate: 6, amount: 0 },
            { name: 'SGST 6%', Product: 'SGST (O/P)', rate: 6, amount: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'CGST 2.5%', Product: 'CGST (O/P)', rate: 2.5, amount: 0 },
        ]
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Update expenses when tax type is selected
        if (e.target.name === 'taxType') {
            setExpenses(taxTypeData[e.target.value] || []);
        }
    };


    ////////
    const [rows, setRows] = useState([
        { id: 1, ExpenseAc: '', Product: '', HSNCode: '', Commodity: '', Amount: 0 },
        { id: 2, ExpenseAc: '', Product: '', HSNCode: '', Commodity: '', Amount: 0 },
        { id: 3, ExpenseAc: '', Product: '', HSNCode: '', Commodity: '', Amount: 0 },
        { id: 4, ExpenseAc: '', Product: '', HSNCode: '', Commodity: '', Amount: 0 },
    ]);

    // Function to handle value changes in the input fields
    const handleChange = (index, key, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [key]: value } : row
        );
        setRows(updatedRows);
    };

    // Function to render each row of the table
    const renderRow = (row, index) => (
        <tr key={row.id}>
            {/* Cr/Db Select */}
            <td>
                <select
                    value={row.ExpenseAc}
                    onChange={(e) => handleChange(index, 'ExpenseAc', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Cr">Cr</option>
                    <option value="Db">Db</option>
                </select>
            </td>

            {/* Account Name Select */}
            <td>
                <input
                    type="number"
                    value={row.HSNCode}
                    onChange={(e) => handleChange(index, 'Product', e.target.value)}
                />
            </td>

            {/* HSNCode Input */}
            <td>
                <input
                    type="number"
                    value={row.HSNCode}
                    onChange={(e) => handleChange(index, 'HSNCode', e.target.value)}
                />
            </td>

            {/* Commodity Input */}
            <td>
                <select
                    value={row.ExpenseAc}
                    onChange={(e) => handleChange(index, 'Commodity', e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="GST 5%">GST 5%</option>
                    <option value="GST 5%">GST 8%</option>
                </select>
            </td>

            {/* Amount Input */}
            <td>
                <input
                    type="number"
                    value={row.Amount}
                    onChange={(e) => handleChange(index, 'Amount', e.target.value)}
                />
            </td>

            {/* Delete Button */}
            <td>
                <button onClick={() => handleDeleteRow(index)}>🗑️</button>
            </td>
        </tr>
    );

    // Function to handle row deletion
    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    // Function to add a new row
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: rows.length + 1, ExpenseAc: '', Product: '', HSNCode: 0, Commodity: 0, Amount: 0 },
        ]);
    };


    /////
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add GST Expense Entry</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="date">Account Name </label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherAmount">Voucher No : </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherAmount"
                                            value={formData.voucherAmount}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher Amount"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Tax Type </label>
                                        <select
                                            className="form-control"
                                            name="taxType"
                                            value={formData.taxType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Invoice Type:</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherAmount">Doc Number : </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherAmount"
                                            value={formData.voucherAmount}
                                            onChange={handleInputChange}
                                            placeholder="Enter Doc Amount :"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherAmount">Doc Date : </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucherAmount"
                                            placeholder="Enter Doc Date :"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <table border="1" cellPadding="10">
                                        <thead>
                                            <tr>
                                                <th>Income A/c</th>
                                                <th>Product</th>
                                                <th>HSN Code</th>
                                                <th>Commodity</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
                                </div>


                                {/* Expense and Taxes Table */}
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Account Name</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {expenses.length > 0 ? (
                                                expenses.map((expense, index) => (
                                                    <tr key={index}>
                                                        <td>{expense.name}</td>
                                                        <td>{expense.Product}</td>
                                                        <td>{expense.rate}</td>
                                                        <td>{expense.amount}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        Amount expenses available for the selected tax type.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Total Amount */}
                                <div className="mt-3">
                                    <h4>
                                        Total Amount: {expenses.reduce((total, expense) => total + expense.amount, 0)}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default GSTIncomeAdd
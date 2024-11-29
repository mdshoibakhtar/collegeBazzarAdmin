import { Select } from "antd"
import { Button } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
const { Option } = Select;

const ReminderAdd = ({ ladgerOpenOf2 }) => {
    return (
        <div>
            <ToastContainer />
            <h4>Reminder Add</h4>
            <div className="container mt-4 card">
                <div>
                    <form className="row" >
                        {/* Name and Alias */}
                        <div className="mb-3 col-4">
                            <label htmlFor="name" className="form-label">Title</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="alias" className="form-label">Date</label>
                            <input type="date" className="form-control" id="alias" />
                        </div>

                        {/* Account Details */}
                        <div className="mb-3 col-4">
                            <label htmlFor="AC_name" className="form-label">Time</label>
                            <input type="time" className="form-control" id="AC_name" />
                        </div>
                        <div className="mb-3 col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Set Customer Reminder
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="IFSC_code" className="form-label">Assign To</label>
                            <Select
                                mode="multiple"
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select Departure"
                                optionFilterProp="children"

                            // value={row.country}
                            // onChange={(value) => handleInputChangeGroupCustomisePackage(index, "country", value)}
                            >
                                {/* {countryData?.map((loc) => (
                                    <Option key={loc._id} value={loc._id}>
                                        {loc.name}
                                    </Option>
                                ))} */}
                            </Select>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="branch_name" className="form-label">Notes</label>
                            <input type="text" className="form-control" id="branch_name" />
                        </div>
                        {/* Submit Button */}
                        <div className="mb-3 col-12">
                            <Button type="button" className="btn btn-primary" >
                                {/* {editId ? 'Update' : 'Add'} */}
                                Add
                            </Button>
                            <Button type="button" className="btn btn-danger" onClick={ladgerOpenOf2}>Cancle</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ReminderAdd
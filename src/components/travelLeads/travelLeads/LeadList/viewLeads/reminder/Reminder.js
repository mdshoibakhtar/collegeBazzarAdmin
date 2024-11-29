import { useState } from "react";
import { useParams } from "react-router-dom";
import ReminderAdd from "./reminderAdd/ReminderAdd";

const dummyData = [
    {
        id: 1,
        description: "Follow-up with client",
        date: "2024-10-12",
        remind: "2 days before",
        isNotified: true,
    },
    {
        id: 2,
        description: "Team meeting",
        date: "2024-11-05",
        remind: "1 day before",
        isNotified: false,
    },
    {
        id: 3,
        description: "Project deadline",
        date: "2024-12-20",
        remind: "1 week before",
        isNotified: true,
    },
    // Add more dummy data here if needed
];
const LeadReminder = () => {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    const [ladgerSet, setladgerSet] = useState(true)
    const ladgerOpenOf = (id = null) => {
        setladgerSet(false);
    };
    const ladgerOpenOf2 = () => {
        setladgerSet(true);
    };
    return (
        <>
            {/* <h4>{title}</h4> */}
            {ladgerSet ? (
                <div className="container mt-4 card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button type="button" className="btn btn-primary" onClick={ladgerOpenOf}>
                            + New Reminder
                        </button>
                        {/* <div className="form-group">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            style={{ width: "250px" }}
                        />
                    </div> */}
                    </div>

                    <div className="">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Title</th>
                                    <th scope="col text-center">Date</th>
                                    <th scope="col text-center">Time</th>
                                    <th scope="col text-center">Assign To</th>
                                    <th scope="col text-center">Set Customer Reminder</th>
                                    <th scope="col text-center">Set Customer Reminder</th>
                                    <th scope="col text-center">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td>{i + 1}</td> */}
                                    <td style={{ textAlign: 'center' }}>No Data Found !</td>
                                    {/* <td>{reminder.description}</td>
                                    <td>{reminder.date}</td>
                                    <td>{reminder.remind}</td>
                                    <td>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={reminder.isNotified}
                                                readOnly
                                            />
                                        </div>
                                    </td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>) : (
                <ReminderAdd ladgerOpenOf2={ladgerOpenOf2} />
            )}
        </>
    );
}

export default LeadReminder
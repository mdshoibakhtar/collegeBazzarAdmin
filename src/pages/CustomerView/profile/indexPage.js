import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaUser, FaAddressBook, FaHandshake, FaStickyNote, FaFileContract, FaFileInvoiceDollar, FaMoneyBillWave, FaProjectDiagram, FaTasks, FaTicketAlt, FaFile, FaLock, FaBell, FaMapMarkedAlt } from 'react-icons/fa'
function MainCustomerrView() {
    const parem = useParams()

    return (
        <>
            <h5 className='card m-2'>Hello Test Admin. You are added as admin to this customer.</h5>
            <div style={{ display: 'flex', padding: '20px' }}>
                {/* Sidebar */}

                <div style={{ width: '250px', padding: '0px', borderRight: '1px solid #ccc' }} className='card main-sidebar-cs'>

                    <ul>
                        <li><Link to={`/customer-view/${parem.id}`}><FaUser className="icon-sideb" /> Profile</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/ledgers`}><FaUser className="icon-sideb" /> Ledgers</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/contacts`}><FaAddressBook className="icon-sideb" /> Contacts</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/service`}><FaAddressBook className="icon-sideb" /> Service Request</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/keep-in-touch`}><FaHandshake className="icon-sideb" /> Keep In Touch</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/notes`}><FaStickyNote className="icon-sideb" /> Notes</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/proposals-view`}><FaFileContract className="icon-sideb" /> Proposals</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/estimates-view`}><FaFileInvoiceDollar className="icon-sideb" /> Estimates</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/expenses-view`}><FaMoneyBillWave className="icon-sideb" /> Expenses</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/projects-view`}><FaProjectDiagram className="icon-sideb" /> Projects</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/tasks-view`}><FaTasks className="icon-sideb" /> Tasks</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/tickets-view`}><FaTicketAlt className="icon-sideb" /> Tickets</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/files-view`}><FaFile className="icon-sideb" /> Files</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/vault-view`}><FaLock className="icon-sideb" /> Vault</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/reminders-view`}><FaBell className="icon-sideb" /> Reminders</Link></li>
                        <li><Link to={`/customer-view/${parem.id}/map-view`}><FaMapMarkedAlt className="icon-sideb" /> Map</Link></li>
                    </ul>
                </div>

                {/* Main content area */}
                <div style={{ marginLeft: '20px', flexGrow: 1 }}>

                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default MainCustomerrView;
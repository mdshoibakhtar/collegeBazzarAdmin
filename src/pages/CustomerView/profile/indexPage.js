import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaAddressBook, FaHandshake, FaStickyNote, FaFileContract, FaFileInvoiceDollar, FaMoneyBillWave, FaProjectDiagram, FaTasks, FaTicketAlt, FaFile, FaLock, FaBell, FaMapMarkedAlt } from 'react-icons/fa'
function MainCustomerrView() {

    return (
        <>
            <h5 className='card m-2'>Hello Test Admin. You are added as admin to this customer.</h5>
            <div style={{ display: 'flex', padding: '20px' }}>
                {/* Sidebar */}

                <div style={{ width: '250px', padding: '0px', borderRight: '1px solid #ccc' }} className='card main-sidebar-cs'>

                    <ul>
                        <li><Link to="/customer-view/1"><FaUser className="icon-sideb" /> Profile</Link></li>
                        <li><Link to="/customer-view/1/contacts"><FaAddressBook className="icon-sideb" /> Contacts</Link></li>
                        <li><Link to="/customer-view/1/keep-in-touch"><FaHandshake className="icon-sideb" /> Keep In Touch</Link></li>
                        <li><Link to="/customer-view/1/notes"><FaStickyNote className="icon-sideb" /> Notes</Link></li>
                        <li><Link to="/customer-view/1/proposals-view"><FaFileContract className="icon-sideb" /> Proposals</Link></li>
                        <li><Link to="/customer-view/1/estimates-view"><FaFileInvoiceDollar className="icon-sideb" /> Estimates</Link></li>
                        <li><Link to="/customer-view/1/expenses-view"><FaMoneyBillWave className="icon-sideb" /> Expenses</Link></li>
                        <li><Link to="/customer-view/1/projects-view"><FaProjectDiagram className="icon-sideb" /> Projects</Link></li>
                        <li><Link to="/customer-view/1/tasks-view"><FaTasks className="icon-sideb" /> Tasks</Link></li>
                        <li><Link to="/customer-view/1/tickets-view"><FaTicketAlt className="icon-sideb" /> Tickets</Link></li>
                        <li><Link to="/customer-view/1/files-view"><FaFile className="icon-sideb" /> Files</Link></li>
                        <li><Link to="/customer-view/1/vault-view"><FaLock className="icon-sideb" /> Vault</Link></li>
                        <li><Link to="/customer-view/1/reminders-view"><FaBell className="icon-sideb" /> Reminders</Link></li>
                        <li><Link to="/customer-view/1/map-view"><FaMapMarkedAlt className="icon-sideb" /> Map</Link></li>
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
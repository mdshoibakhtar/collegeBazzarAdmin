
import { FaGlobe, FaMapMarkerAlt, FaLandmark, FaClock, FaCalendarAlt, FaComment } from 'react-icons/fa';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
const SightseeingView = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'All Sightseeings',
        title_3: 'View Sightseeing',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>

                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">View Sightseeing</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p><FaGlobe color="red" /> <strong>Countries</strong></p>
                                        <p>India</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaMapMarkerAlt color="red" /> <strong>City</strong></p>
                                        <p>Delhi</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaLandmark color="red" /> <strong>Place Name</strong></p>
                                        <p>Visit</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaComment color="red" /> <strong>Description</strong></p>
                                        <p>Visit the Lal Qila</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Inclusion</strong></p>
                                        <p>Lunch</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Exclusion</strong></p>
                                        <p>Dinner, Snacks</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Duration</strong></p>
                                        <p>2</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Time</strong></p>
                                        <p>Any Time</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Timings (Open - Close)</strong></p>
                                        <p>10:00 AM</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaComment color="red" /> <strong>Remark</strong></p>
                                        <p>Good to visit</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Internal Remark 1</strong></p>
                                        <p>Good site</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Internal Remark 2</strong></p>
                                        <p>Old Heritage</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Start Time</strong></p>
                                        <p>10:00</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Close Day</strong></p>
                                        <p>-</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Transport</strong></p>
                                        <p>PVT</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SightseeingView
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import DashLead from "../../components/Dashboard-Lead/DashLead"

function DashboardLeadPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard",
        path_1: "/",
    }
    return <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className=" container" >
            <div className="row"><div className="col-lg-4">
                <h1 className="bg-warning text-white text-decoration-none rounded" >
                    LEAD DASHBOARD
                </h1>
            </div></div>

            <DashLead />
        </div>
    </>
}
export default DashboardLeadPage
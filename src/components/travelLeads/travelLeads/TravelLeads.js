import AllLeadS from "./AllLeads/AllLeads"
import { LeadFilter } from "./LeadFilter/LeadFilter"
import { LeadList } from "./LeadList/LeadList"



const TravelLeads = () => {
    return (
        <>
            <AllLeadS />
            <LeadFilter />
            <LeadList />
        </>
    )
}

export default TravelLeads
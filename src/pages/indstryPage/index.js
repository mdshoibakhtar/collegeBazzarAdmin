import React from 'react'
import AddIndustry from '../../components/industryComp/AddIndustry'
import ListIndustry from '../../components/industryComp/ListIndustry'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function IndustryPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Industry",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddIndustry />
            <ListIndustry />
        </>
    )
}

export default IndustryPage
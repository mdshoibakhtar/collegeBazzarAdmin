import React from 'react'
import AddUnit from '../../components/unitComp/AddUnit'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ListUnit from '../../components/unitComp/ListUnit'

function UnitPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Unit",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddUnit />
            <ListUnit />
        </>
    )
}

export default UnitPage
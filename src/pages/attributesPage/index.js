import React from 'react'
import AddAttribute from '../../components/attributesComp/AddAttribute'
import ListAttribute from '../../components/attributesComp/ListAttribute'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AttributesPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Attribute",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddAttribute />
            <ListAttribute />
        </>
    )
}

export default AttributesPage
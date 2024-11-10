import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AddSize from '../../components/sizeComp/AddSize'
import ListSize from '../../components/sizeComp/ListSize'

function SizePage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Size",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddSize />
            <ListSize />
        </>
    )
}

export default SizePage
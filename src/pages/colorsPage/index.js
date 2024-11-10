import React from 'react'
import AddColor from '../../components/colorsComp/AddColor'
import ListColor from '../../components/colorsComp/ListColor'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function ColorsPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Color",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddColor />
            <ListColor />
        </>
    )
}

export default ColorsPage
import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AddBrand from '../../components/brandComp/AddBrand'
import ListBrand from '../../components/brandComp/ListBrand'

function BrandPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Brand",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddBrand />
            <ListBrand />
        </>
    )
}

export default BrandPage
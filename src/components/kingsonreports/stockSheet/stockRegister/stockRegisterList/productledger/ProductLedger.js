import React from 'react'
import ProductLedgerList from './productLedgerlist/ProductLedgerlist'
import Breadcrumbs from '../../../../../../common/breadcrumb/Breadcrumbs'

function ProductLedger() {
    const breadCrumbsTitle = {
        id: "2324",
        title_1: "Stock Sheet",
        title_1: "Stock Register",
        title_1: "Product Ledger",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ProductLedgerList />
        </>
    )
}

export default ProductLedger
import React from 'react'
import InvoiceSearchFilter from './invoiceSearchFilter/InvoiceSearchFilter'
import InvoiceSearchList from './invoceSearchList/InvoiceSearchList'

function InvoiceSearch() {
    return (
        <>
            <InvoiceSearchFilter />
            <InvoiceSearchList />
        </>
    )
}

export default InvoiceSearch
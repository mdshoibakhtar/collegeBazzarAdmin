import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import InvoiceForm from './invoiceForm/InvoiceForm'
import InvoiceList from './invoiceList/InvoiceList'
import InvoiceSearch from './invoiceSearch/InvoiceSearch'

function InvoiceTab() {
  const breadCrumbsTitle = {
    title_1: "Invoice"
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <section className='card m-4'>
        <Tabs
          defaultActiveKey="Invoice search"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="invoice" title="Invoice">
            <InvoiceForm />
            <InvoiceList />
          </Tab>
          <Tab eventKey="Invoice search" title="Invoice search">
            <InvoiceSearch />
          </Tab>
        </Tabs>
      </section>
    </>
  )
}

export default InvoiceTab

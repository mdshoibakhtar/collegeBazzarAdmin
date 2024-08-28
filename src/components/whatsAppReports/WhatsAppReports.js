import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

function WhatsAppReports() {
    return (
        <Tabs
            defaultActiveKey="wacampingreports"
            id="uncontrolled-tab-example"
        >

            <Tab eventKey="wacampingreports" title="Wa Camping Reports">
                Wa Camping Reports
            </Tab>
            <Tab eventKey="Customised SMS" title="wa-message-logs">
                wa-message-logs
            </Tab>
            <Tab eventKey="Bulk Upload Sms" title="inbound-msgs">
                inbound-msgs
            </Tab>
            <Tab eventKey="Bulk Upload Sms" title="wa-clicker-report">
                wa-clicker-report
            </Tab>
            <Tab eventKey="Bulk Upload Sms" title="wa-report-download">
                wa-report-download
            </Tab>
        </Tabs>
    )
}

export default WhatsAppReports

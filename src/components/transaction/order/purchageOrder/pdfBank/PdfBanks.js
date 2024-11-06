import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PdfBanks = () => {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFFFFF',
            padding: 20,
        },
        container: {
            border: '1px solid black',
            padding: 10,
            fontSize: 10,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        boldText: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        table: {
            display: 'table',
            width: '100%',
            border: '1px solid black',
            marginTop: 10,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableCol: {
            width: '20%',
            borderRight: '1px solid black',
            padding: 5,
        },
        tableHeader: {
            width: '20%',
            borderRight: '1px solid black',
            backgroundColor: '#f0f0f0',
            padding: 5,
            fontWeight: 'bold',
        },
        totalRow: {
            flexDirection: 'row',
            borderTop: '1px solid black',
            padding: 5,
        },
        noteSection: {
            borderTop: '1px solid black',
            marginTop: 10,
            paddingTop: 5,
        },
        footer: {
            marginTop: 20,
            textAlign: 'right',
            fontStyle: 'italic',
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text>HEAD OFFICE</Text>
                        <Text style={styles.title}>(Purchase Order)</Text>
                        <Text>Original</Text>
                    </View>

                    {/* Quote Details */}
                    <View style={styles.row}>
                        <Text>Quote No: <Text style={styles.boldText}>1</Text></Text>
                        <Text>Quote Date: <Text style={styles.boldText}>04/11/2024</Text></Text>
                        <Text>Valid Till: <Text style={styles.boldText}>15/11/2024</Text></Text>
                    </View>

                    {/* Recipient Details */}
                    <Text>M/s: <Text style={styles.boldText}>ABARIS SOFTCH PVT. LTD..</Text></Text>
                    <Text>M: 8851746286</Text>

                    {/* Subject and Message */}
                    <Text>Subject: TITLE HERE</Text>
                    <Text>We thank you for giving us the opportunity to Quote for valuable goods. We are pleased to quote you our best rate offer for the same as under.</Text>

                    {/* Table Header */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No.</Text>
                            <Text style={styles.tableHeader}>Particular</Text>
                            <Text style={styles.tableHeader}>Qty</Text>
                            <Text style={styles.tableHeader}>Unit</Text>
                            <Text style={styles.tableHeader}>Rate</Text>
                            <Text style={styles.tableHeader}>Amount</Text>
                        </View>

                        {/* Table Rows */}
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>1</Text>
                            <Text style={styles.tableCol}>AGRI PRODUCT 100 ML</Text>
                            <Text style={styles.tableCol}>64</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}>296.61</Text>
                            <Text style={styles.tableCol}>18,978.04</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}>2</Text>
                            <Text style={styles.tableCol}>ACID SLURY</Text>
                            <Text style={styles.tableCol}>4</Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}>169.49</Text>
                            <Text style={styles.tableCol}>637.96</Text>
                        </View>

                        {/* Total Row */}
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Total Qty</Text>
                            <Text style={{ width: '20%' }}>68.00</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Sub Total</Text>
                            <Text style={{ width: '20%' }}>19,616.00</Text>
                        </View>
                        <View style={styles.totalRow}>
                            <Text style={{ width: '80%' }}>Grand Total</Text>
                            <Text style={{ width: '20%' }}>19,616.00</Text>
                        </View>
                    </View>

                    {/* Amount in Words */}
                    <Text>Rupees: Nineteen Thousand Six Hundred Sixteen Only</Text>

                    {/* Notes Section */}
                    <View style={styles.noteSection}>
                        <Text>Notes: Suddep</Text>
                        <Text>Bank: 123 | A/C: 125231184616 | IFSC No: 123</Text>
                    </View>

                    {/* Terms & Conditions */}
                    <Text>Terms & Condition:</Text>
                    <Text>1. Incase item(s) offered have any adverse impact on Environment, Health & Safety, please specify relevant details in your quote categorically. Kindly provide applicable legislation for the same.</Text>

                    {/* Footer */}
                    <Text style={styles.footer}>HEAD OFFICE</Text>
                    <Text style={styles.footer}>( Authorized Signatory )</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PdfBanks;

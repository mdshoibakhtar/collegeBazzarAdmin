import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    pdf,
} from "@react-pdf/renderer";
import { useState } from "react";


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffff",
        color: "#000",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});
const PdfBank = () => {
    const [pdfBlob, setPdfBlob] = useState(null);

    const createPdfBlob = async () => {
        const doc = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Hello</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>World</Text>
                    </View>
                </Page>
            </Document>
        );

        const blob = await pdf(doc).toBlob();
        setPdfBlob(blob);
    };

    return (
        <div>
            <PDFViewer style={styles.viewer}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>Hello</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>World</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>

            {/* Download Button */}
            <button onClick={createPdfBlob}>
                Generate PDF
            </button>
            {pdfBlob && (
                <a href={URL.createObjectURL(pdfBlob)} download="BankPayment.pdf">
                    <button>Download PDF</button>
                </a>
            )}
        </div>
    );
}

export default PdfBank
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Estimate = () => {
  const estimateDetails = {
    estimateNumber: "EST-000001",
    to: "Gothaer Versicherungen in Gothaer",
    address: "Wittener Str. 3, 44149 Dortmund, Germany",
    city: "Dortmund Nordrhein-Westfalen, DE 44149",
    estimateDate: "2024-06-21",
    expiryDate: "2024-06-28",
    saleAgent: "Test Admin",
    items: [
      { id: 1, name: "1111", qty: 1, rate: 1, tax: "0%", amount: 1 },
    ],
    subTotal: 1,
    total: 1,
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Estimate", 10, 10);
    doc.text(`EST-${estimateDetails.estimateNumber}`, 10, 20);
    doc.text(`To: ${estimateDetails.to}`, 10, 30);
    doc.text(estimateDetails.address, 10, 40);
    doc.text(estimateDetails.city, 10, 50);
    doc.text(`Estimate Date: ${estimateDetails.estimateDate}`, 10, 60);
    doc.text(`Expiry Date: ${estimateDetails.expiryDate}`, 10, 70);
    doc.text(`Sale Agent: ${estimateDetails.saleAgent}`, 10, 80);
    
    doc.autoTable({
      startY: 90,
      head: [["#", "Item", "Qty", "Rate", "Tax", "Amount"]],
      body: estimateDetails.items.map(item => [
        item.id,
        item.name,
        item.qty,
        `$${item.rate.toFixed(2)}`,
        item.tax,
        `$${item.amount.toFixed(2)}`,
      ]),
    });

    doc.text(`Sub Total: $${estimateDetails.subTotal.toFixed(2)}`, 140, doc.lastAutoTable.finalY + 10);
    doc.text(`Total: $${estimateDetails.total.toFixed(2)}`, 140, doc.lastAutoTable.finalY + 20);

    doc.save("estimate.pdf");
  };

  return (
    <div className="custom-container">
      <div className="custom-header">
        <h2>{estimateDetails.estimateNumber}</h2>
        <p>To: {estimateDetails.to}</p>
        <p>{estimateDetails.address}<br />{estimateDetails.city}</p>
        <p>
          Estimate Date: {estimateDetails.estimateDate}<br />
          Expiry Date: {estimateDetails.expiryDate}<br />
          Sale Agent: {estimateDetails.saleAgent}
        </p>
      </div>

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {estimateDetails.items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>${item.rate.toFixed(2)}</td>
              <td>{item.tax}</td>
              <td>${item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="custom-totals">
        <table>
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>${estimateDetails.subTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${estimateDetails.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={downloadPDF} className="custom-btn">Download PDF</button>
    </div>
  );
};

export default Estimate;

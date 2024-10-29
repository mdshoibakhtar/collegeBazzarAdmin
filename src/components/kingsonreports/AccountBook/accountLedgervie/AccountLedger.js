import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "antd";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { deleteAccLedgerById, getAccLedgerByPage } from "../../../../api/login/Login";
import Loadar from "../../../../common/loader/Loader";
import AccountSummary from "./AccountSummary";

const AccountLedgerView = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [fromDate, setFromDate] = useState(new Date().toISOString().split("T")[0]);
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  const param = useParams();

  const getFloorMasters = async (page) => {
    setLoading(true);
    try {
      const res = await getAccLedgerByPage(page, count, fromDate, toDate);
      setTotalCount(res?.totalCount);
      setData(res?.data);
      setPage(page);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
    setLoading(false);
  };

  const deleteBlockAdd = async (id) => {
    setLoading(true);
    try {
      await deleteAccLedgerById(id);
      let backList = totalCount % 11 === 0 ? page - 1 : page;
      getFloorMasters(backList);
    } catch (error) {
      console.error("Failed to delete data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFloorMasters(page);
  }, [page, fromDate, toDate]);

  const onChangeVal = (e) => {
    getFloorMasters(e - 1);
  };

  const handleDateFilterChange = () => {
    getFloorMasters(0);
  };

  const exportToPDF = () => {
    const input = document.getElementById("tableToExport");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("account_ledger.pdf");
    });
  };

  return (
    <div>
      {loading && <Loadar />}
      <div className="d-flex">
        <h4>Account Ledger Report</h4>
        <div className="d-flex" style={{ marginLeft: "20px" }}>
          <div className="me-3 d-block">
            {/* <label>From Date:</label> */}
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="me-3  d-block">
            {/* <label>To Date:</label> */}
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "end" }}>
            <button className="btn btn-primary" onClick={handleDateFilterChange}>
              Apply Filters
            </button>
          </div>
          <button className="btn btn-success" onClick={exportToPDF}>
            Download PDF
          </button>
        </div>
      </div>
      <div className="container mt-4 card">

        {/* Filter Section */}
        <AccountSummary />
        <div className="d-flex justify-content-between align-items-center mb-3">

         
        </div>

        <div id="tableToExport" style={{ overflow: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Entry Date</th>
                <th scope="col">Vch No</th>
                <th scope="col">Vch Type</th>
                <th scope="col">Account Ledger Name</th>
                <th scope="col">Credit Amt</th>
                <th scope="col">Debit Amt</th>
                <th scope="col">Closing Amt</th>
                <th scope="col">Cl Amt Type</th>
                <th scope="col">Chq. No</th>
                <th scope="col">Chq. Date</th>
                <th scope="col">Narration</th>
                <th scope="col">Branch</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ledger, i) => (
                <tr key={ledger.id}>
                  <td>{ledger.date}</td>
                  <td>{ledger.no}</td>
                  <td>{ledger.type}</td>
                  <td>{ledger.accountName}</td>
                  <td>{ledger.credit}</td>
                  <td>{ledger.debit}</td>
                  <td>{ledger.closing}</td>
                  <td>{ledger.cl}</td>
                  <td>{ledger.chqNo}</td>
                  <td>{ledger.chqDate}</td>
                  <td>{ledger.narration}</td>
                  <td>{ledger.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            defaultCurrent={1}
            onChange={onChangeVal}
            total={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountLedgerView;

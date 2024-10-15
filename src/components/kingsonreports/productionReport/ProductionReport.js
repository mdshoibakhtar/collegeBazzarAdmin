import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { useState, useEffect } from "react";
import { IoEyeSharp, IoSearch } from "react-icons/io5";
import ExportFile from "../../../common/exportFile/ExportFile";

function ProductionReport() {
  const [receipts, setReceipts] = useState([]);
  const [selectedReceipts, setSelectedReceipts] = useState(new Set());

  useEffect(() => {
    // Mock fetch data function
    const fetchReceipts = async () => {
      // Fetch data from API or some source
      const data = [
        {
          id: 1,
          date: "25/04/2024",
          No: "1",
          productName: "ACID SLURY",
          rate: "1000",
          quantity: "10",
          Amount: "10000",
          batchNo: "",
          mfgDate: "",
          expDate: "",
          location: "",
        },
        {
          id: 2,
          date: "25/04/2024",
          No: "1",
          productName: "ACID SLURY",
          rate: "1000",
          quantity: "10",
          Amount: "10000",
          batchNo: "",
          mfgDate: "",
          expDate: "",
          location: "",
        },
        {
          id: 3,
          date: "25/04/2024",
          No: "1",
          productName: "ACID SLURY",
          rate: "1000",
          quantity: "10",
          Amount: "10000",
          batchNo: "",
          mfgDate: "",
          expDate: "",
          location: "",
        },
        {
          id: 4,
          date: "25/04/2024",
          No: "1",
          productName: "ACID SLURY",
          rate: "1000",
          quantity: "10",
          Amount: "10000",
          batchNo: "",
          mfgDate: "",
          expDate: "",
          location: "",
        },
      ];
      setReceipts(data);
    };

    fetchReceipts();
  }, []);

  const handleCheckboxChange = (id) => {
    const updatedSelection = new Set(selectedReceipts);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedReceipts(updatedSelection);
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const newSelection = isChecked
      ? new Set(receipts.map((receipt) => receipt.id))
      : new Set();
    setSelectedReceipts(newSelection);
  };

  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Production Stock In Report</h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    {/* <Link
                      className="btn btn-danger btn-sm"
                      to="/receiptregister"
                    >
                      <IoSettingsOutline className="fs-4 mb-1" /> GSTR Integrity
                    </Link> */}

                    <span className="btn btn-primary btn-sm">
                      <IoSearch />
                      <input
                        type="text"
                        className="from-control"
                        placeholder="Search..."
                      />
                    </span>

                    <span>
                      <ExportFile />
                    </span>

                    {/* <Button
                        className="btn btn-primary btn-sm bg-primary"
                        type="button"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={() => setShow(true)}
                      >
                        <FaFileAlt className="mb-1 me-1" />
                        Batch Payments
                      </Button> */}
                  </div>
                </div>
                <div className="dataTables_wrapper no-footer">
                  <table className="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row">
                        <th>
                          <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectedReceipts.size === receipts.length}
                          />
                        </th>
                        <th>Date</th>
                        <th>No </th>
                        <th>Product Name</th>
                        <th>Rate</th>
                        <th>Quatity</th>
                        <th>Amount</th>
                        <th>Batch No</th>
                        <th>Mfg. Date</th>
                        <th>Exp. Date</th>
                        <th>Location</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {receipts.map((receipt) => (
                        <tr key={receipt.id} role="row">
                          <td>
                            <input
                              type="checkbox"
                              checked={selectedReceipts.has(receipt.id)}
                              onChange={() => handleCheckboxChange(receipt.id)}
                            />
                          </td>
                          <td>{receipt.date}</td>
                          <td>{receipt.No}</td>
                          <td>{receipt.productName}</td>
                          <td>{receipt.rate}</td>
                          <td>{receipt.quantity}</td>
                          <td>{receipt.amount}</td>
                          <td>{receipt.batchNo}</td>
                          <td>{receipt.mfgDate}</td>
                          <td>{receipt.expDate}</td>
                          <td>{receipt.location}</td>
                          <td>
                            <div className="d-flex">
                              <Link
                                to="productionEntry"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Link
                                to="productionEntry"
                                className="btn btn-secondary shadow btn-xs sharp me-1"
                              >
                                <IoEyeSharp className="fa fa-pencil " />
                              </Link>
                              <Popconfirm
                                title="Delete banner!"
                                description="Are you sure to delete?"
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-danger shadow btn-xs sharp"
                                >
                                  <i className="fa fa-trash" />
                                </Link>
                              </Popconfirm>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    role="status"
                    aria-live="polite"
                  >
                    Total {receipts.length} entries
                  </div>
                  <div className="dataTables_paginate paging_simple_numbers">
                    <Pagination defaultCurrent={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />
    </>
  );
}

export default ProductionReport;
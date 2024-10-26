import React from "react";
import { Link } from "react-router-dom";

export const PurchaseInvoiceType = () => {
  const sales = [
    {
      id: 1,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
    {
      id: 2,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
    {
      id: 3,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
  ];

  console.log(sales);
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex flex-col flex-lg-row justify-content-between">
            <h2>List Of Sales Invoice</h2>
            <div className="mb-3 d-flex align-items-center gap-2">
              <label
                for="exampleInputPassword1"
                className="form-label text-nowrap"
              >
                Fast Search (F1) :
              </label>
              <input
                type="text"
                className=" form-control"
                id="exampleInputPassword1 "
              />
            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-plus"></i>
              <Link to="/add-purchase-invoice-type">ADD</Link >
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-pen-to-square"></i>
              <span>EDIT</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-eye"></i>
              <span>VIEW</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-trash"></i>
              <span>DELETE</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span>REFRESH</span>
            </button>
          </div>

          <div className="d-flex gap-4 justify-content-between bg-light">
            <p>Drag a column header and drop it here to group by that column</p>
            <button className="btn btn-link align-items-center d-flex gap-4">
              <i className="fa-solid fa-file-excel"></i>
              <i className="fa-solid fa-file"></i>
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="align-items-center">
                  <th>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="selectAll"
                      />
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Name</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Sales A/c Name</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Tax Type</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex justify-content-between">
                      <span>Form Name</span>
                      <i className="fa-solid fa-filter"></i>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sales.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`checkbox-${item.id}`}
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.salesName}</td>
                    <td>{item.taxType}</td>
                    <td>{item.formName || "-"}</td>{" "}
                    {/* Display '-' if formName is empty */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Pagination } from "antd";

function BankBook({ tittle, data, page, count, handlePageChange }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);





  // Handle the select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]); // Uncheck all
    } else {
      setSelectedItems(data?.voucher.map((item) => item.AccLedgerName)); // Check all
    }
    setSelectAll(!selectAll); // Toggle select all state
  };

  // Handle individual checkbox selection
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item.AccLedgerName)) {
      setSelectedItems(selectedItems.filter((name) => name !== item.AccLedgerName));
    } else {
      setSelectedItems([...selectedItems, item.AccLedgerName]);
    }
  };

  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">{tittle} Book</h4>
                  </div>
                  <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                    <div className="dt-buttons">
                      <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" type="button">
                        <span>
                          <i className="fa-solid fa-file-excel" /> Export Report
                        </span>
                      </button>
                    </div>
                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid">
                      <thead>
                        <tr role="row">
                          <th style={{ width: "50px" }}>
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th style={{ width: "150px" }}>Date</th>
                          <th style={{ width: "150px" }}>Account Name</th>
                          <th style={{ width: "150px" }}>Closing Balance</th>
                          <th style={{ width: "150px" }}>Cr</th>
                          <th style={{ width: "150px" }}>Dr</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.voucher?.map((item, i) => (
                          <tr role="row" key={i}>
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedItems.includes(item.AccLedgerName)}
                                onChange={() => handleCheckboxChange(item)}
                              />
                            </td>
                            <td>{new Date(item?.AccLedgerEntryDateTime).toLocaleDateString("en-GB")}</td>

                            <td>{item?.AccLedgerName}</td>
                            <td>{item?.closing_amount}</td>
                            <td>{item?.crAmt}</td>
                            <td>{item?.drAmt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="dataTables_info" role="status" aria-live="polite">
                      Total {data?.totalCount} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers">
                      <Pagination
                        current={page}
                        pageSize={count}
                        total={data?.totalCount}
                        onChange={handlePageChange}
                      />
                    </div>
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

export default BankBook;

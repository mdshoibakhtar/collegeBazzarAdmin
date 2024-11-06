import { ToastContainer } from "react-toastify";
import { Popconfirm } from "antd";
import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function ProfitLoss() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption mb-1">
                  <h4 className="heading mb-0">Profit Loss</h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
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

                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="dataTables_wrapper no-footer">
                        <table
                          className="table dataTable no-footer"
                          role="grid"
                        >
                          <thead>
                            <tr>
                              <th colSpan={3} className="text-center bg-dark">
                                <b className="text-white">Income</b>
                              </th>
                            </tr>
                            <tr role="row">
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th> Name</th>
                              <th>Credit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>Gross Profit 113.36%</td>
                              <td>34,006.69</td>
                            </tr>

                            <tr role="row">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>PROFIT & LOSS A/C</td>
                              <td>89,13,567.90</td>
                            </tr>

                            <tr role="row">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td></td>
                              <td>89,47,574.59</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* ---second---col */}
                    <div className="col-lg-6">
                      <div className="dataTables_wrapper no-footer">
                        <table
                          className="table dataTable no-footer"
                          role="grid"
                        >
                          <thead>
                            <tr className="mt-1">
                              <th colSpan={3} className="text-center bg-dark">
                                <b className="text-white">Expense</b>
                              </th>
                            </tr>
                            <tr role="row">
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Name</th>
                              <th>Debit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>Net Profit 29825.25%</td>
                              <td>89,47,574.59</td>
                            </tr>

                            <tr role="row">
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>Advans</td>
                              <td>6,000.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default ProfitLoss;

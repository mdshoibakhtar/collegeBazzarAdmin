import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDelete, usersList } from "../../../../api/login/Login";
import Loadar from "../../../../common/loader/Loader";
import { Popconfirm, message } from "antd";
import { baseUrlImage } from "../../../../baseUrl";
import ExportPdf from "../../../../common/exportPdf/ExportPdf";
import { getUserData } from "../../../additionalReports/dmtReportSearch/dmtReportSearchFill/DmtReportSearchFill";

function Users() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const getListUsers = async () => {
    setLoading(true);
    try {
      const res = await usersList();
      setData(res?.data);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getListUsers();
  }, []);

  const deleteCurrency = async (id) => {
    setLoading(true);
    try {
      await userDelete(id);
      getListUsers();
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  const confirm = (id) => {
    deleteCurrency(id);
    message.success("Delete Successfull!");
  };
  const cancel = (e) => {
    // console.log(e);
    message.error("Cancle Successfull!");
  };
  return (
    <section className="ListDistributer exppdf">
      {loading && <Loadar />}
      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">
                    <b>USER LIST - </b>
                  </h4>
                  <div>
                    <Link
                      className="btn btn-primary btn-sm"
                      to="/admin/user/add-user"
                      role="button"
                      aria-controls="offcanvasExample"
                    >
                      + ADD USER{" "}
                    </Link>
                    {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    <ExportPdf/>
                  </div>
                </div>
                <div
                  id="empoloyees-tblwrapper_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                  <table
                    id="empoloyees-tblwrapper"
                    className="table dataTable no-footer"
                    role="grid"
                    aria-describedby="empoloyees-tblwrapper_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-sort="ascending"
                          aria-label="Employee ID: activate to sort column descending"
                          style={{ width: "122.312px" }}
                        >
                          User ID
                        </th>

                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Department: activate to sort column ascending"
                          style={{ width: "156.475px" }}
                        >
                          Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Contact Number: activate to sort column ascending"
                          style={{ width: "161.675px" }}
                        >
                          Profile
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Contact Number: activate to sort column ascending"
                          style={{ width: "161.675px" }}
                        >
                          DOB
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Contact Number: activate to sort column ascending"
                          style={{ width: "161.675px" }}
                        >
                          Adhaar Number
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Contact Number: activate to sort column ascending"
                          style={{ width: "161.675px" }}
                        >
                          Pan Number
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="empoloyees-tblwrapper"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Contact Number: activate to sort column ascending"
                          style={{ width: "161.675px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data?.map((item, i) => {
                          return (
                            <tr role="row" className="odd">
                              <td className="sorting_1">
                                <span>{i + 1}</span>
                              </td>
                              <td>{item?.name}</td>
                              <td>
                                <img
                                  src={`${baseUrlImage}${item?.profile}`}
                                  alt="profile"
                                  width={50}
                                  height={50}
                                  className="rounded"
                                />
                              </td>

                              <td>{item?.dob}</td>
                              <td>{item?.adhaar_number} </td>
                              <td>{item?.pan_number} </td>
                              <td>
                                <div className="d-flex">
                                  <Link
                                    to={`/admin/update-user/${item?._id}`}
                                    className="btn btn-primary shadow btn-xs sharp me-1"
                                  >
                                    <i className="fa fa-pencil" />
                                  </Link>
                                  <Popconfirm
                                    title="Delete Currency !"
                                    description="Are you sure to delete ?"
                                    onConfirm={() => confirm(item?._id)}
                                    onCancel={cancel}
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
                          );
                        })}
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    id="empoloyees-tblwrapper_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 12 entries
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="empoloyees-tblwrapper_paginate"
                  >
                    <a
                      className="paginate_button previous disabled"
                      aria-controls="empoloyees-tblwrapper"
                      data-dt-idx={0}
                      tabIndex={0}
                      id="empoloyees-tblwrapper_previous"
                    >
                      <i className="fa-solid fa-angle-left" />
                    </a>
                    <span>
                      <a
                        className="paginate_button current"
                        aria-controls="empoloyees-tblwrapper"
                        data-dt-idx={1}
                        tabIndex={0}
                      >
                        1
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="empoloyees-tblwrapper"
                        data-dt-idx={2}
                        tabIndex={0}
                      >
                        2
                      </a>
                    </span>
                    <a
                      className="paginate_button next"
                      aria-controls="empoloyees-tblwrapper"
                      data-dt-idx={3}
                      tabIndex={0}
                      id="empoloyees-tblwrapper_next"
                    >
                      <i className="fa-solid fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;

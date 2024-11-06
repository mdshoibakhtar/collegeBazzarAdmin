import React from 'react'
import Loadar from '../../../../common/loader/Loader'
import { Pagination, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function DesignationMasterList({ data, page, count, cancel, confirm, loading,totalCount,onChangeVal }) {

  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0"> Designation List </h4>
                    <div>
                      {/* <Link className="btn btn-primary btn-sm" to="/add-staff-prmision" role="button" aria-controls="offcanvasExample">+ ADD STAFF</Link> */}
                      {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                    </div>
                  </div>
                  <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                    <thead>
                      <tr role="row">

                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                          S.No
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                          Designation Name
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Designation activate to sort column ascending" style={{ width: '156.475px' }}>
                          Status</th>

                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                          Actions </th>

                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item, i) => {
                        return <tr role="row" className="odd">
                          <td>
                            {(i + 1) + (page * count)}
                          </td>

                          <td>
                            {item?.name}
                          </td>
                          <td>
                            <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.isActive === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.isActive === false ? '0.8rem' : ''}` }}>{item?.isActive == true ? 'Active' : 'In Active'}</span>
                          </td>
                          <td>
                            <div className="d-flex">
                              <Link to={`/designation-master/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                              <Popconfirm
                                title="Delete Designation"
                                description="Are you sure to delete ?"
                                onConfirm={() => confirm(item?._id)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                              </Popconfirm>
                            </div>

                          </td>

                        </tr>
                      })}

                    </tbody>
                  </table>
                    < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                      Total {totalCount} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                      <Pagination
                      // showSizeChanger
                      // onShowSizeChange={''}

                      defaultCurrent={1}
                      onChange={onChangeVal}
                      total={totalCount}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <ToastContainer className={"text-center"} />
      {loading ? <Loadar /> : ""}
    </>
  )
}


export default DesignationMasterList

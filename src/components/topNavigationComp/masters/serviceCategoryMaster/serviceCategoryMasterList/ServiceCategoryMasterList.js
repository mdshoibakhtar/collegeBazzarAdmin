import { Link } from "react-router-dom"
import { ServiceCategoryDelete, getServiceCategoryByPagination } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Loadar from "../../../../../common/loader/Loader";


function ServiceCategoryMasterList() {
    const [categoryData, setCategoryData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [pages, setPages] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const getCurrencyList = async (num) => {
        setLoading(true)
        try {
            const data = await getServiceCategoryByPagination(count, num)
            setCategoryData(data?.data)
            setTotalCount(data.totalCount)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    const deleteCurrency = async (id) => {
        setLoading(true)
        try {
            await ServiceCategoryDelete(id)
            getCurrencyList(pages)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getCurrencyList(pages)
    }, [])


    const confirm = (id) => {
        deleteCurrency(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    const onChangeVal = (e) => {
        setPages(e - 1)
        getCurrencyList(pages)
    };
    return (
        <>
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">STREAM MASTER</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-stream-category" role="button" aria-controls="offcanvasExample">+ Create stream</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                Stream Name
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Meta Title
                                            </th>

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Meta Description
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Meta Keyword
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoryData && categoryData?.map((item) => {
                                            return <tr role="row" className="odd">
                                                <td className="sorting_1"><span>{item?.name}</span></td>
                                                <td>
                                                    {item?.meta_title}
                                                </td>
                                                <td>
                                                    {item?.meta_description}
                                                </td>
                                                <td>
                                                    {item?.meta_keyword}
                                                </td>
                                                <td>
                                                    <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/update-stream-category/${item?.id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete Stream !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?.id)}
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
            </div >
        </>
    )
}
export default ServiceCategoryMasterList
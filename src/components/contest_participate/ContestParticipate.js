import { message, Pagination, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ContestParticipateList, DeleteParticipate } from '../../api/login/Login';
import ParticipateUpdate from './ParticipateUpdate';
import Loadar from '../../common/loader/Loader';

function ContestParticipate() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const getFloorMasters = async (page) => {
        setLoading(true);
        try {
            const res = await ContestParticipateList({ page, count, filter_type: 'All' });
            setTotalCount(res?.totalCount);
            setData(res?.data); // Set data here
            setPage(page);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const onChangeVal = (e) => {
        getFloorMasters(e - 1);
    };

    useEffect(() => {
        getFloorMasters(0);
    }, []);


    const deleteBlockAdd = async (id) => {
        try {
            await DeleteParticipate(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }
    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    const [modalShow, setModalShow] = useState(false);
    const [ids, setIds] = useState(false);
    const updateModelData = (id) => {
        setIds(id)
        setTimeout(() => {
            setModalShow(true)
        }, 1000);
    }


    return (
        <>
            {loading && <Loadar />}
            <ParticipateUpdate
                data={ids}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Contest Participate List</h4>
                                    </div>
                                    <div id="credentials-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="credentials-tblwrapper" className="table dataTable no-footer" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}>User Name</th>
                                                    <th style={{ width: '150px' }}>Contest ID</th>
                                                    <th style={{ width: '150px' }}>Participate</th>
                                                    <th style={{ width: '150px' }}>Ranking</th>
                                                    <th style={{ width: '100px' }}>Reward</th>
                                                    <th style={{ width: '150px' }}>Approve</th>
                                                    <th style={{ width: '150px' }}>Is Free</th>
                                                    <th style={{ width: '200px' }}>Contest From Date</th>
                                                    <th style={{ width: '200px' }}>Contest To Date</th>
                                                    <th style={{ width: '200px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{i + 1}</td>
                                                        <td>{item?.user_name}</td>
                                                        <td>{item?.contestid}</td>
                                                        <td>{item?.user_type}</td>
                                                        <td>{item?.ranking}</td>
                                                        <td>{item?.reward}</td>
                                                        <td>{item?.approve ? 'Yes' : 'No'}</td>
                                                        <td>{item?.isFree ? 'Yes' : 'No'}</td>
                                                        <td>{item?.contest_from_date}</td>
                                                        <td>{item?.contest_to_date}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`#`} onClick={() => { updateModelData(item._id) }} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Participate!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
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
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default ContestParticipate;

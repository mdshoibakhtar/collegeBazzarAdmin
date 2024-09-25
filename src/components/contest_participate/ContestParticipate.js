import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ContestParticipateList } from '../../api/login/Login';

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

    return (
        <>
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
                                                    {/* <th style={{ width: '150px' }}>Prediction</th> */}
                                                    <th style={{ width: '150px' }}>Ranking</th>
                                                    <th style={{ width: '100px' }}>Reward</th>
                                                    <th style={{ width: '150px' }}>Approve</th>
                                                    <th style={{ width: '150px' }}>Is Free</th>
                                                    <th style={{ width: '200px' }}>Contest From Date</th>
                                                    <th style={{ width: '200px' }}>Contest To Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, i) => (
                                                    <tr role="row" key={item?._id}>
                                                        <td>{i + 1}</td>
                                                        <td>{item?.user_name}</td>
                                                        <td>{item?.contestid}</td>
                                                        {/* <td>{item?.prediction}</td> */}
                                                        <td>{item?.ranking}</td>
                                                        <td>{item?.reward}</td>
                                                        <td>{item?.approve ? 'Yes' : 'No'}</td>
                                                        <td>{item?.isFree ? 'Yes' : 'No'}</td>
                                                        <td>{item?.contest_from_date}</td>
                                                        <td>{item?.contest_to_date}</td>
                                                       
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

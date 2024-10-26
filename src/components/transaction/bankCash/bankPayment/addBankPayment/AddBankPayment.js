import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"
import { useEffect, useState } from "react";
import { masterget } from "../../../../../api/login/Login";


const AddBankPayment = () => {
    const [heading, setHeading] = useState("Add Bank Payment");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes("/bankpayment/add")) {
            setHeading("Add Bank Payment");
        } else if (location.pathname.includes("/bankpayment/edit")) {
            setHeading("Edit Bank Payment");
        } else if (location.pathname.includes("/bankpayment/view")) {
            setHeading("View Bank Payment");
        }

    }, [location.pathname]);
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Bank / Cash',
        title_3: heading,
        path_2: ``
    };

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };
    const [initialData, setInitialData] = useState({
        date: getCurrentDate(),
        amountOpp: 0
    })

    const [oppAcc, setOppAcc] = useState([])
    const [bank, setBank] = useState([])
    const [discount1, setDiscount1] = useState([])
    const [discount2, setDiscount2] = useState([])
    // console.log(oppAcc);

    const allChangeHandle = (e) => {
        const clone = { ...initialData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialData(clone)
    }

    const [oppchange, setOppChange] = useState({
        oppAcc1: ''
    })
    // console.log(oppchange);

    const [filteredOppAcc, setFilteredOppAcc] = useState(null);
    // console.log(filteredOppAcc);
    const [totalBalance, setTotalBalance] = useState(0);



    const oppAccountChange = (e) => {
        const clone = { ...oppchange }
        const value = e.target.value
        const name = e.target.name
        console.log(value);
        clone[name] = value
        setOppChange(clone)
        const filterOppAcc = oppAcc?.voucher?.find((item) => item?._id === value);
        setFilteredOppAcc(filterOppAcc || null);
        // console.log(filterOppAcc);
    }


    const handleKyeSet = (e) => {
        // if (e.key === "Enter") {
        //     setTotalBalance((filteredOppAcc?.balance || 0) + parseFloat(initialData.amountOpp || 0));
        // }

        if (e.key === "Enter") {

            const amount = parseFloat(initialData.amountOpp) || 0;
            const currentBalance = filteredOppAcc?.balance || 0;
            const updatedTotal = filteredOppAcc?.balance_type === "CR"
                ? currentBalance - amount
                : currentBalance + amount;

            setTotalBalance(updatedTotal);
        }
    }


    const masterData = async () => {
        try {
            const res1 = await masterget('Sundry')
            setOppAcc(res1?.data)
            const res2 = await masterget('Bank')
            setBank(res2?.data)
            const res3 = await masterget('discount')
            setDiscount1(res3?.data)
            const res4 = await masterget('discount')
            setDiscount2(res4?.data)
            // const res = await masterget()

        } catch (error) {

        }
    }

    useEffect(() => {
        masterData()
    }, [])



    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Bank Payment</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher Type: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                {/* <option selected>Open this select menu</option> */}
                                                <option value={"Payment"}>Payment</option>
                                                <option value={"Receipt"}>Receipt</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher Number: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mt-4">
                                            <input type="number" className="form-control" id="projectName" placeholder=" " />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Date</label>
                                            <input type="date" className="form-control" id="projectName" name="date" value={initialData?.date} placeholder="Enter Group Name" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Opp.A/c: </label>
                                            <select className="form-control" aria-label="Default select example" name="oppAcc1" onChange={oppAccountChange}>
                                                <option selected>Open this select menu</option>
                                                {oppAcc && oppAcc?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            <p>Balance : <span style={{ color: 'red' }}>{filteredOppAcc?.balance} {filteredOppAcc?.balance_type}</span> + {initialData?.amountOpp} Db = <span style={{ color: 'red' }}>{totalBalance} {filteredOppAcc?.balance_type}</span></p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount" name="amountOpp" value={initialData?.amountOpp} onKeyDown={handleKyeSet} onChange={allChangeHandle} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Bank : </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                {bank && bank?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Diff.A/c: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                {discount1 && oppAcc?.discount1?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Diff.A/c 2: </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                {discount2 && discount2?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Chq/DD No :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Chq/DD No  " />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Chq/DD Date :</label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Chq/DD Date" />
                                        </div>
                                        <div className="col-md-12 mb-3 text-align-center">
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddBankPayment
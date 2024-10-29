import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"
import { useEffect, useRef, useState } from "react";
import { masterget, vocherAddBank } from "../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";


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
        console.log(today);
        return today.toISOString().split('T')[0];
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    // console.log(currentDate);


    const [initialData, setInitialData] = useState({
        voucher_date: "",
        voucher_type: 'Payment',
        voucher_no: '',
        opponent_ledgerId: '',
        opponent_amount: '',
        opponent_amount_type: 'DR',
        bank_ledgerId: '',
        bank_amount: '',
        bank_amount_type: 'CR',
        narration: '',
        cheque_no: '',
        cheque_date: ''

    })

    useEffect(() => {
        const clone = { ...initialData, voucher_date: currentDate }
        if (currentDate) {
            setInitialData(clone)
        }

    }, [currentDate])

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
    //Opp.A/c:
    const [oppchange, setOppChange] = useState({
        opponent_ledgerId: ''
    })
    console.log(oppchange);

    const [filteredOppAcc, setFilteredOppAcc] = useState(null);
    // console.log(filteredOppAcc);

    const [totalBalance, setTotalBalance] = useState();
    const [balanceType, setBalanceType] = useState(filteredOppAcc?.balance_type || "CR");

    const oppAccountChange = (e) => {
        const clone = { ...oppchange }
        const value = e.target.value
        const name = e.target.name
        // console.log(value);
        clone[name] = value
        setOppChange(clone)
        const filterOppAcc = oppAcc?.voucher?.find((item) => item?._id === value);
        setFilteredOppAcc(filterOppAcc || null);
        setTotalBalance(filterOppAcc?.balance || 0); // Reset total balance to the current balance
        setBalanceType(filterOppAcc?.balance_type || "CR");
        // console.log(filterOppAcc);
    }

    //Opp.A/c:

    //Bank:
    const [bankhange, setBankhange] = useState({
        bank_ledgerId: ''
    })
    const [filterbankhangAcc, setFilterbankhangAcc] = useState(null);
    console.log(filterbankhangAcc);

    const [totalBalancebank, setTotalBalancebank] = useState(0);
    const [balanceTypeBank, setbalanceTypeBank] = useState(filterbankhangAcc?.balance_type || "CR");

    const bankAccountChange = (e) => {
        const clone = { ...bankhange }
        const value = e.target.value
        const name = e.target.name
        // console.log(value);
        clone[name] = value
        setBankhange(clone)
        const filterOppAcc = bank?.voucher?.find((item) => item?._id === value);
        // console.log(filterOppAcc);

        setFilterbankhangAcc(filterOppAcc || null);
        setTotalBalancebank(filterOppAcc?.balance || 0);
        setbalanceTypeBank(filterOppAcc?.balance_type || "CR");
        // console.log(filterOppAcc);
    }

    //Bank:


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


    const refs = {
        voucherType: useRef(),
        voucherNumber: useRef(),
        Date: useRef(),
        oppAcc: useRef(),
        amountOpp: useRef(),
        bank: useRef(),
        bankAmount: useRef(),
        diffAcc1: useRef(),
        diffAcc1Amount: useRef(),
        diffAcc2: useRef(),
        diffAcc2Amount: useRef(),
        checkDdNo: useRef(),
        checkDdDate: useRef(),
        naration: useRef()
    };

    const handleEnterKey = (e, nextRef, isSelect = false, isDate = false) => {
        // if (e.key === "Enter" && nextRef?.current) {
        //     e.preventDefault();
        //     nextRef.current.focus();
        // }

        if (e.key === "Enter") {
            console.log(isSelect);
            e.preventDefault();
            if (isSelect && nextRef?.current) {
                nextRef.current.focus();
                nextRef.current.click();
            } else if (isDate && nextRef?.current) {
                nextRef.current.showPicker();
            } else if (nextRef?.current) {
                nextRef.current.focus();
            }
        }
        // if (e.key === "Enter") {
        //     const amount = parseFloat(initialData.amountOpp) || 0;
        //     const currentBalance = filteredOppAcc?.balance || 0;
        //     const updatedTotal = filteredOppAcc?.balance_type === "CR"
        //         ? currentBalance - amount
        //         : currentBalance + amount;
        //     setTotalBalance(updatedTotal);
        // }

        if (e.key === "Enter") {
            const amount = parseFloat(initialData.opponent_amount) || 0;
            console.log('amount', amount);
            const clone = { ...initialData, bank_amount: amount }
            setInitialData(clone)
            const currentBalance = filteredOppAcc?.balance || 0;
            console.log('currentBalance', currentBalance);

            let updatedTotal = filteredOppAcc?.balance_type == "DR" ? currentBalance + amount :
                currentBalance - amount < 0 ? amount - currentBalance : currentBalance - amount
            console.log('amount - currentBalance', amount - currentBalance);


            console.log('filteredOppAcc?.balance_type', filteredOppAcc?.balance_type);

            console.log(updatedTotal);

            setTotalBalance(updatedTotal);
            // setBalanceType(updatedBalanceType);

            // let updatedTotal = filteredOppAcc?.balance_type === "CR"
            //     ? currentBalance - amount
            //     : currentBalance + amount;


            // let updatedBalanceType = filteredOppAcc?.balance_type;
            // if (updatedTotal < 0) {
            //     updatedTotal = currentBalance;
            //     updatedBalanceType = "DR";
            // }

            // setTotalBalance(updatedTotal);
            // setBalanceType(updatedBalanceType);
        }

        // if (e.key === "Enter") {
        //     const amount = parseFloat(initialData.BankAmount) || 0;
        //     // console.log(amount);
        //     // const clone = { ...initialData, BankAmount: amount }
        //     // setInitialData(clone)
        //     const currentBalance = filterbankhangAcc?.balance || 0;
        //     let updatedTotal = filterbankhangAcc?.balance_type === "CR"
        //         ? currentBalance - amount
        //         : currentBalance + amount;


        //     let updatedBalanceType = filterbankhangAcc?.balance_type;
        //     if (updatedTotal < 0) {
        //         updatedTotal = currentBalance;
        //         updatedBalanceType = "DR";
        //     }

        //     setTotalBalance(updatedTotal);
        //     setBalanceType(updatedBalanceType);
        // }


    };

    const toastSuccessMessage = (data) => {
        // console.log(data);
        toast.success(`${data}`, {
            position: "top-center",
        });
    };

    const toastSuccessMessageError = (data) => {
        // console.log(data);
        toast.error(`${data}`, {
            position: "top-center",
        });
    };

    const submitData = async () => {
        const clone = { ...initialData, opponent_ledgerId: oppchange?.opponent_ledgerId, bank_ledgerId: bankhange?.bank_ledgerId }
        // console.log(clone);
        try {
            const res = await vocherAddBank(clone)
            console.log(res);
            if (res?.error == false) {
                toastSuccessMessage(res?.message)
            } else {
                toastSuccessMessageError(res?.message)
            }

        } catch (error) {

        }

    }


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
                                            <select className="form-control" aria-label="Default select example"
                                                name="voucher_type"
                                                ref={refs.voucherType}
                                                onKeyDown={(e) => handleEnterKey(e, refs.voucherNumber, true)}
                                                onChange={allChangeHandle}
                                            >
                                                {/* <option selected>Open this select menu</option> */}
                                                <option value={"Payment"}>Payment</option>
                                                <option value={"Receipt"}>Receipt</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="projectName">Voucher Number: </label>
                                            <select className="form-control" aria-label="Default select example"
                                                name="voucher_no"
                                                ref={refs.voucherNumber}
                                                onKeyDown={(e) => handleEnterKey(e, refs.Date, true)}
                                                onChange={allChangeHandle}
                                            >
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
                                            <input type="date" className="form-control" id="projectName" name="voucher_date" defaultValue={currentDate} value={initialData?.voucher_date} placeholder="Enter Group Name"
                                                ref={refs.Date}
                                                onKeyDown={(e) => handleEnterKey(e, refs.oppAcc)}
                                                onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-1">
                                            <label htmlFor="projectName">Opp.A/c: </label>
                                            <select className="form-control" aria-label="Default select example" name="opponent_ledgerId" onChange={oppAccountChange}
                                                ref={refs.oppAcc}
                                                onKeyDown={(e) => handleEnterKey(e, refs.amountOpp)}
                                            >
                                                <option selected>Open this select menu</option>
                                                {oppAcc && oppAcc?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'red' }}>{filteredOppAcc?.balance} {filteredOppAcc?.balance_type}</span> + {initialData?.amountOpp} DR = <span style={{ color: 'red' }}>{totalBalance} {balanceType}
                                              
                                            </span></p> */}
                                        </div>

                                        <div className="col-md-4 mt-5">
                                            {/* <label htmlFor="projectName">Opp.A/c: </label> */}

                                            <p style={{ textAlign: 'center', margin: '0px' }}>Balance : <span style={{ color: 'red' }}>{filteredOppAcc?.balance} {filteredOppAcc?.balance_type}</span> + {initialData?.amountOpp} DR = <span style={{ color: 'red' }}>{totalBalance} {balanceType}
                                                {/* {filteredOppAcc?.balance_type} */}
                                            </span></p>
                                        </div>

                                        <div className="col-md-4 ">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount" name="opponent_amount" value={initialData?.opponent_amount} onChange={allChangeHandle}
                                                ref={refs.amountOpp}
                                                onKeyDown={(e) => handleEnterKey(e, refs.bank)}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-1">
                                            <label htmlFor="projectName">Bank : </label>
                                            <select className="form-control" aria-label="Default select example"
                                                name="bank_ledgerId"
                                                ref={refs.bank}
                                                onKeyDown={(e) => handleEnterKey(e, refs.bankAmount)}
                                                onChange={bankAccountChange}
                                            >
                                                <option selected>Open this select menu</option>
                                                {bank && bank?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>

                                        <div className="col-md-4 mt-5">
                                            {/* <label htmlFor="projectName">Opp.A/c: </label> */}

                                            <p style={{ textAlign: 'center', margin: '0px' }}>Balance : <span style={{ color: 'red' }}>{filterbankhangAcc?.balance} {filterbankhangAcc?.balance_type}</span> + {initialData?.amountOpp} CR = <span style={{ color: 'red' }}>{totalBalancebank} {balanceType}
                                                {/* {filteredOppAcc?.balance_type} */}
                                            </span></p>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount "
                                                ref={refs.bankAmount}
                                                onKeyDown={(e) => handleEnterKey(e, refs.diffAcc1)}
                                                name="bank_amount" value={initialData?.bank_amount} onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-1">
                                            <label htmlFor="projectName">Diff.A/c: </label>
                                            <select className="form-control" aria-label="Default select example"
                                                ref={refs.diffAcc1}
                                                onKeyDown={(e) => handleEnterKey(e, refs.diffAcc1Amount)}
                                            >
                                                <option selected>Open this select menu</option>
                                                {discount1 && oppAcc?.discount1?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-4 mt-5">
                                            {/* <label htmlFor="projectName">Opp.A/c: </label> */}

                                            {/* <p style={{ textAlign: 'center', margin: '0px' }}>Balance : <span style={{ color: 'red' }}>{filteredOppAcc?.balance} {filteredOppAcc?.balance_type}</span> + {initialData?.amountOpp} DR = <span style={{ color: 'red' }}>{totalBalance} {balanceType}

                                            </span></p> */}
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount "
                                                ref={refs.diffAcc1Amount}
                                                onKeyDown={(e) => handleEnterKey(e, refs.diffAcc2)}
                                                name="DiffAc1Amont" value={initialData?.DiffAc1Amont} onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-1">
                                            <label htmlFor="projectName">Diff.A/c 2: </label>
                                            <select className="form-control" aria-label="Default select example"
                                                ref={refs.diffAcc2}
                                                onKeyDown={(e) => handleEnterKey(e, refs.diffAcc2Amount)}
                                            >
                                                <option selected>Open this select menu</option>
                                                {discount2 && discount2?.voucher?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                            {/* <p>Balance : <span style={{ color: 'green' }}>43655.1 Db</span> + Cr = <span style={{ color: 'green' }}>43655.1 Db</span></p> */}
                                        </div>
                                        <div className="col-md-4 mt-5">
                                            {/* <label htmlFor="projectName">Opp.A/c: </label> */}

                                            {/* <p style={{ textAlign: 'center', margin: '0px' }}>Balance : <span style={{ color: 'red' }}>{filteredOppAcc?.balance} {filteredOppAcc?.balance_type}</span> + {initialData?.amountOpp} DR = <span style={{ color: 'red' }}>{totalBalance} {balanceType}
                                              
                                            </span></p> */}
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="projectName">Amount :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Amount "
                                                ref={refs.diffAcc2Amount}
                                                onKeyDown={(e) => handleEnterKey(e, refs.checkDdNo)}
                                                name="DiffAc2Amont" value={initialData?.DiffAc2Amont} onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="projectName">Chq/DD No :</label>
                                            <input type="number" className="form-control" id="projectName" placeholder="Enter Chq/DD No  "
                                                ref={refs.checkDdNo}
                                                onKeyDown={(e) => handleEnterKey(e, refs.checkDdDate)}
                                                name="cheque_no" value={initialData?.cheque_no} onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="projectName">Chq/DD Date :</label>
                                            <input type="date" className="form-control" id="projectName" placeholder="Enter Chq/DD Date"
                                                ref={refs.checkDdDate}
                                                onKeyDown={(e) => handleEnterKey(e, refs.naration)}
                                                name="cheque_date" value={initialData?.cheque_date} onChange={allChangeHandle}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="projectName">Narration:</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" cols={50}
                                                ref={refs.naration}
                                                // onKeyDown={(e) => handleEnterKey(e, refs.naration)}
                                                name="narration" value={initialData?.narration} onChange={allChangeHandle}
                                            ></textarea>

                                        </div>
                                        <div className="col-md-12 text-align-center">
                                            <button type="button" className="btn btn-primary" onClick={submitData}>Save</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddBankPayment
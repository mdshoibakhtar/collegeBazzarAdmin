import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import BankBook from "../../../../components/kingsonreports/AccountBook/bankBook/BankBook";
import { getVoucherTypeData } from "../../../../api/login/Login";
import { useParams } from "react-router-dom";

function BankBookPage() {
  const breadCrumbsTitle = {
    title_1: "Bank Book",
  };
  const [data, setData] = useState()
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState()
  const [loading, setLoading] = useState(false);
  const params = useParams()


  const getVocherListDatas = async (name) => {
    const res = await getVoucherTypeData(name,count,page)
    console.log(res);

  }
  useEffect(()=>{
    getVocherListDatas(params?.name)
  },[])

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BankBook />
    </>
  );
}

export default BankBookPage;

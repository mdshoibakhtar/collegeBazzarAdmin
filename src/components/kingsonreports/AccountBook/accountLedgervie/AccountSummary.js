import React from "react";

const AccountSummary = () => {
  // Sample data to render in the table
  const data = {
    account: "Pulkit",
    group: "Sundry Creditors (A/cs Payble)",
    opening: "50000 Cr",
    closing: "7000 Cr",
    salesmanName: "",
    limitDay: 0,
    limitAmount: 0,
  };

  return (
    <div className="account-summary">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Account</th>
            <th>Group</th>
            <th>Opening</th>
            <th>Closing</th>
            <th>Salesman Name</th>
            <th>Limit Day</th>
            <th>Limit Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.account}</td>
            <td>{data.group}</td>
            <td>{data.opening}</td>
            <td>{data.closing}</td>
            <td>{data.salesmanName || "-"}</td>
            <td>{data.limitDay}</td>
            <td>{data.limitAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountSummary;

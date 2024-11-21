import React from "react";
import { Link } from "react-router-dom";
import { SaleRegisterFilter } from "./SaleRegisterFilter";
import { SaleRegisterList } from "./SaleregisterLister";


export default function SaleRegister(){
    return(
        <div className="m-4">
           <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                    <h4 className="heading mb-0">Travel Sales Report</h4>
                    <div>
                        <Link className="btn btn-primary btn-sm" role="button" aria-controls="offcanvasExample"> View </Link>
                    </div>
                </div>
            </div>
            <SaleRegisterFilter />
            <SaleRegisterList />
        </div>
    )
}
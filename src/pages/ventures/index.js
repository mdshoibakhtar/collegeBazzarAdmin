import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import ReportTable from "../../components/rems-status/ReportTable";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Ventures(){
    return(
        <div>
            <PSMunit title={"Ventures List"}/>
            <LookIn />
            <StanderLayout link={"/newventures"} title={"New Ventures"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}
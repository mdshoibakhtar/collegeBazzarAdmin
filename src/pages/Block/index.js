import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Block(){
    return(
        <div>
            <PSMunit title={"Block List"}/>
            <LookIn />
            <StanderLayout link={"newblock"} title={"New Block"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}
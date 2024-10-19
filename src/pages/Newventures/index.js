import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import VenturesForm from "../../components/rems-status/VenturesForm";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function Newventures(){
    return(
        <div>
            <PSMunit title={"New Ventures"}/>
            <SaveCancle />
            <VenturesForm />
        </div>
    )
}
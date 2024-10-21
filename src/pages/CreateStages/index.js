import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import StagesForm from "../../components/rems-status/StageForm";

export default function CreatePropertyStages(){
    return(
       <div>
         <PSMunit title={"Create Stages"}/>
         <SaveCancle />
         <StagesForm />
       </div>
    )
}
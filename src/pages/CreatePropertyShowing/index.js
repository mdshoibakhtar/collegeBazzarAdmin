import PropertychargesForm from "../../components/rems-status/PropertychargesForm";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";

export default function CreatePropertyShowing(){
    return(
        <div>
            <PSMunit title={"Create Property Showing"}/>
            <SaveCancle />
            <PropertychargesForm />
        </div>
    )
}
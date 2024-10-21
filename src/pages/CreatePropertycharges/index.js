import PropertychargesForm from "../../components/rems-status/PropertychargesForm";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import VenturesForm from "../../components/rems-status/VenturesForm";

export default function  CreatePropertyCharges(){
    return(
        <div>
            <PSMunit title={"Create Property Charges"} />
            <SaveCancle />
            <PropertychargesForm />
        </div>
    )
}
import LookIn from "../../components/rems-status/LookIn";
import PSMunit from "../../components/rems-status/PSMunit";
import StanderLayout from "../../components/rems-status/StanderLayout";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function PropertyShowing(){
    return(
        <div>
            <PSMunit title={"Property Showing"}/>
            <LookIn />
            <StanderLayout link={"/newpropertyshowing"}/>
            <VarturesTable />
        </div>
    )
}
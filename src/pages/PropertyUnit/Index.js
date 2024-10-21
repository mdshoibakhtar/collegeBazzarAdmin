import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import LookIn from "../../components/rems-status/LookIn";
import PSMunit from "../../components/rems-status/PSMunit";
import StanderLayout from "../../components/rems-status/StanderLayout";
import VarturesTable from "../../components/rems-status/VerturesTable";

export default function PropertyUnit(){
    return(
        <div>
            <PSMunit title={"Property Unit"}/>
            <LookIn />
            <StanderLayout link={"newpropertyunit"} title={"New property Unit"}/>
            <AlphabeticFilter />
            <VarturesTable />
        </div>
    )
}
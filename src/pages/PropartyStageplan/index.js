import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import LookIn from "../../components/rems-status/LookIn";
import StanderLayout from "../../components/rems-status/StanderLayout";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";

export default function PropertyStagePlane(){
    return(
        <div>
            <PSMunit title={"Property StageS Plane"}/>
            <LookIn />
            <StanderLayout title={"New property Stages Plane"}/>
            <AlphabeticFilter />
        </div>
    )
}
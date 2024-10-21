import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import StanderLayout from "../../components/rems-status/StanderLayout";
import RecentItem from "../../components/rems-status/RecentItem";
import ListView from "../../components/rems-status/ListView";

export default function PropertyHome(){
    return(
        <div>
            <PSMunit title={"Property Home"}/>
            <StanderLayout />
            <RecentItem />
            <ListView />
        </div>
    )
}
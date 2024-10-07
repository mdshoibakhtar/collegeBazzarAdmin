import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
export default function FilterProject(){
    return(
        <div className="d-flex wrap-filter">
            <ul className="d-flex">
                <li><Link to="/project/newproject" className="btn btn-primary mx-0"><IoMdAdd /> New project</Link></li>
                <li><Link to="/" className="btn btn-outline-light bg-white"><CgMenuLeftAlt /></Link></li>
            </ul>
            <ul>
                <li><Link to="/" className="btn btn-ouline-light bg-white mx-0" ><FaFilter /></Link></li>
            </ul>
        </div>
    )
}
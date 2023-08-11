import React from "react";
import { useNavigate } from "react-router-dom";
import UgandanImage from "./Images/Flag_of_Uganda.svg"

function Uganda(){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate("/jobs/ugandan")}>
            <img className="jbs_flags"  src={UgandanImage} alt="Ugandan Flag" />
        </div>
    )
}

export default Uganda
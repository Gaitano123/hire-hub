import React from "react";
import { useNavigate } from "react-router-dom";
import SomalianImage from "./Images/flag_of_somalia.png"

function Somalia(){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate("/jobs/somali")}>
            <img className="jbs_flags" src={SomalianImage} alt="Somalia Flag" />
        </div>
    )
}

export default Somalia
import React from "react";
import { useNavigate } from "react-router-dom";
import TanzanianImage from "./Images/Flag_of_Tanzania.svg.png"

function Tanzania(){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate("/jobs/tanzanian")}>
            <img className="jbs_flags" src={TanzanianImage} alt="Tanzanian Flag" />
        </div>
    )
}

export default Tanzania
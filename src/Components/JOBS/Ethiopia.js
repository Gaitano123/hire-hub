import React from "react";
import { useNavigate } from "react-router-dom";
import EthiopianImage from "./Images/ethiopia-flag-png-large.png"

function Ethiopia(){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate("/jobs/ethiopian")}>
            <img className="jbs_flags" src={EthiopianImage} alt="Ethiopian Flag" />
        </div>
    )
}

export default Ethiopia
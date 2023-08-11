import React from "react";
import { useNavigate } from "react-router-dom";
import kenyanImage from "../JOBS/Images/download.png"

function Kenya(){

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate("/jobs/kenyan")}>
            <img className="jbs_flags" src={kenyanImage} alt="Kenyan Flag" />
        </div>
    )
}

export default Kenya;
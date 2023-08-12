import React from "react";
import Kenya from "./JOBS/Kenya";
import Ethiopia from "./JOBS/Ethiopia.js";
import Tanzania from "./JOBS/Tanzania";
import Uganda from "./JOBS/Uganda";
import Somalia from "./JOBS/Somalia";

function Jobs(){
    return(
        <div>
            <div className="h-50 jbs_sctn_bgrnd">
                <h3 className="text-center text-uppercase fw-bolder fs-2">we empower your career dreams</h3>
            </div>
            <div className="d-flex flex-column mb-3 jbs_sctn_flgs">
                <h3 className="text-uppercase text-center fw-bold fs-2">select a country</h3>
                <div className="d-flex justify-content-evenly jbs_div_flgs">
                    <Ethiopia />
                    <Somalia />
                </div>
                <div className="d-flex justify-content-center jbs_div_flgs">
                    <Kenya />
                </div>
                <div className="d-flex justify-content-evenly jbs_div_flgs">
                    <Uganda />
                    <Tanzania />
                </div>
            </div>
        </div>
    )
}

export default Jobs;
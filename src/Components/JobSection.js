import React from "react";

function JobSection(){
    return(
        <div>
            <select className="form-select text-uppercase">
                <option className="text-uppercase">ALL SECTORS</option>
                <option className="text-uppercase">health & nutrition</option>
                <option className="text-uppercase">human resources</option>
                <option className="text-uppercase">information technology service</option>
                <option className="text-uppercase">logistics & supply chain</option>
                <option className="text-uppercase">program/project management</option>
                <option className="text-uppercase">shelter & infrastructure</option>
                <option className="text-uppercase">water & hygene</option>
            </select>
        </div>
    )
}

export default JobSection;
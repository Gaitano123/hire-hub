import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";

function Tanzanian({ jobs }){
    console.log(jobs)

    const navigate = useNavigate()

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    if (!Array.isArray(jobs)) {
        console.error("jobs is not an array:", jobs);
        return null; // or render an appropriate error message
    }

    const TanzanianJobs = jobs.filter((job) => job.country === "Tanzania")

    const renderedJobs = TanzanianJobs.map((job) => (
        <div key={job.id} className="sgl_jb_ctn_mn">
            <h2 className="text-center text-uppercase">{job.name}</h2>
            <div className="sngl_cnt">
                <img className="sngl_img" src={job.poster} alt="job_poster"/>
                <div className="sngl_scnt">
                    <p><span className="fw-bold">Sector:</span> {job.sector}</p>
                    <p><span className="fw-bold">Description:</span> {job.description}</p>
                    <p><span className="fw-bold">Requirements:</span> {job.requirements}</p>
                    <p><span className="fw-bold">Deadline:</span> {job.deadline}</p>
                    <p><span className="fw-bold">Employment Type:</span> {job.employment_type}</p>
                    <p><span className="fw-bold">Experience Level:</span> {job.experience_level}</p>
                    <p><span className="fw-bold">Salary:</span> {job.salary}</p>
                    <p><span className="fw-bold">Website:</span> {job.website}</p>
                    <p><span className="fw-bold">Email:</span> {job.contact_email}</p>
                    <p><span className="fw-bold">Responsibilities:</span> {job.responsibilities}</p>
                    <p><span className="fw-bold">Skills:</span> {job.skills_required}</p>
                    <h4>Benefits</h4>
                    {job.benefits.map(( benefit, index ) => (
                        <ul key={index}>
                            <li>{benefit}</li>
                        </ul>
                    ))}
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate("/application-form")}>Apply</button>
        </div>
    ))

    return(
        <div>
            <h1 className="text-center text-decoration-underline">TANZANIA</h1>
            <Link to="top" smooth={true} duration={500} offset={-100}>
            </Link>
            <Element name="top" className="top-element" />
            {renderedJobs}
        </div>
    )
}

export default Tanzanian;
import React, { useState, useEffect } from "react";

function ApplicationForm(){

  const initialFormInputs = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    phoneno: "",
    idpassportno: "",
    education: "",
    resume: null,
    linkedin: "",
    experience: "",
    coverLetter: "",
    workAuthorization: "yes",
    availability: "",
    references: "",
  }

    const [formInputs, setFormInputs] = useState(initialFormInputs)
    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    function handleChange(e){
      const { name, value, type, files } = e.target;
      // Handle special case for file inputs (e.g., resume upload)
      const inputValue = type === "file" ? files[0] : value;
      setFormInputs((prevState) => ({
        ...prevState,
        [name]: inputValue,
      }));    
    }

    function validateForm(){
      const errors = {};
      let isValid = true;

      for (const [fieldName, fieldValue] of Object.entries(formInputs)) {
        if (fieldValue === "" && fieldName !== "coverLetter") {
          errors[fieldName] = "This field is required";
          isValid = false;
        }
      }

      setIsFormValid(isValid);
      setFormErrors(errors);
      return isValid;

    }

    function handleClick(e){
        e.preventDefault();

        if (validateForm()) {
          // Handle form submission here (e.g., send data to server)
    
          // After successful submission, reset the formInputs to initial values
          setFormInputs(initialFormInputs);
          window.alert("APPLICATION SUCCESSFUL")
        }
    }

    return(
        <div className="form_positioning">
            <form className="form_apply">
                <div class="form-floating mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.firstname} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.lastname} type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Last Name</label>
                </div>
                <div class="form-floating mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.username} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating text-uppercase frm_dte">
                  <input onChange={handleChange} value={formInputs.dob} type="date" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">date of birth</label>
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.phoneno} type="number" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">phone number</label>
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.idpassportno} type="number" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">id/passport no</label>
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.education} type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">education</label>
                </div>
                <div className="mb-3 ">
                  <label htmlFor="resumeInput" className="form-label  text-uppercase">
                    Upload Resume/CV
                  </label>
                  <input
                    onChange={handleChange}
                    name="resume"
                    type="file"
                    className="form-control"
                    id="resumeInput"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.linkedin} type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">linkedin profile</label>
                </div>
                <div class="form-floating  mb-3 text-uppercase">
                  <input onChange={handleChange} value={formInputs.experience} type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">experience</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    onChange={handleChange}
                    name="coverLetter"
                    value={formInputs.coverLetter}
                    className="form-control"
                    id="coverLetterInput"
                    placeholder="Write a cover letter (optional)"
                    rows="4"
                  ></textarea>
                  <label htmlFor="coverLetterInput">Cover Letter</label>
                </div>
                <div className="form-check mb-3">
                  <input
                    onChange={handleChange}
                    name="workAuthorization"
                    value="yes"
                    type="radio"
                    className="form-check-input"
                    id="workAuthYes"
                    checked={formInputs.workAuthorization === "yes"}
                  />
                  <label className="form-check-label" htmlFor="workAuthYes">
                    Authorized to work in the country
                  </label>
                </div>
                <div className="form-floating mb-3 text-uppercase">
                    <input
                      onChange={handleChange}
                      name="availability"
                      value={formInputs.availability}
                      type="text"
                      className="form-control"
                      id="availabilityInput"
                      placeholder="Availability (optional)"
                    />
                    <label htmlFor="availabilityInput">Availability</label>
                </div>
                <div className="form-floating mb-3 text-uppercase">
                  <input
                    onChange={handleChange}
                    name="references"
                    value={formInputs.references}
                    type="text"
                    className="form-control"
                    id="referencesInput"
                    placeholder="References (optional)"
                  />
                  <label htmlFor="referencesInput">References</label>
                </div>
                {!isFormValid && (
                  <div className="alert alert-danger" role="alert">
                    Please fill out all required fields.
                  </div>
                )}
                <button className="btn btn-primary frm_btn text-uppercase" onClick={handleClick} type="submit">Apply</button>
            </form>
        </div>
    )
}

export default ApplicationForm;
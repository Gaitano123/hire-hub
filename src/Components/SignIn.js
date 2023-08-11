import React, { useState } from "react";

function SignIn(){

    const [formInputs, setFormInputs] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    })

    function handleChange(e){
        setFormInputs(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
    }

    return(
        <div className="form_positioning">
            <form className="form">
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.firstname} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating  mb-3">
                  <input onChange={handleChange} value={formInputs.lastname} type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.username} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                  <input onChange={handleChange} value={formInputs.password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary frm_btn" onClick={handleClick} type="submit">SIGNIN</button>
            </form>
        </div>
    )
}

export default SignIn;
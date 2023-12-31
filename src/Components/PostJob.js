import React, { useState } from "react";

function PostJob(){

    const [formInputs, setFormInputs] = useState({
        username: "",
        Password: ""
    })

    function handleChange(e){
        setFormInputs(e.target.value)
    }

    function handleClick(e){
        e.preventDefault();
    }

    return(
        <div className="form_positioning">
            <form className="form">
                <div class="form-floating mb-3">
                  <input onChange={handleChange} value={formInputs.username} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                  <input onChange={handleChange} value={formInputs.Password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary frm_btn" onClick={handleClick} type="submit">PostJob</button>
            </form>
        </div>
    )
}

export default PostJob;
import React, { useEffect, useState } from "react";
import { Route, Routes, } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";
import PostJob from "./PostJob";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Jobs from "./Jobs";
import Kenyan from "./JOBS/Filtered-Country/Kenyan";
import Ethiopian from "./JOBS/Filtered-Country/Ethiopian";
import Ugandan from "./JOBS/Filtered-Country/Ugandan";
import Tanzanian from "./JOBS/Filtered-Country/Tanzania";
import Somali from "./JOBS/Filtered-Country/Somali";
import ApplicationForm from "./Application";

function App() {

  const [jobs, setJobs] = useState("")

  function fetchingJobs(){
    fetch('https://hire-hub-efz2.onrender.com/jobs')
    .then(res => res.json())
    .then(data => setJobs(data))
  }

  useEffect(() => {
    fetchingJobs()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/log-in" element={ <Login />} />
        <Route path="/sign-in" element={ <SignIn />}/>
        <Route path="/post-job" element={<PostJob />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/kenyan" element={<Kenyan jobs={jobs}/>}/>
        <Route path="/jobs/ethiopian" element={<Ethiopian jobs={jobs}/>}/>
        <Route path="/jobs/tanzanian" element={<Tanzanian jobs={jobs}/>}/>
        <Route path="/jobs/ugandan" element={<Ugandan jobs={jobs}/>}/>
        <Route path="/jobs/somali" element={<Somali jobs={jobs}/>}/>
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import JobSection from "./JobSection";
import CountrySection from "./CountrySection";
import firstImage from "../Images/billy-freeman-koRmF1nz8iw-unsplash.jpg"
import secondImage from "../Images/bao-menglong--FhoJYnw-cg-unsplash.jpg"
import thirdImage from "../Images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg"

function Home(){
    return(
        <div>
            <div className="h-75">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={firstImage} class="d-block w-100 hme_crsl_img" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={secondImage} class="d-block w-100 hme_crsl_img" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={thirdImage} class="d-block w-100 hme_crsl_img" alt="..."/>
                    </div>
                  </div>
                </div>
            </div>
            <div>
                <h1 className="text-uppercase">Welcome to HIRE-HUB: Your Gateway to a World of Career Opportunities</h1>
                <div className="d-flex justify-content-evenly">
                    <div className="p-2"><JobSection /></div>
                    <div className="p-2"><CountrySection /></div>
                </div>
                <div className="hme_2nd_sctn">
                    <div className="hme_crds shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h2 className="text-uppercase text-center">Hero Section</h2>
                        <p className="text-uppercase text-center">Welcome to HIRE-HUB – Where Your Career Journey Begins</p>
                        <p>At HIRE-HUB, we believe in the transformative power of opportunities. Our platform is your gateway to a world of possibilities, where dreams are nurtured and aspirations are brought to life. Whether you're a recent graduate taking your first steps into the professional world or a seasoned job seeker seeking new horizons, HIRE-HUB is here to guide you on your path to success. With a commitment to innovation and excellence, we've created a dynamic environment that connects job seekers with a plethora of job opportunities from diverse industries and locations. Your journey to a fulfilling career starts here, and we're honored to be a part of it.</p>
                    </div>
                    <div className="hme_crds shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h2 className="text-uppercase text-center">Features and Benefits</h2>
                        <p className="text-uppercase text-center">Discover the HIRE-HUB Advantage</p>
                        <p>HIRE-HUB is designed with you in mind, offering a range of features and benefits that elevate your job search experience. Our advanced search options allow you to tailor your search based on your preferences, ensuring you find the perfect fit. Receive personalized job recommendations that match your skills and interests, and stay updated on the latest opportunities in your chosen field. Our user-friendly resume-building tools help you create a standout profile that showcases your strengths. Engage with a vibrant community where you can seek advice, share experiences, and learn from others. HIRE-HUB empowers you to take control of your career journey and make informed decisions that shape your future.</p>
                    </div>
                    <div className="hme_crds shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h2 className="text-uppercase text-center">About Us</h2>
                        <p className="text-uppercase text-center">Empowering Your Career Dreams</p>
                        <p>Since our establishment in 2015, HIRE-HUB has been dedicated to revolutionizing the way individuals find their dream jobs. Our journey has been one of continuous growth and learning, driven by the desire to provide a seamless and enriching job search experience. What sets us apart is our unwavering dedication to your success. We're not just a job search platform – we're a supportive community that equips you with the tools, resources, and guidance needed to navigate the competitive job market. As we look ahead, we remain committed to our mission of connecting job seekers with opportunities that align with their passions and skills. Join us on this exciting journey, and together, let's turn your career aspirations into reality.</p>
                    </div>
                    <div className="hme_crds shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h2 className="text-uppercase text-center">How It Works</h2>
                        <p className="text-uppercase text-center">Navigating Your Path to Success</p>
                        <p>Using HIRE-HUB is as easy as 1-2-3. First, create your personalized account by providing some basic information and uploading your resume. Next, explore our vast database of job listings from various industries and locations. Our intuitive search filters help you narrow down your options, making it effortless to find roles that align with your expertise. Finally, apply to your chosen positions with just a few clicks. HIRE-HUB streamlines the application process, saving you time and effort. Our platform is designed to empower you every step of the way, from discovering opportunities to landing your dream job. Join us today and embark on a journey that leads to a brighter professional future.</p>
                    </div>
                    <div className="hme_crds shadow p-3 mb-5 bg-body-tertiary rounded">
                        <h2 className="text-uppercase text-center">Featured Job Listings</h2>
                        <p className="text-uppercase text-center">Explore Exciting Opportunities</p>
                        <p>Here at HIRE-HUB, we understand the importance of finding the right job. That's why we feature a carefully curated selection of job listings that span a wide range of industries and locations. Whether you're seeking a challenging role in technology, a rewarding position in healthcare, or an exciting adventure in a new city, our platform has you covered. Our featured job listings are updated regularly to ensure you have access to the latest and most enticing opportunities. We believe that every job listing represents a potential stepping stone on your career path, and we're here to help you navigate each one. Explore our featured jobs, take the first step toward your next adventure, and let HIRE-HUB guide you to success.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
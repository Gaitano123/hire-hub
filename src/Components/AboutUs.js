import React from "react";
import firstPhoto from "../Images/ian-schneider-TamMbr4okv4-unsplash.jpg"
import secondPhoto from "../Images/pexels-ibrahim-boran-3582560.jpg"
import thirdPhoto from "../Images/pexels-александр-македонский-3609139.jpg"
import fourthPhoto from "../Images/pexels-malidate-van-784631.jpg"
import fifthPhoto from "../Images/pexels-sora-shimazaki-5673478.jpg"
import photoOne from "../Images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg"
import photoTwo from "../Images/pexels-sebastian-coman-photography-3437689.jpg"
import photoThree from "../Images/garrhet-sampson-CmF_5GYc6c0-unsplash.jpg"
import photoFour from "../Images/pexels-apexgraphics-1272392.jpg"
import photoFive from "../Images/pexels-pixabay-327049.jpg"
import photoSix from "../Images/chang-duong-Sj0iMtq_Z4w-unsplash.jpg"


function AboutUs(){
    return(
        <div>
            <div className="h-50">
              <div id="carouselExampleDark" className="carousel carousel-dark slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                          <img src={firstPhoto} className="d-block w-100 crsl_img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="crsl_hd">Rise and Shine: Embrace Your Journey</h5>
                            <p className="crsl_txt">Each sunrise brings a new opportunity. Embrace your journey, for within it lies the path to your dreams.</p>
                          </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                          <img src={secondPhoto} className="d-block w-100 crsl_img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="crsl_hd">Tides of Change: Sailing to Prosperity</h5>
                            <p className="crsl_txt">Navigate the tides of change with confidence, and let your sails carry you toward the shores of prosperity.</p>
                          </div>
                    </div>
                    <div className="carousel-item">
                          <img src={thirdPhoto} className="d-block w-100 crsl_img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="crsl_hd">Building Dreams: Bricks of Resilience</h5>
                            <p className="crsl_txt">Lay each brick of resilience with purpose, and soon you'll stand upon the foundation of your most magnificent dreams.</p>
                          </div>
                    </div>
                    <div className="carousel-item">
                          <img src={fourthPhoto} className="d-block w-100 crsl_img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="crsl_hd">Beyond Boundaries: Unveiling Your Full Potential</h5>
                            <p className="crsl_txt">Step beyond the boundaries of comfort, and you'll unveil a world where your full potential knows no limits.</p>
                          </div>
                    </div>
                    <div className="carousel-item">
                          <img src={fifthPhoto} className="d-block w-100 crsl_img" alt="..."/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="crsl_hd">Infinite Horizons: Forging Your Legacy</h5>
                            <p className="crsl_txt">Look beyond the horizon, for your journey shapes your legacy. With every step, you leave an indelible mark.</p>
                          </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
            </div>
            <h1 className="text-uppercase text-center">get to know us</h1>
            <div>
              <div className="abt_section">
                <img className="abt_photo" src={photoOne} alt="photoOne" />
                <div className="abt_msg">
                  <h2>Connecting Dreams to Opportunities</h2>
                  <p>At HIRE-HUB, we're dedicated to bridging the gap between job seekers and their aspirations. Our platform is a dynamic hub where dreams find their foothold and aspirations meet opportunities. We understand the challenges of job hunting, and that's why we've crafted a seamless online space to empower individuals on their professional journeys. With a passion for innovation and a commitment to excellence, we've curated a user-friendly experience that simplifies the job search process. HIRE-HUB is more than a website – it's a catalyst for transformation, a navigator for career exploration, and a community that believes in the power of each individual's potential.</p>
                </div>
              </div>
              <div className="abt_section">
                <div className="abt_msg">
                  <h2>Empowering Your Career Quest</h2>
                  <p>Welcome to HIRE-HUB, a virtual arena designed to empower you on your quest for the perfect job. Our mission is simple yet profound: to provide you with the tools, resources, and inspiration you need to navigate the intricate landscape of job searching. We believe that every job seeker is a unique story waiting to unfold, and we're here to help you script a tale of success. From crafting compelling resumes to offering expert advice, we're your partners in this adventure. At HIRE-HUB, we're not just facilitating connections; we're fostering a community that thrives on your triumphs. Join us in this transformative journey, where your career aspirations take center stage, and your potential knows no bounds.</p>
                </div>
                <img className="abt_photo" src={photoTwo} alt="photoOne"/>
              </div>
              <div className="abt_section">
                <img className="abt_photo" src={photoThree} alt="photoOne"/>
                <div className="abt_msg">
                  <h2>Unveiling Opportunities, One Click at a Time</h2>
                  <p>Step into the world of HIRE-HUB, where each click opens a door to a world of possibilities. Our platform is your gateway to a multitude of job opportunities, spanning diverse industries and locations. We believe that finding the right job is not just about ticking boxes; it's about discovering a path that resonates with your passions and goals. With an intuitive interface and comprehensive job listings, HIRE-HUB is your steadfast companion as you navigate through the intricate maze of hiring. Whether you're a seasoned professional seeking a new challenge or a fresh graduate embarking on your journey, HIRE-HUB is here to illuminate your way. Join us and embark on a quest where your aspirations take flight and your dreams find a place to flourish.</p>
                </div>
              </div>
              <div className="abt_section">
                <div className="abt_msg">
                  <h2>Elevating Your Job Search Experience</h2>
                  <p>Welcome to HIRE-HUB, where your job search experience is elevated to new heights. We understand that the journey to finding the right job can be both exciting and challenging. That's why we've meticulously crafted a platform that not only simplifies the process but also adds value at every step. From personalized job recommendations to expert career resources, we're committed to enhancing your job search strategy. At HIRE-HUB, we're not just another job portal – we're your partners in professional growth, here to empower you with the knowledge and opportunities you need to excel.</p>
                </div>
                <img className="abt_photo" src={photoFour} alt="photoOne"/>
              </div>
              <div className="abt_section">
                <img className="abt_photo" src={photoFive} alt="photoOne"/>
                <div className="abt_msg">
                  <h2>Our Commitment to Excellence</h2>
                  <p>At HIRE-HUB, excellence is at the core of everything we do. Our team is fueled by a shared passion for helping individuals achieve their career goals. With a commitment to delivering top-notch user experiences, we've built a platform that combines cutting-edge technology with a human touch. Our dedication extends beyond just connecting job seekers with employers; it's about fostering a sense of community and support. As you explore HIRE-HUB, you'll find a treasure trove of insights, advice, and opportunities aimed at propelling you towards professional success.</p>
                </div>
              </div>
              <div className="abt_section">
                <div className="abt_msg">
                  <h2>Your Success, Our Fulfillment</h2>
                  <p>HIRE-HUB is more than a platform – it's a vision brought to life with a singular focus: your success. We believe that every person has a unique set of talents and aspirations, and we're here to ensure those talents find their perfect match in the professional world. Your achievements are our driving force, and your triumphs are the milestones that mark our journey. As you navigate through our intuitive interface and engage with our community, remember that your success is what fuels our passion. Together, let's transform the way you approach job searching, turning it into an exciting and rewarding expedition towards a future you've always envisioned.</p>
                </div>
                <img className="abt_photo" src={photoSix} alt="photoOne"/>
              </div>
              <div className="abt_mvm">
                <div className="abt_mvm_cnt">
                  <h3>Mission</h3>
                  <p>Empowering Dreams, Unveiling Opportunities.</p>
                </div>
                <div className="abt_mvm_cnt">
                  <h3>Vision</h3>
                  <p>A world where every individual's potential is unlocked, where careers flourish, and aspirations find their perfect match.</p>
                </div>
                <div className="abt_mvm_cnt">
                  <h3>Motto</h3>
                  <p>Connecting Dreams, Forging Futures</p>
                </div>
              </div>
              <div className="abt_jrn">
                <h2>Journey and milestone</h2>
                <p>Since our inception in 2015, our journey at HIRE-HUB has been a remarkable evolution driven by a relentless commitment to transforming the job search experience. What began as a vision to simplify and enhance the way individuals connect with job opportunities has blossomed into a thriving platform that empowers and inspires.</p>
                <p>Over the years, we've tirelessly worked to refine our platform, incorporating cutting-edge technology and user-centric design to create a seamless and intuitive experience. Our journey has been marked by continuous innovation, guided by the feedback and needs of our valued users. From our humble beginnings, we've grown into a dynamic community, connecting job seekers with employers across diverse industries and geographies.</p>
                <p>We've witnessed the positive impact of our efforts through the success stories of countless individuals who have found their dream jobs and embarked on meaningful careers with the help of HIRE-HUB. Our journey has been fueled by the passion to bridge the gap between aspirations and opportunities, and we're proud of the role we've played in shaping the professional journeys of many.</p>
                <p>As we reflect on our journey from 2015 to the present, we are filled with gratitude for the trust and support of our users, partners, and team members. Looking ahead, we are excited to continue our mission of empowering job seekers, facilitating connections, and being a catalyst for career growth. Our journey is far from over, and we invite you to be a part of the exciting chapters that lie ahead with HIRE-HUB.</p>
              </div>
            </div>
        </div>
    )
}

export default AboutUs;
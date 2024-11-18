import React from 'react'
import '../Style/style.css'
import staff1 from '../Images/customer1.jpg'
import staff2 from '../Images/customer3.jpg'
import staff3 from '../Images/news2.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <div id='home-mainImg'>
        <div>
          <Navbar />
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <div className="text-center">
          <h2>About Us</h2>
        </div>
        <div className="container">
          <div class="row" style={{ marginTop: "50px" }}>
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card cardShadow">
                <div className='aboutText'>
                  <h1>Quality news, <br /> where you want <br /> it, when you <br />want it.</h1>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card cardShadow">
                <div className='aboutText' style={{ lineHeight: "23px" }}>
                  <p>
                    The Blog App is a user-friendly platform designed for content creators to publish, manage, and share their articles with ease. Built with a responsive and modern user interface, it offers features like creating and editing blog posts, categorizing articles, and allowing users to comment and interact with the content. Whether you're a seasoned writer or just starting, the Blog App provides a seamless experience for readers and bloggers alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <div className="text-center">
          <h2>Our Staff</h2>
        </div>
        <div className="container">
          <div class="row" style={{ marginTop: "50px" }}>
            <div class="col-sm-4 mb-3 mb-sm-0 ">
              <div class="card cardShadow">
                <div class="card-body">
                  <div>
                    <img src={staff1} alt="Staff1" className='img-fluid' style={{ height: "400px", width: "400px" }} />
                    <h4 style={{ paddingTop: "20px" }}>Editor in Cheif</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card cardShadow">
                <div class="card-body">
                  <div>
                    <img src={staff2} alt="Staff1" className='img-fluid' style={{ height: "400px", width: "400px" }} />
                    <h4 style={{ paddingTop: "20px" }}>Production Specialist</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card cardShadow">
                <div class="card-body">
                  <div>
                    <img src={staff3} alt="Staff1" className='img-fluid' style={{ height: "400px", width: "400px" }} />
                    <h4 style={{ paddingTop: "20px" }}>Sales</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  )
}

export default About
import React from 'react'
import '../Style/style.css'
import blog from '../Images/blog3.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <div id='home-mainImg'>
        <div>
          <Navbar />
        </div>
      </div>

      <div className="container">
        <div className="" style={{ marginTop: "50px" }}>
          <div class="row ">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card cardShadow">
                <div class="card-body">
                  <div className="text-center contactTextClr">
                    <div className='cardShadow'>
                      <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Contact</h2>
                    </div>

                    <div className="row justify-content-center" style={{ marginTop: '20px' }}>
                      <div className="col-sm-6">
                        <div className="card cards_border_none">
                          <p ><a className='contactLinks' href="tel:123-456-7890">Tel: 123-456-7890</a></p>
                        </div>

                      </div>

                      <div className="col-sm-6">
                        <div className="card cards_border_none">
                          <p ><a className='contactLinks' href="mailto:info@my-domain.com">info@my-domain.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "#107070" }} />
                  <div>
                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className='contactTextClr'><b>First Name *</b></label>
                          <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6">
                          <label className='contactTextClr'><b>Last Name *</b></label>
                          <input type="text" className='form-control' />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <label className='contactTextClr'><b>Email *</b></label>
                          <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6">
                          <label className='contactTextClr'><b>Phone</b></label>
                          <input type="text" className='form-control' />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <label className='contactTextClr'><b>Message</b></label><br />
                          <textarea name="" id="" className="form-control" ></textarea>
                        </div>
                      </div>

                      <div>
                        <button className='btn btn-success mt-2'>Submit</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                {/* <div class="card-body"> */}
                <img src={blog} alt="ContactUs" className='img-fluid contactHeight' />
                {/* </div> */}
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

export default Contact
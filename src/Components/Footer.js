import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // 
        <>
            <footer className="section footer-classic context-dark" style={{ backgroundColor: "#1A1A1A", paddingTop: "100px" , overflow:"hidden" }} >
                <div className="container">
                    <div className="row row-30">

                        {/* Col 1 */}
                        <div className="col-12 col-md-3 col-xl-3">
                            <div className="pr-xl-4">
                                <h1 style={{ fontFamily: "Brush Script MT" }}>Blog</h1>
                                <p>Blogging is not about being an expert, it's about sharing your journey and learning as you go. Every new blog post is an opportunity to inspire someone, even when you don’t expect it.</p>
                                {/* <!-- Rights--> */}
                                {/* <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p> */}
                            </div>
                        </div>

                        {/* Col 2 */}
                        <div className="col-12 col-md-3 col-xl-3">
                            <h4>Quick Links</h4>
                            <ul className="nav-list">
                                <li><Link to='/Home'>Home</Link></li>
                                <li><Link to='/About'>About</Link></li>
                                <li><Link to='/Contact'>Contact</Link></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div className="col-12 col-md-3 col-xl-3">
                            <h4>Categories</h4>
                            <ul className="nav-list">
                                <li><Link to='/'>All Categories</Link></li>
                                <li><Link to='/'>Music</Link></li>
                                <li><Link to='/'>Movies</Link></li>
                                <li><Link to='/'>Sports</Link></li>
                                <li><Link to='/'>Tech </Link></li>
                                <li><Link to='/'>Fashion</Link></li>
                            </ul>
                        </div>

                        {/* Col 4 */}
                        <div className="col-12 col-md-3 col-xl-3">
                            <h4>Contacts</h4>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, Jaipur, Raj</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>Email:</dt>
                                <dd><a href="mailto:info@my-domain.com">info@my-domain.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>Phone:</dt>
                                <dd>
                                    <a href="tel:123-456-789">123-456-789</a>
                                </dd>
                            </dl>
                        </div>

                        {/* <!-- Rights--> */}
                        <div className="text-center" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                            <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>

                        </div>
                    </div>
                </div>

                {/* Social Media Buttons */}
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="https://www.facebook.com/"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="https://www.instagram.com/"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="https://www.linkedin.com/"><span className="icon mdi mdi-linkedin"></span><span>LinkedIn</span></a></div>
                    <div className="col"><a className="social-inner" href="https://www.google.com/"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer
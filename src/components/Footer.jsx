import React from 'react'
import logo from '../assets/images/Wilsh&HarviFooter.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      

    {/* <!-- main-footer --> */}
    <footer className="main-footer alternet-5">
        <div className="footer-upper">
            <div className="auto-container">
                <div className="upper-inner clearfix">
                    <div className="text pull-left">
                        <h2>Do you want to learn about us?</h2>
                        {/* <p>Consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua.</p> */}
                    </div>
                    <div className="btn-box pull-right">
                        <Link to ="/ContactUs"></Link>
                        <a href="/ContactUs" className="theme-btn style-one">Get In Touch Today</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-top">
            <div className="auto-container">
                <div className="widget-section">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo">
                                    {/* <a href="index-2.html">
                                    <img src={logo} width="80px" /></a> */}
                                <h3 id="Footers">Wilsh & Harvi Pvt.Ltd</h3></figure>

                                <div className="text">
                                    {/* <p>Tempor incididunt ut labore eut dolore veniam quis nostrud exercitation ullamc consequat. Duis aute irure.</p> */}
                                </div>
                                <ul className="info-list clearfix">
                                    <li><i className="fas fa-map-marker-alt"></i>613 Global Business Hub, Next to WTC, Kharadi,<br />
                                                                              Pune 411 014, MH, India

                                                                                                      </li>
                                    <li><i className="fas fa-envelope"></i>Email <a href="mailto:support@my-domain.com">www.wilshandharvi.com</a></li>
                                    <li><i className="fas fa-headphones"></i> <a href="tel:01005200369">+91 7249668168</a></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a href="index-2.html"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index-2.html"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index-2.html"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="index-2.html"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="index-2.html"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml-70">
                                <div className="widget-title">
                                    <h4>Useful Links</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li>
                                            <Link to="/AboutUs">About us </Link><a href="/AboutUs"></a></li>
                                        <li><a href="index-2.html">What We Offers</a></li>
                                        <li><a href="index-2.html">Testimonials</a></li>
                                        <li><a href="index-2.html">Our Projectss</a></li>
                                        <li><a href="index-2.html">Latest News</a></li>
                                        <li><a href="index-2.html">Privacy Policy</a></li>
                                        <Link to="/ContactUs"></Link>
                                        <li><a href="/ContactUs">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>What We Do</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="list clearfix">
                                        <li><a href="index-2.html">Financial Advice</a></li>
                                        <li><a href="index-2.html">Business Planning</a></li>
                                        <li><a href="index-2.html">Startup Help</a></li>
                                        <li><a href="index-2.html">Investment Strategy</a></li>
                                        <li><a href="index-2.html">Management Services</a></li>
                                        <li><a href="index-2.html">Market Research</a></li>
                                        <li><a href="index-2.html">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget newsletter-widget">
                                <div className="widget-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="widget-content">
                                    <div className="text">
                                        <p>Get in your inbox the latest News</p>
                                    </div>
                                    <form action="http://azim.commonsupport.com/Fionca/contact.html" method="post" className="newsletter-form">
                                        <div className="form-group">
                                            <i className="far fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="form-group">
                                            <i className="far fa-envelope"></i>
                                            <input type="email" name="email" placeholder="Email address" required="" />
                                        </div>
                                        <div className="form-group message-btn">
                                        <Link to="/ContactUs"></Link>
                                        <a href="/ContactUs" classNameName="theme-btn">
                                          Get a Quote
                                       </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="auto-container">
                <div className="copyright"><p>&copy;  <a href="index-2.html"></a> Powered by Wilsh & Harvi Pvt. Ltd.</p></div>
            </div>
        </div>
    </footer>
    {/* <!-- main-footer end --> */}
    </div>
  )
}

export default Footer

import React from 'react'
import './Footer.css'

function Footer() {


    return (
        <div className="footerMain">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="sofitFooter1">
                            <div className="footerimg">
                                <img src="../../../public/logo.png" alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quia reiciendis non porro tempora, cumque voluptate assumenda sit id asperiores nam provident! Deserunt nostrum repudiandae minima voluptates iste at eius!</p>
                            </div>
                            <div className="footerIcon">
                                <div className="icon">
                                    <i className='fa-brands fa-facebook'></i>
                                </div>
                                <div className="icon">
                                    <i className='fa-brands fa-twitter'></i>
                                </div>
                                <div className="icon">
                                    <i className='fa-brands fa-linkedin'></i>
                                </div>
                                <div className="icon">
                                    <i className='fa-brands fa-youtube'></i>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="footerHead2">
                            <div className="footerMainHead">
                                <h3>Quick Links</h3>
                            </div>

                            <div className="footerOption">
                                <div className="option">
                                    <h5>Our Services</h5>
                                </div>

                                <div className="option">
                                    <h5>Why Choose us</h5>
                                </div>

                                <div className="option">
                                    <h5>Our Company</h5>
                                </div>

                                <div className="option">
                                    <h5>Business Growth</h5>
                                </div>

                                <div className="option">
                                    <h5>How to Works</h5>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="contactFooter">
                            <div className="contactMain">
                                <h3>Our Contact</h3>
                            </div>
                            <div className="addressIcon">
                                <div className="iconMain">
                                    <i className='fa-solid fa-location-dot'></i>
                                </div>
                                <div className="iconHead">
                                    <div className="address1">
                                        <h5>Address:Pakistan</h5>
                                    </div>

                                    <div className="address2">
                                        <h5>Orani Town Karachi</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="addressIcon">
                                <div className="iconMain">
                                    <i className='fa fa-phone'></i>
                                </div>
                                <div className="iconHead">
                                <div className="address1">
                                        <h5>Phone:+923122372788</h5>
                                    </div>

                                    <div className="address2">
                                        <h5>+322 222 222</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="addressIcon">
                                <div className="iconMain">
                                    <i className='fa fa-envelope'></i>
                                </div>
                                <div className="iconHead">
                                <div className="address1">
                                        <h5>Email:ashabaz845@gmail.com</h5>
                                    </div>

                                    <div className="address2">
                                        <h5>Email:UqTtT@example.com</h5>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

import React, { Component } from 'react';
import Link from 'next/link';

class OurMission extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="our-mission-area">
                    <div className="container-fluid p-0">
                        <div className="row m-0">
                            <div className="col-lg-3 col-md-6 p-0">
                                <div className="mission-image bg-1">
                                    <img src={require("../../images/mission-img1.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 p-0">
                                <div className="mission-text">
                                    <div className="icon">
                                        <i className="flaticon-target"></i>
                                    </div>

                                    <h3>Our Mission</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                                    <Link href="#">
                                        <a className="default-btn">Learn More <span></span></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 p-0">
                                <div className="mission-image bg-2">
                                <img src={require("../../images/mission-img2.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 p-0">
                                <div className="mission-text">
                                    <div className="icon">
                                        <i className="flaticon-award"></i>
                                    </div>

                                    <h3>Our History</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                                    <Link href="#">
                                        <a className="default-btn">Learn More <span></span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurMission;
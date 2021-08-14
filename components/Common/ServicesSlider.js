import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

class ServicesSlider extends Component {

    _isMounted = false;
    state = {
        display:false,
    } 

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <section className="services-area">
                    <div className="container">
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-university"></i>

                                    <div className="icon-bg">
                                        <img src={require("../../images/icon-bg1.png")} alt="image" />
                                        <img src={require("../../images/icon-bg2.png")} alt="image" />
                                    </div>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Virtual Offices</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                                <Link href="#">
                                    <a className="read-more-btn">Learn More</a>
                                </Link>

                                <div className="box-shape">
                                    <img src={require("../../images/box-shape1.png")} alt="image" />
                                    <img src={require("../../images/box-shape2.png")} alt="image" />
                                </div>
                            </div>

                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-work"></i>

                                    <div className="icon-bg">
                                        <img src={require("../../images/icon-bg1.png")} alt="image" />
                                        <img src={require("../../images/icon-bg2.png")} alt="image" />
                                    </div>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Full-Time Offices</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                                <Link href="#">
                                    <a className="read-more-btn">Learn More</a>
                                </Link>

                                <div className="box-shape">
                                    <img src={require("../../images/box-shape1.png")} alt="image" />
                                    <img src={require("../../images/box-shape2.png")} alt="image" />
                                </div>
                            </div>

                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-room"></i>

                                    <div className="icon-bg">
                                        <img src={require("../../images/icon-bg1.png")} alt="image" />
                                        <img src={require("../../images/icon-bg2.png")} alt="image" />
                                    </div>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Conference Rooms</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                                <Link href="#">
                                    <a className="read-more-btn">Learn More</a>
                                </Link>

                                <div className="box-shape">
                                    <img src={require("../../images/box-shape1.png")} alt="image" />
                                    <img src={require("../../images/box-shape2.png")} alt="image" />
                                </div>
                            </div>

                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-location"></i>

                                    <div className="icon-bg">
                                        <img src={require("../../images/icon-bg1.png")} alt="image" />
                                        <img src={require("../../images/icon-bg2.png")} alt="image" />
                                    </div>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>Global Access</a>
                                    </Link>
                                </h3>

                                <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                                <Link href="#">
                                    <a className="read-more-btn">Learn More</a>
                                </Link>

                                <div className="box-shape">
                                    <img src={require("../../images/box-shape1.png")} alt="image" />
                                    <img src={require("../../images/box-shape2.png")} alt="image" />
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ServicesSlider;
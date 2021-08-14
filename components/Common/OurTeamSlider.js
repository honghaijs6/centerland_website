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
    center: true,
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

class OurTeamSlider extends Component {

    _isMounted = false;
    state = {
        display:false
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
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Meet Our Experts</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="team-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/2.jpg")} alt="image" />

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-linkedin-in"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Lee Munroe</h3>
                                    <span>Lead Designer</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/3.jpg")} alt="image" />

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-linkedin-in"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Calvin Klein</h3>
                                    <span>Lead Developer</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/4.jpg")} alt="image" />

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-linkedin-in"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Lead Architecure</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/1.jpg")} alt="image" />

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-linkedin-in"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="fab fa-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Alastair Cook</h3>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeamSlider;
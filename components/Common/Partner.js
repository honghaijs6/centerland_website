import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 3,
            margin: 10,
        },
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        1200: {
            items: 7,
        }
    }
}

class Partner extends Component {

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
                <section className="partner-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="partner-title">
                            <h2>Đối tác của chúng tôi</h2>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/1.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/2.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/3.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/4.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/5.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/6.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/7.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Partner;
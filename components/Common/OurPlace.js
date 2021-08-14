import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    animateOut: 'fadeOut',
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}

class OurPlace extends Component {

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
                <section className="place-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="place-content">
                                    <span className="sub-title">Our Place</span>
                                    <h2>Building & Area</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <ul className="features-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-parking"></i>
                                            </div>
                                            <span>Parking Area</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-breakfast"></i>
                                            </div>
                                            <span>Restaurants</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-shop"></i>
                                            </div>
                                            <span>Supermarket</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                {this.state.display ? <OwlCarousel 
                                    className="place-image-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="single-place-image bg1">
                                        <img src={require("../../images/place-img1.jpg")} alt="image" />
                                    </div>

                                    <div className="single-place-image bg2">
                                        <img src={require("../../images/place-img2.jpg")} alt="image" />
                                    </div>

                                    <div className="single-place-image bg3">
                                        <img src={require("../../images/place-img3.jpg")} alt="image" />
                                    </div>
                                </OwlCarousel> : ''}
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurPlace;
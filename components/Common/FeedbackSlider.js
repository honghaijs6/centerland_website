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
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}

class FeedbackSlider extends Component {

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
                <div className="feedback-area ptb-100">
                    <div className="container">
                    {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback-item">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida.</p>

                                <div className="client">
                                    <img src={require("../../images/partner-image/1.png")} alt="image" />
                                </div>
                            </div>

                            <div className="single-feedback-item">
                                <p>Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <div className="client">
                                    <img src={require("../../images/partner-image/2.png")} alt="image" />
                                </div>
                            </div>

                            <div className="single-feedback-item">
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna, lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.</p>

                                <div className="client">
                                    <img src={require("../../images/partner-image/3.png")} alt="image" />
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FeedbackSlider;
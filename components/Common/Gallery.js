import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    require('../../images/gallery-image/1.jpg'),
    require('../../images/gallery-image/2.jpg'),
    require('../../images/gallery-image/3.jpg'),
    require('../../images/gallery-image/4.jpg'),
    require('../../images/gallery-image/5.jpg'),
    require('../../images/gallery-image/6.jpg'),
    require('../../images/gallery-image/7.jpg'),
    require('../../images/gallery-image/8.jpg'),
    require('../../images/gallery-image/9.jpg'),
    require('../../images/gallery-image/10.jpg'),
]

class Gallery extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <React.Fragment>
                <section className="gallery-area ptb-100 pb-0">
                    <div className="container">
                        <div className="section-title">
                            <h2>Tuam Spaces Gallery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="shorting">
                            <div className="row">
                            {isOpenImage && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpenImage: false })}
                                    onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}

                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/1.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/2.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/3.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/4.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/5.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/6.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/7.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 6 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/8.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 7 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/9.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 8 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
                                    </Link>
                                </div>
            
                                <div className="single-gallery-box">
                                    <img src={require("../../images/gallery-image/10.jpg")} alt="image" />
            
                                    <Link href="#">
                                        <a 
                                            className="gallery-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 9 })}}
                                        >
                                            <i className="flaticon-expand"></i>
                                        </a>
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

export default Gallery;
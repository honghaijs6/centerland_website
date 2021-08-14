import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="services-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Ký gủi</h2>
                            <p>Các sản phẩm ký gủi tại Center Land Land</p>
                        </div>

                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
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
                                            <a>Đất nền</a>
                                        </Link>
                                    </h3>

                                    <p>Tổng hợp những vị trí hết sức tiềm năng </p>

                                    <Link href="#">
                                        <a className="read-more-btn">Xem thêm</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src={require("../../images/box-shape1.png")} alt="image" />
                                        <img src={require("../../images/box-shape2.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-security"></i>
                                        <div className="icon-bg">
                                            <img src={require("../../images/icon-bg1.png")} alt="image" />
                                            <img src={require("../../images/icon-bg2.png")} alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link href="#">
                                            <a>Căn Hộ</a>
                                        </Link>
                                    </h3>

                                    <p>Những dự án căn hộ</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Xem thêm</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src={require("../../images/box-shape1.png")} alt="image" />
                                        <img src={require("../../images/box-shape2.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-shop"></i>
                                        <div className="icon-bg">
                                            <img src={require("../../images/icon-bg1.png")} alt="image" />
                                            <img src={require("../../images/icon-bg2.png")} alt="image" />
                                        </div>
                                    </div>

                                    <h3>
                                        <Link href="#">
                                            <a>Nhà Phố</a>
                                        </Link>
                                    </h3>

                                    <p>Các sản phẩm của đối tác </p>

                                    <Link href="#">
                                        <a className="read-more-btn">Xem thêm</a>
                                    </Link>

                                    <div className="box-shape">
                                        <img src={require("../../images/box-shape1.png")} alt="image" />
                                        <img src={require("../../images/box-shape2.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurServices;
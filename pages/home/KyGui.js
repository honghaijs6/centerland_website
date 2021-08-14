import React, { Component } from 'react';
import Link from 'next/link';



const KyGui = ()=> {
    
    const routeUrl = '/ky-gui';
    return (
        <React.Fragment>
            <section className="services-area ptb-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Ký gửi</h2>
                        <p>Các sản phẩm ký gủi tại Center Land</p>
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
                                    <Link href={routeUrl+'/dat-nen'}>
                                        <a>Đất nền</a>
                                    </Link>
                                </h3>

                                <p>Tổng hợp những vị trí hết sức tiềm năng </p>

                                <Link href={routeUrl+'/dat-nen'}>
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
                                    <Link href={routeUrl+'/can-ho'}>
                                        <a>Căn Hộ</a>
                                    </Link>
                                </h3>

                                <p>Những dự án căn hộ</p>

                                <Link href={routeUrl+'/can-ho'}>
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
                                    <Link href={routeUrl+'/nha-pho'}>
                                        <a>Nhà Phố</a>
                                    </Link>
                                </h3>

                                <p>Các sản phẩm của đối tác </p>

                                <Link href={routeUrl+'/nha-pho'}>
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

export default KyGui;
import { doLoad } from '../../hook/ultil';

import React, { Component } from 'react';
import { Modal, Form, Button, InputGroup, Input } from 'react-bootstrap';

import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import dynamic from 'next/dynamic';

//const OwlCarousel = dynamic(import("react-owl-carousel3"));

import OwlCarousel from 'react-owl-carousel3';
import DatHen from '../../components/Popup/DatHen';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,

    items: 1,
    navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
};

const initData = [
    {
        id: 1,
        title: `Duy nhất 02 nền liền kề bao đẹp, bao sang, bao lợi
     nhuận`,
        video: '',
        photo: 'https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2F3.jpg?alt=media',
        CAT_NAME: '',
        meta_title:""
    },
];

const Item = (props) => {
    const { data } = props;
    const { title, photo, CAT_NAME } = data;

    
    const urlMid = data.meta_title.toString().indexOf(',') > -1 ? data.meta_title.replace(/,/g, '/') : data.meta_title.toString().replace(/,/g, '/') + '/s';
    const link = data.meta_title ? '/' + urlMid + '/' + data.slug : '';
    const btnText = data.video === '' ? 'Xem thêm' : 'Xem video';

    return (
        <div
            className="item main-banner"
            style={{
                backgroundImage: `url(${photo})`,
            }}
        >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="sub-title">{CAT_NAME}</span>
                            <h1>{title}</h1>

                            <div className="btn-box">
                                <Link href="#play-video" href="#" style={{ marginTop: 10 }}>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            props.onClick(link);
                                        }}
                                        className="optional-btn"
                                    >
                                        <i className="flaticon-play-button"></i> {btnText}
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a
                                        style={{ marginTop: 10 }}
                                        className="default-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            props.onClickBooking();
                                        }}
                                    >
                                        Đặt hẹn ngay <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
class Banner extends Component {
    _isMounted = false;
    state = {
        display: false,
        isOpen: false,
        data: initData,
        video: '', // current video id
        isOpenBooking: false,
        curInfo: null,
    };

    _fetchBoot() {
        doLoad('posts', {
            max: 3,
            is_boot: 1,
        }).then((res) => {
            if (res.name === 'success') {
                const list = res.rows;
                list.map((item) => {
                    item.photo = JSON.parse(item.images)[0]['url'];
                });

                this.setState({
                    data: list,
                });
            }
        });
    }
    componentDidMount() {
        this._isMounted = true;
        this._fetchBoot();

        this.setState({ display: true });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    openModal = (video = '') => {
        const id = video.split('v=')[1];

        this.setState({ isOpen: true, video: id });
    };

    _openBooking(info) {
        this.setState({
            isOpenBooking: true,
            curInfo: info,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-section">
                    {this.state.display ? (
                        <OwlCarousel className="home-slides owl-carousel owl-theme" {...options}>
                            {this.state.data.map((item) => {
                                return (
                                    <Item
                                        key={item.id}
                                        data={item}
                                        onClick={(link = null) => {
                                            if (item.video === '') {
                                                window.location.href = link;
                                            } else {
                                                this.openModal(item.video);
                                            }
                                        }}
                                        onClickBooking={() => {
                                            this._openBooking(item);
                                        }}
                                    />
                                );
                            })}
                        </OwlCarousel>
                    ) : (
                        ''
                    )}

                    <div className="banner-footer">
                        <div className="container-fluid p-0">
                            <div className="row m-0 align-items-center">
                                <div className="col-lg-5 col-md-12 p-0">
                                    {/*<div className="banner-video">
                    <Link href="#play-video">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn"
                      >
                        <i className="flaticon-play-button-1"></i>
                      </a>
                    </Link>
                    <span>Xem Video</span>
                      </div>*/}
                                </div>

                                <div className="col-lg-7 col-md-12 p-0">
                                    <div className="banner-contact-info">
                                        <ul>
                                            <li>
                                                <i className="flaticon-location"></i>
                                                <span>Trụ sở chính</span>Số 49, Đường số 5 - Khu đô thị Vạn Phúc - P.Hiệp Bình Phước - TP.HCM
                                            </li>

                                            <li>
                                                <i className="flaticon-calendar"></i>
                                                <span>Giờ làm việc</span>
                                                Chủ Nhật – Thứ Sáu: 08h00 – 17h00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.state.video} // youtube video
                    onClose={() => this.setState({ isOpen: false })}
                />

                <DatHen
                    isOpen={this.state.isOpenBooking}
                    onHide={() => {
                        this.setState({ isOpenBooking: false });
                    }}
                    data={this.state.curInfo}
                />
            </React.Fragment>
        );
    }
}

export default Banner;

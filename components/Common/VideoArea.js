import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';

class VideoArea extends Component {

    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <section className="video-area ptb-100 pb-0">
                    <div className="container">
                        <div className="video-content">
                            <h2>Xem thêm về đội ngũ của chúng tôi</h2>
                            <p>Cám ơn gia đình Center Land Land, Chúng ta đã có những khoản khắc tuyệt vời cùng nhau</p>
                        </div>

                        <div className="video-box">
                            <img 
                                src={"https://i.imgur.com/zPkafvC.jpeg"} 
                                alt="image" 
                            />

                            <div className="play-video">
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn"
                                    > 
                                        <i className="flaticon-play-button-1"></i>
                                    </a>
                                </Link>
                                <span>Watch Now</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='xQrk6doFiPo' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default VideoArea;
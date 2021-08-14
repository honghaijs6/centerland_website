import React, { Component } from 'react';
import Link from 'next/link';

class JoinNow extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="join-area ptb-100">
                    <div className="container">
                        <div className="join-content">
                            <h2>Tuam is a community where everyone is welcome.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <Link href="#" >
                                <a className="default-btn">
                                    Join Now <i className="flaticon-right-chevron"></i> 
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default JoinNow;
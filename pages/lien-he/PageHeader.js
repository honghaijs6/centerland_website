import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-title-area item-bg1"
                    style={{
                        backgroundImage:`url(https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2Fbig-team.png?alt=media)`,
                        height:900
                    }}
                >
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container"> 
                                <div className="page-title-content" >
                                    <h2>Liên hệ</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Trang Chủ</a>
                                            </Link>
                                        </li>
                                        <li>Liên Hệ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PageHeader;
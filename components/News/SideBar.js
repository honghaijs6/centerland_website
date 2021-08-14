
import React from 'react';
import Link from 'next/link' ; 


const SideBar  = (props)=>{

    return (
        <React.Fragment>
            <aside className="widget-area" id="secondary">
                {/* Search */}
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Tìm kiếm :</span>
                            <input type="search" className="search-field" placeholder="Tìm..." />
                        </label>
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Popular Posts */}
                <div className="widget widget_zash_posts_thumb">
                    <h3 className="widget-title">Bài viết phổ biến</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 10, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>KHU LIÊN HỢP CÔNG NGHIỆP – ĐÔ THỊ – DỊCH VỤ BÌNH DƯƠNG</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 21, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Khu Công nghiệp Bàu Bàng</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>June 30, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>HỆ THỐNG CÁC KHU CÔNG NGHIỆP VSIP</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Danh mục</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Becamex Bình Phước</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>VSHIP</a>
                            </Link>
                        </li>
                    </ul>
                </div>

               
                {/* Recent Posts */}
                <div className="widget widget_recent_entries">
                    <h3 className="widget-title">Bài viết mới nhất</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>KHU CÔNG NGHIỆP BÀU BÀNG</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>KHU LIÊN HỢP CÔNG NGHIỆP – ĐÔ THỊ – DỊCH</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>HỆ THỐNG CÁC KHU CÔNG NGHIỆP VSIP</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Archives */}
                <div className="widget widget_archive">
                    <h3 className="widget-title">Lưu trữ</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a> Tháng 05 2019</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tháng 4 2019</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tháng 03 2019</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Tags */}
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>bds </a>
                        </Link>
                        <Link href="#">
                            <a>datnen <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>becamex <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>chon-thanh <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>binh duong <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>bds-kimcuong <span className="tag-link-count"> (1)</span></a>
                        </Link>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
}

export default SideBar ;

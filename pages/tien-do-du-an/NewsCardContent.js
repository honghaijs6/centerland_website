import React, { Component } from "react";

import { useRouter } from 'next/router';



import Link from "next/link";

const list = [
  {
    title: "Tiến độ dự án Waterpoint Long An tháng 02 2020",
    photo:
      "http://bdskimcuong.thietkeweb-chuanseo.com/wp-content/uploads/2020/07/TIEN-DO-DU-AN-WATERPOINT-LONG-AN-THANG-02-NAM-LONG-HCM-05.jpg",
    desc:
      "Nam Long HCM – Sau gần 1 năm triển khai thi công hạ tầng và sản phẩm nhà phố, biệt thự, khu đô thị",
  },
  
  {
    title: "Dự án Akari City Bình Tân tháng 03/2020",
    photo:
      "http://bdskimcuong.thietkeweb-chuanseo.com/wp-content/uploads/2020/07/tien-do-akari-032020.jpg",
    desc:
      "Cập nhật tiến độ xây dựng dự án Akari City Bình Tân tháng 03/2020. Nhà thầu Cotecons dâng tích cực",
  },

  {
    title: "dự án Akari City Bình Tân tháng 05/2020",
    photo:
      "http://bdskimcuong.thietkeweb-chuanseo.com/wp-content/uploads/2020/07/TIEN-DO-DU-AN-AKARI-CITY-BINH-TAN-THANG-04-01.jpg",
    desc:
      "Cập nhật tiến độ xây dựng dự án Akari City Bình Tân tháng 05/2020. Hiện tại, đơn vị xây dựng Cotecons",
  },
];


const titles = {
    'becamex-binh-duong':'Dự Án Becamex Bình Dương',
    'vsip-1':'VSIP 1'
}

const BlogContent  = props =>{

    const router = useRouter()
    const { p } = router.query

    return (
        <React.Fragment>
          <div className="row">
            {list.map((item) => {
              return (
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/news-details">
                        <a>
                          <img
                            src={ item.photo}
                            alt="image"
                          />
                        </a>
                      </Link>
  
                      <div className="date">
                        <i className="flaticon-calendar"></i> Oct 14, 2020
                      </div>
                    </div>
  
                    <div className="post-content">
                      <h3>
                        <Link href="/news-details">
                          <a>{  item.title }</a>
                        </Link>
                      </h3>
                      <p>
                        { item.desc.substr(0,90)+'[..]'}
                      </p>
  
                      <Link href="/news-details">
                        <a className="default-btn">
                          Xem thêm <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
  
            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#">
                  <a className="prev page-numbers">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a className="page-numbers current">1</a>
                </Link>
              </div>
            </div>
            {/* End Pagination */}
          </div>
        </React.Fragment>
      );
}



export default BlogContent;

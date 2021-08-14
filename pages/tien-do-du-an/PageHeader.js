import React, { Component } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

const titles = {
  "becamex-binh-duong": "Dự Án Becamex Bình Dương",
  "vsip-1": "VSIP 1",
};

const PageHeader = ({ webcate = {}, post }) => {
  try {
    const router = useRouter();
    const { p } = router.query;
    if (post) {


      const photo = JSON.parse(post.images)[0];

      return (
        <React.Fragment>
          <div
            
            className="page-title-area item-bg4"
            style={{ marginTop:90, backgroundImage: `url(${photo.url})`, height:500}}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="page-title-content">
                    <h2> {post.title} </h2>
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Trang Chủ</a>
                        </Link>
                      </li>
                      <li> Tiến độ dự án </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export default PageHeader;

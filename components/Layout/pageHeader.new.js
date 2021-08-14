import config from "../../config/default.json";

import { AppContext } from "../../context/AppStateProvider";

import React, { useState, useContext } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

const bgImages = config.header;

const PageHeader = ({ webcate = [], post = {}, photo = "" }) => {
  //const { webCate } = useContext(AppContext) ;

  try {
    const router = useRouter();
    //
    const slug = router.query.slug
      ? router.query.slug
      : router.route.replace("/", "");

    // IF ROUTER HAS SUB ROUTE => SLUG : use route
    const info = webcate.find((item) => item.slug === slug);
    const subMenu = webcate.filter((item) => item.parent_id === info.parent_id);
    

    //console.log(subMenu) ;

    let title = info ? info.title : null;

    // GET PARENT CATE INFO
    let curRoute = router.route.replace("[slug]", "");
    curRoute = curRoute.replace("[...slug]", "");
    curRoute = curRoute.replace(/\//g, "");

    const parentInfo = webcate.find((item) => item.route === curRoute);

    console.log("===ROUTER HERE ==");
    console.log(slug);


    let bgURL = bgImages[slug];

    if (JSON.stringify(post) !== "{}") {
      const photo = JSON.parse(post.images)[0];
      bgURL = photo.url;
      title = post.title;
    }

    return (
      <React.Fragment>
        <div
          className="page-title-area item-bg2"
          style={{ 
            backgroundImage: `url(${bgURL})` 
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-content">
                  <h2>{title}</h2>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Trang Chủ</a>
                      </Link>
                    </li>
                    <li>{parentInfo ? parentInfo.title : null}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {subMenu.length > 0 ? (
            <div className="sub-navbar">
              <div className="container">
                <ul>
                  {subMenu.map((item) => {

                    const linkUrl = '/'+curRoute+'/'+item.slug ; 
                    return (
                      <li key={item.id} className={ slug === item.slug ? 'active' : '' }>
                        <Link href={linkUrl}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  } catch (err) {
    return null;
  }
};

export default PageHeader;

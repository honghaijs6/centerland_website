import config from "../../config/default.json";


import React, { useEffect } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

const bgImages = config.header;

const PageHeader = ({ webcate = [], post = {}, height = 450 }) => {
  //const { webCate } = useContext(AppContext) ;

  try {
    const router = useRouter();
    
     // GET PARENT CATE INFO
     let curRoute = router.route.replace("[slug]", "");
     curRoute = curRoute.replace("[...slug]", "");
     curRoute = curRoute.replace(/\//g, "");

    const slug = router.query.slug
      ? router.query.slug
      : router.route.replace("/", "");


    const findTag = Array.isArray(slug) ?  curRoute : slug ;
    
    
    
    

    // IF ROUTER HAS SUB ROUTE => SLUG : use route
    const info = webcate.find((item) => item.slug === findTag) ||  webcate.find((item) => item.route === findTag); 
    const findID = Array.isArray(slug) && info ? info.id :info.parent_id;
    const subMenu =  slug === 'tien-do-du-an' ? [] :  webcate.filter((item) => item.parent_id === findID) ;

    
    

    let title = info ? info.title : null;
    const parentInfo =   webcate.find((item) => item.route === curRoute);
    let bgURL =  info && info.images ? JSON.parse(info.images)[0]['url'] :  bgImages[slug];
    
    if (JSON.stringify(post) !== "{}") {

     

      const photo = JSON.parse(post.images)[0];
      bgURL = photo.url;
      title = post.title;

      //alert()
    }

    

    let elementId = document.getElementById("sub-navbar");
    useEffect(()=>{

      
    document.addEventListener("scroll", () => {

      if(elementId){
        if (window.scrollY > 370) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      }
      
    });

    },[elementId]);

    return (
      <React.Fragment>
        
        <div style={{ marginTop:70,}}>
        
        </div>
        <div
          className="page-title-area item-bg2"
          style={{ 
            backgroundImage: `url(${bgURL})`,
            height:height 
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
            <div className="sub-navbar" id="sub-navbar">
              <div className="container">
                <ul>
                  {subMenu.map((item) => {

                    const linkUrl = '/'+curRoute+'/'+item.slug ; 
                    const isActive = slug === item.slug ? 'active' : ''
                    return (
                      <li key={item.id} className={ isActive }>
                        <Link href={linkUrl}>
                          <a className={isActive} >{item.title }</a>
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

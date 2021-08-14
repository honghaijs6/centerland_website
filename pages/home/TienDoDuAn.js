import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

import { AppContext } from "../../context/AppStateProvider";
import {doLoad, Helper } from "../../hook/ultil";

const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const TienDoDuAn = (props) => {
  const { webCate } = useContext(AppContext);

  const [state, setState] = useState({
    display: false,
    rows: [],
  });

  useEffect(() => {
    doLoad("posts", {
      max: 7,
      parent_id: 9,
    }).then((data) => {
      setState((prev) => {
        return {
          ...prev,
          display: true,
          rows: data.rows || [],
        };
      });
    });
  }, [webCate]);

  return (
    <React.Fragment>
      <section className="services-area ptb-100 bg-f8f8f8">
        <div className="container">
          <div className="section-title">
            <h2>Tiến độ dự án</h2>
            <p>Bản tin luôn cập nhật tình hình tiến độ dự án</p>
          </div>

          {state.display ? (
            <OwlCarousel
              className="main-services-slides owl-carousel owl-theme"
              {...options}
            >
              {state.rows.map((item) => {
                const photo = JSON.parse(item["images"])[0]["url"];

                const url = '/tien-do-du-an/'+item.slug ; 




                return (
                  <div key={item.id} className="services-box">
                    <img style={{ height: 200 }} alt="bdskimcuong kimcuong land" src={photo} alt="image" />

                    <div className="services-content">
                      <h3>
                        <Link href={ url }>
                          <a style={{ fontWeight: "500" }}>
                            { item.title }
                          </a>
                        </Link>
                      </h3>
                      <p>
                        { item.summary }
                      </p>
                      
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TienDoDuAn;

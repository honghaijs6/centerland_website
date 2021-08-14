import { doLoad, myTime, Helper } from '../../hook/ultil';
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DuAn = (props) => {


  const [state, setState] = useState({
    display: false,
    rows: [],
  });

  useEffect(() => {
    doLoad("posts", {
      max: 3,
      meta_title: 'du-an',
    }).then((data) => {
      setState((prev) => {
        return {
          ...prev,
          display: true,
          rows: data.rows || [],
        };
      });
    });
  }, []);


  return (
    <React.Fragment>
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span
              className="sub-title"
              style={{ fontSize: 40, fontWeight: "500" }}
            >
              Dự án
            </span>
            <h2></h2>
            <p>Tổng quan về các dự án Center Land đang triển khai</p>
          </div>

          <div className="row">
            {state.rows.map((item, index) => {

              const photo = JSON.parse(item.images)[0]; 
              const linkUrl = '/du-an/'+Helper.doSlug(item['CAT_NAME'])+'/'+item.slug; 

              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href={linkUrl}>
                        <a>
                          <img
                            src={photo.url}
                            alt="image"
                            style={{ height: 200 }}
                          />
                        </a>
                      </Link>
                      <div className="date">
                        <i className="flaticon-calendar"></i> {myTime.format(item.date_created)}
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href={linkUrl}>
                          <a>{item.title.substr(0, 40)}</a>
                        </Link>
                      </h3>
                      <p>{item.summary.substr(0, 90) + "[...]"}</p>

                      <Link href={linkUrl}>
                        <a className="default-btn">
                          Xem thêm <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DuAn;

import myTime from "../../hook/ultil/myTime";

import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ListPost = ({ route = "du-an", webcate = [], listpost = [] }) => {
  const router = useRouter();
  const { slug } = router.query;

  // GET ROUTE INFO
  const cateInfo = webcate.find((item) => item.slug === slug);

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    setState({ data: listpost });
  }, [listpost]);

  return (
    <React.Fragment>
      <div className="row">
        {state.data.map((item) => {
          const photo = JSON.parse(item["images"])[0];
          const itemSlug = slug !== undefined ? slug + "/" : "";
          const linkUrl = "/" + route + "/" + itemSlug + item.slug;

          return (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href={linkUrl}>
                    <a>
                      <img src={photo.url} style={{ width:'100%'}} alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i className="flaticon-calendar"></i>{" "}
                    {myTime.format(item.date_created)}
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href={linkUrl}>
                      <a>{item.title}</a> 
                    </Link>
                  </h3>
                  <p>{item.summary}</p>

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

        
        

        {state.data.length > 0 ? (
          <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              {/*<Link href="#">
              <a className="prev page-numbers">
                <i className="fas fa-angle-double-left"></i>
              </a>
      </Link>*/}

              <Link href="#">
                <a className="page-numbers current">1</a>
              </Link>
            </div>
          </div>
        ) : <div style={{ textAlign: "center", width: "100%" }}>
        <img src="https://www.bvbnd.vn/wp-content/uploads/2020/08/cap-nhat.png" />
        <p>
          Cám ơn bạn đã theo dõi thông tin của chúng tôi <br />
          Hiện tại chúng tôi đang cập nhật dữ liệu <br></br>
        </p>
      </div>}
      </div>
    </React.Fragment>
  );
};

export default ListPost;

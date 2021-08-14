import config from "../../config/default.json";
import server from "../../config/server";
import { Helper } from "../../hook/ultil";

import { loadListPost } from "../../hook/before";

import React, { useState, useEffect, useContext } from "react";

import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Layout/PageHeader";

import FeedLoader from "../../components/Common/FeedLoader";
import ListPostDaoTao from "../../components/Common/ListPostDaoTao";

import Footer from "../../components/Layout/Footer";
import { useRouter } from "next/router";

import { AppContext } from "../../context/AppStateProvider";

// INTERNAL PAGE
import TuyenDung from "./TuyenDung";

const bgImages = config.header;

const TuyenDungDaoTao = (props) => {
  const { webCate } = useContext(AppContext);
  const [webcate, setCates] = useState([]);
  const [listPost, setListPost] = useState([]);
  const [pathRoute, setPathRoute] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    setLoading(true);
    if (webCate.length > 0) {
      setCates(webCate);

      const { slug } = router.query;
      loadListPost(webCate, slug).then((listPost) => {
        setListPost(listPost);
        setLoading(false);
      });
    }

    setPathRoute(Helper.extractPathRoute(router.pathname));

    return () => {};
  }, [webCate, router.query]);
  return (
    <React.Fragment>
      <Navbar data={webcate} />
      <PageHeader height={300} webcate={webcate} />

      {/* Blog Area */}
      <div className="blog-area ptb-100">
        <div className="container">
          {slug === "tuyen-dung" ? (
            <TuyenDung listpost={listPost} />
          ) : (
            <div className="row">
              <div className="col-lg-12 col-md-12">
                {isLoading ? (
                  <FeedLoader />
                ) : (
                  <ListPostDaoTao
                    listpost={listPost}
                    webcate={webcate}
                    route={pathRoute}
                  />
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
      {/* End Blog Area */}

      <Footer />
    </React.Fragment>
  );
};

TuyenDungDaoTao.getInitialProps = async (ctx) => {
  const { query, asPath } = ctx;

  const title =
    query.slug === "tuyen-dung" ? "Tuyển dụng" : "Giáo trình đào tạo";

  const sitePhoto = bgImages[query.slug];

  const arrDesc = {
    "tuyen-dung": `Bất Động Sản Center Land tuyển dụng 100 Nhân viên Sale và 20 Quản Lý 
    👉 Đến với Center bạn được gì ?
    💰 Trợ cấp 5tr/tháng + Hoa Hồng 20tr/ sp đến không giới hạn
    📖 Được đào tạo mọi thứ từ bình thường thành chuyên nghiệp
    🏆 Giải trí vui chơi thể thao đi đôi với làm việc
    🤝 Giúp đỡ nhiều người giàu lên từ Bất Động Sản
    👉 Cơ Hội Phát Triển Bản Thân Vượt Bật Dành Cho Tất Cả Mọi Người
    ** Trụ Sở Chính Visip1 - Thuận An - Bình Dương 
    ** Chi Nhánh KDC Vạn Phúc - Thủ Đức - TP HCM`,
    "giao-trinh-dao-tao": `Giúp các bạn hoàn thiện các kỹ năng với lịch học hàng tuần đa dạng phù hợp`,
  };

  const siteGraph = {
    type: "website",
    locale: "vi",
    url: server.host + asPath,
    site_name: title,
    description: arrDesc[query.slug],
    images: [
      {
        url: sitePhoto,
        alt: "bdskimcuong",
      },
    ],
  };
  return { siteGraph };

  return {};
};
export default TuyenDungDaoTao;

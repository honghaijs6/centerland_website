import config from "../../config/default.json";
import server from "../../config/server";
import { Helper } from "../../hook/ultil";

import { loadListPost } from "../../hook/before";

import React, { useState, useEffect, useContext } from "react";

import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Layout/PageHeader";


import ListPost from "../../components/Common/ListPost";
import FeedLoader from '../../components/Common/FeedLoader' ;

import Footer from "../../components/Layout/Footer";
import { useRouter } from "next/router";

import { AppContext } from "../../context/AppStateProvider";

const bgImages = config.header;

const TuyenDungDaoTao = (props) => {
  const { webCate } = useContext(AppContext);
  const [webcate, setCates] = useState([]);
  const [listPost, setListPost] = useState([]);
  const [pathRoute, setPathRoute] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

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
          <div className="row">
            <div className="col-lg-12 col-md-12">
              {isLoading ? (
                <FeedLoader />
              ) : (
                <ListPost
                  listpost={listPost}
                  webcate={webcate}
                  route={pathRoute}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      <Footer />
    </React.Fragment>
  );
};

TuyenDungDaoTao.getInitialProps = async (ctx) => {
  const { query, asPath } = ctx;

  const sitePhoto = bgImages[query.slug];
  console.log(sitePhoto);

  const siteGraph = {
    type: "website",
    locale: "vi",
    url: server.host + asPath,
    site_name: "Tin tức - Center Land",
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

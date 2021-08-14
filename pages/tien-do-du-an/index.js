// CONFIG
import config from "../../config/default.json";
import server from "../../config/server";
// HOOKS
import { loadListPost } from "../../hook/before";

import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Layout/PageHeader";
import Footer from "../../components/Layout/Footer";


import FeedLoader from '../../components/Common/FeedLoader';
import ListPost from "../../components/Common/ListPost";

import { AppContext } from "../../context/AppStateProvider";

const bgImages = config.header;

const TienDoDuAn = (props) => {
  const { webCate } = useContext(AppContext);
  const [webcate, setWebCate] = useState([]);
  const [listPost, setListPost] = useState([]);
  const [pathRoute, setPathRoute] = useState("");

  const [isLoading, setLoading] = useState(false);
  


  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if (webCate.length > 0) {
      setWebCate(webCate);

      const slug = router.route.replace("/", "");
      loadListPost(webCate, slug).then((listPost) => {
        setListPost(listPost);
        setPathRoute(slug);
        setLoading(false);
      });
    }

    return () => {};
  }, [webCate]);

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

TienDoDuAn.getInitialProps = async (ctx) => {
  const { query, route, pathname } = ctx;

  
  const url = server.host + pathname;
  const sitePhoto = bgImages[pathname.replace('/','')];
  console.log(sitePhoto);
  console.log(url);

  const siteGraph = {
    type: "website",
    locale: "vi",
    url,
    site_name: "Tiến độ dự án - Center Land",
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
export default TienDoDuAn;

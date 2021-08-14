// CONFIG

import { doGetInfo } from "../../hook/ultil";

import React, { useState, useEffect, useContext } from "react";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Details from "../../components/News/Details";

import PageHeader from "../../components/Layout/PageHeader"; //"./PageHeader";

import { AppContext } from "../../context/AppStateProvider";
import PlayList from "../../components/Layout/PlayList";

// VIEW POST HERE
function ViewPost({ post = {} }) {
  const { webCate } = useContext(AppContext);
  const [webcate, setWebCate] = useState([]);

  useEffect(() => {
    if (webCate.length > 0) {
      setWebCate(webCate);
    }

    return () => {};
  }, [webCate]);
  return (
    <React.Fragment>
      <Navbar data={webcate} />

    

      <PlayList post={post} style={{ marginTop:83, marginBottom:-70}} />
      <Details  post={post} />

      <Footer />
    </React.Fragment>
  );
}

ViewPost.getInitialProps = async (ctx) => {
  const { query } = ctx;

  console.log(query);

  const { slug } = query;
  const mySlug = Array.isArray(slug) ? slug[slug.length - 1] : slug; 

  const post = await doGetInfo("posts", mySlug);

  return { post };
};

export default ViewPost;

import { doAction } from "../../hook/ultil";

import { myTime, Helper } from "../../hook/ultil";
import React, { useEffect, useState } from "react";
import Comment from "../../components/Common/Comment";
import ListPostSameTag from "../../components/News/ListPostSameTag";

import { useRouter } from "next/router";

import Link from "next/link";

const Details = ({ post = {} }) => {
  if (JSON.stringify(post) !== "{}") {
    const router = useRouter();

    const photo = JSON.parse(post.images)[0];

    const [readTime, setReadTime] = useState(1);
    const [prevPost, setPrevPost] = useState(null);
    const [nextPost, setNextPost] = useState(null);

    useEffect(() => {
      const wordsPerMinute = 200; // Average case.
      const content = Helper.strip(post.content);

      let result;
      let textLength = content.split(" ").length;

      if (textLength > 0) {
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `${value} phút đọc`;
      }

      setReadTime(result);

      // GET PREV POST
      doAction("posts", "getPrev", post.id, {
        p: 0,
        max: 1,
        parent_id: post.parent_id,
      }).then((data) => {
        setPrevPost(data);
      });

      // GET NEXT POST
      // GET PREV POST
      doAction("posts", "getNext", post.id, {
        p: 0,
        max: 1,
        parent_id: post.parent_id,
      }).then((data) => {
        setNextPost(data);
      });

      return () => {};
    }, [router.asPath]);

    return (
      <React.Fragment>
        {/* CONTENT BODY  */}
        <div className="blog-details-area" style={{ paddingTop: 70 }}>
          <div className="container">
            <div className="row">
              {/* LEFT SIDE */}
              <div className="col-lg-12 col-md-12">
                <div className="blog-details-desc percent-80">
                  {/* POST CONTENT */}

                  <div className="article-content">
                    <div>
                      <div style={{ marginBottom: 10 }}>
                        <span
                          style={{
                            color: "#F55A21",
                            display: "inline-block",
                            textTransform: "uppercase",
                            borderBottom: "3px solid #F55A21",
                            height: 22,
                            fontSize: 12,
                          }}
                        >
                          {post["CAT_NAME"]}
                        </span>
                      </div>
                      <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <img
                              src={post["creator_avatar"]}
                              style={{
                                marginRight: 5,
                                width: 20,
                                height: 20,
                                borderRadius: 20 / 2,
                              }}
                            />
                            <Link href="#">
                              <a>{post.creator}</a>
                            </Link>
                          </li>
                          <li>
                            • <span>{myTime.format(post.date_created)}</span>
                          </li>
                          <li>
                            • <span>{readTime}</span>
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginTop: 30 }} className="article-image">
                        <img
                          src={photo.url}
                          style={{ width: "100%" }}
                          alt={post.title}
                        />
                      </div>

                      <div
                        style={{ marginTop: 20 }}
                        dangerouslySetInnerHTML={{
                          __html: post.content.replace(
                            /(<? *script)/gi,
                            "illegalscript"
                          ),
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* END POST CONTENT */}

                  {/* SHARE NETWORK */}
                  <div className="article-footer">
                    <div className="article-tags">
                      <span>
                        <i className="fas fa-bookmark"></i>
                      </span>

                      {post.meta_title.split(",").map((item, index) => {
                        return (
                          <Link key={index} href="#">
                            <a>{item}</a>
                          </Link>
                        );
                      })}
                    </div>

                  
                  </div>
                  {/* END SHARE */}
                  {/* PREV AND NEXT POST */}
                  <div className="post-navigation">
                    <div className="navigation-links">
                      <div className="nav-previous">
                        <span style={{ color: "#999", fontSize: 13 }}>
                          <i className="flaticon-left-chevron"></i> Bài viết
                          trước
                        </span>
                        <div style={{ marginTop: 10 }}>
                          {prevPost ? (
                            <Link
                              href={router.asPath.replace(
                                post.slug,
                                prevPost.slug
                              )}
                            >
                              <a>{prevPost.title}</a>
                            </Link>
                          ) : null}
                        </div>
                      </div>

                      <div className="nav-next">
                        <span style={{ color: "#999", fontSize: 13 }}>
                          Bài viết sau{" "}
                          <i className="flaticon-right-chevron"></i>
                        </span>
                        <div style={{ marginTop: 10 }}>
                          {nextPost ? (
                            <Link
                              href={router.asPath.replace(
                                post.slug,
                                nextPost.slug
                              )}
                            >
                              <a>{nextPost.title}</a>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PREV AND NEXT */}

                  {/* END COMMENTS  */}
                </div>
              </div>

              {/* RIGHT SIDE */}
              {/*<div className="col-lg-4 col-md-12">
                <SideBar />
                    </div>*/}
            </div>
          </div>
          <div style={{ background: "#F3F4F7", paddingTop:50 }}>
            <div className="container">
              {/*  LIST SAME CATES POSTS */}
              <div style={{ textAlign:'center', marginBottom:30}}>
                <h3>Bài Viết Tương Tự</h3> 
              </div>
              <ListPostSameTag tag={post["CAT_NAME"]} /> 
            </div>
          </div>
        </div>
        {/* END BODY */}
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Details;

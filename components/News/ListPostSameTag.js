import {myTime, Helper} from "../../hook/ultil";

import { doLoad } from '../../hook/ultil' ; 

import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ListPostSameTag = ({ tag = "du-an" }) => {


  const router = useRouter();
  const { slug } = router.query;

  console.log("== SLIG ====")
  console.log(slug);


  const route = router.asPath.split('/')[1]




  

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    
    tag = Helper.doSlug(tag);
    doLoad('posts',{
        max:3,
        meta_title:tag
    }).then((res)=>{

        
        if(res.name === 'success'){
            setState({
                data:res.rows
            });
        }


    });

    return ()=>{}

  }, [router.asPath]);

  return (
    <React.Fragment>

      
      <div className="row">
        {state.data.map((item) => {
          const photo = JSON.parse(item["images"])[0];
          const itemSlug =  Array.isArray(slug) ? slug[0] : '';
          const linkUrl = "/" + route + "/" + itemSlug + '/' + item.slug;

          return (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="single-blog-post" style={{ background:'transparent'}}>
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

                <div className="post-content" style={{ background:'transparent'}}>
                 
                    <Link href={linkUrl}>
                      <a>{  item.title }</a>
                    </Link>
                  
                 
                </div>
              </div>
            </div>
          );
        })}

        
        

      
      </div>
    </React.Fragment>
  );
};

export default ListPostSameTag;

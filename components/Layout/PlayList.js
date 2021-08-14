import { Helper } from "../../hook/ultil";

import React, { useState, useEffect } from "react";

const PlayList = ({ post = null, style = {} }) => {
  const [state, setState] = useState({

    curItem:null,
    playlist: [],
    isPlayUrl: null,
  });

  useEffect(() => {
    if (post) {
      const playlist = post.playlist !== null ? JSON.parse(post.playlist) : [];
      const urlParams = Helper.parseUrl(playlist[0]['url']);

      setState((prev) => {
        return {
          ...prev,
          playlist,
          isPlayUrl: urlParams.v,
          curItem: playlist[0]['id']
        };
      });
    }
  }, [post]);

  
  const _onPlay = (item)=>{

    const urlParams = Helper.parseUrl(item.url);
    setState(prev=>{
        return {
            ...prev,
            isPlayUrl:urlParams.v,
            curItem: item.id
        }
    })
  }


  if (post) {
    return (
      <div style={{ ...style, background: "#2E282E" }}>
        <div className="container" style={{ paddingTop:30, paddingBottom:30}}>

          <h2 style={{ color:'#fff', marginLeft:0, marginBottom:20}}>Giáo trình Dành cho Nhân viên mới Center Land</h2>    
          <div className="row">
            <div className="col-md-8 player" style={{ marginRight:0, paddingRight:0}}>
              {state.isPlayUrl ? (
                <iframe
                  width="100%"
                  height="550"
                  src={
                    "https://www.youtube.com/embed/" +
                    state.isPlayUrl +
                    "?autoplay=1&rel=0"
                  }
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
            </div>
            <div
              className="col-md-4 playlist"
              style={{
                padding: 20,
                margin: 0,
                background: "#F3F4F7",
                height: 550,
                overflowY: "auto",
              }}
            >
              <ul>
                {state.playlist.map((item, index) => {

                    const isActive  = state.curItem === item.id ? 'active' : '' ;
                  return (
                    <li key={item.id} onClick={()=>{ _onPlay(item) }} className={isActive} >
                      <span className="badge badge-success mr-3">
                        {" "}
                        {index + 1}{" "}
                      </span>
                      <a>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default PlayList;

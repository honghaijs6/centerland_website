import { AppContext } from "../../context/AppStateProvider";
import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";
import { useRouter } from "next/router";


const CateSideBar = ({ route = "du-an", data={} }) => {
  
  

  const router = useRouter();
  const { slug } = router.query;

  // GET ROUTE INFO
  const info = data.find((item) => item.route === route);
  const list = data.filter((item) => item.parent_id === info?.id);

  if (list) {
    return (
      <React.Fragment>
        <aside className="widget-area" id="secondary">
          {/* Categories */}
          <div className="widget widget_categories">
            <h3 className="widget-title">Danh mục</h3>

            <ul>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={"/" + info.route + "/" + item.slug}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          
        </aside>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default CateSideBar;

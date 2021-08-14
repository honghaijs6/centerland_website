import React, { useState, useContext, useEffect} from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import { AppContext } from '../context/AppStateProvider';

export default function Custom404() {

  const [webcate, setWebCate] = useState([]);
  const { webCate } = useContext(AppContext);

  useEffect(()=>{

    setWebCate(webCate);
    
  },[webCate]);
  return (
    <React.Fragment> 
      <Navbar data={webcate} />
      <div
        className="page-title-area item-bg-not-found d-none d-sm-block" 
        style={{ maxHeight: 80, background: "#2E282E" }}
      >
        <div className="d-table">
          <div className="d-table-cell"></div>
        </div>
      </div>

      <div className="blog-details-area ptb-100">
        <div className="container">
            <div className="text-center">
                <img  src="https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/honghai%2F404.png?alt=media&token=043ba675-9b0f-48b6-8d7b-da0358d7be45"/>
                <p>
                    Liên kết bạn đang xem dườn như bị hỏng, hoặc là bị xóa bởi quản trị viên <br/>
                    Bạn có thể trở về trang trước hoặc về trang chủ của chúng tôi
                    
                </p>
            </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

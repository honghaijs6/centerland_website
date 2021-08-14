import { Helper, doPost } from "../../hook/ultil";
import detectForm from "../../hook/before/detectForm";

import React, { useState } from "react";
import Link from "next/link";

const initData = {
  type: "theo-doi-ban-tin",
  cus_email: "",
};
const Footer = () => {
  const [state, setState] = useState(initData);
const [isSubmited, setSubmit] = useState(false) ; 

  const _submit = (e) => {
    e.preventDefault();

   
    if (detectForm(["cus_email"], state) === "") {
      // DETECT EMAIL INVALID
      if (Helper.invalidEmail(state.cus_email)) {
        doPost("feedbacks", state).then((res) => {
          if (res.name === "success") {
            setState(initData);
            setSubmit(true);
          }
        });
      } else {
        let el = document.querySelector("#form-err");
        el.innerHTML =
          '<span class="text-danger"> Email của bạn không hợp lệ </span>';
      }
    }
  };

  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="container">
          <div className="subscribe-area">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="subscribe-content">
                  <h3 style={{ color:'#fff'}}>Đăng ký nhận bản tin</h3>
                  <p>
                    Hãy đăng ký để nhận được những bản tin mới nhất từ Center
                    Land, những thông tin hữu ích cho giới đầu tư
                  </p>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                { !isSubmited ? 
                <div className="subscribe-form">
                  <div id="form-err" style={{ color: "#fff" }}></div>
                  <form
                    className="newsletter-form"
                    onSubmit={(e) => {
                      _submit(e);
                    }}
                  >
                    <input
                     defaultValue={ state.cus_email}
                      id="cus_email"
                      onKeyUp={(e) => {
                        const cus_email = e.target.value;
                        
                        setState((prev) => {
                          return {
                            ...prev,
                            cus_email,
                          };
                        });
                      }}
                      type="email"
                      className="input-newsletter"
                      placeholder="Email của bạn"
                      name="EMAIL"
                    />
                    <button type="submit">
                      Nhận bản tin <i className="flaticon-right-chevron"></i>
                    </button>
                  </form>
                </div>:<div style={{ color:'#00946f', fontSize:20}}>
                    <i style={{ marginRight:15}} className="fa fa-check-circle"  /> 
                    Bạn đã đăng ký theo dõi bản tin thành công!
                </div>
}
              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        style={{ height: 70 }}
                        src={require("../../images/logo.png")}
                        alt="image"
                      />
                    </a>
                  </Link>

                  <p>Giúp khách hàng đầu tư An toàn - Hiệu quả</p>
                </div>

                <ul className="social">
                  <li>
                    <Link href="https://www.facebook.com/CenterLand.DY">
                      <a target="_blank">
                        <i className="flaticon-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/CenterLand1">
                      <a target="_blank">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://www.instagram.com/CenterLand">
                      <a target="_blank">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-footer-widget">
                <h3 style={{ fontWeight: "500" }}>Liên hệ</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span style={{ fontWeight: "500" }}>Trụ sở chính :</span> Ô
                    Số 49, Đường số 5 - Khu đô thị Vạn Phúc - P.Hiệp bình phước - TP.HCM
                    
                  </li>
                  
                  <li>
                    <span style={{ fontWeight: "500" }}>Email:</span>{" "}
                    <a href="#">info@bdscenterland.vn</a>
                  </li>
                  <li>
                    <span style={{ fontWeight: "500" }}>Phone:</span>{" "}
                    <a href="#">0905 459 039</a>
                  </li>
                  {/**<li><a href="https://goo.gl/maps/1xz4L8TGSdkBhVmb7" target="_blank">Xem trên bản đồ</a></li>*/}
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  <i className="far fa-copyright"></i> 2021{" "}
                  <a href="#" target="_blank" style={{ fontWeight: "500" }}>
                    {" "}
                    Center Land Team
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <ul>
                  <li>
                    <Link href="#">
                      <a>Chính sách</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Điều khoản</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

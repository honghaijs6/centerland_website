import React, { Component } from "react";
import Link from "next/link";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-section" style={{ paddingTop:70, paddingBottom:70}}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <div className="img1">
                    <img
                      style={{ width:550}}
                      src={require("../../images/about-image/toa-nha-cty.jpg")}
                     
                      alt="image"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span className="sub-title">Về chúng tôi</span>
                  <h2>Tầm nhìn và sứ mệnh</h2>
                  <p>
                    Trở thành một tập đoàn đầu tư và phân phối bất động sản hàng
                    đầu Việt Nam dựa trên việc phát triển năng lực thẩm định dự
                    án, giới thiệu cho khách hàng cơ hội đầu tư, an cư lạc
                    nghiệp. Đồng thời phát triển toàn diện nhân sự đủ TÂM – TẦM
                    – TÀI, tạo môi trường làm việc chuyên nghiệp, phát triển bản
                    thân, làm giàu chân chính cho thế hệ lao động Việt Nam.
                  </p>

                  <ul className="features-list">
                    <li>
                      <div className="icon">
                        <i className="flaticon-work"></i>
                      </div>
                      <span style={{ fontSize: "500" }}>Giá trí cốt lõi</span>5
                      Phẩm chất Super Sales của BĐS Center Land
                    </li>

                    <li>
                      <div className="icon">
                        <i className="flaticon-target"></i>
                      </div>
                      <span style={{ fontSize: "500" }}>Sứ mệnh</span>
                      Giúp khách hàng đầu tư hiệu quả, giàu lên cùng bất động
                      sản
                    </li>
                  </ul>

                  <Link href="/gioi-thieu/tam-nhin-va-su-menh">
                    <a className="read-more-btn">
                      Xem thêm <i className="flaticon-next"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;

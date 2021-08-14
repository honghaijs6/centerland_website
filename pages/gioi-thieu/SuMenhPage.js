import React, { Component } from "react";
import SectionContact from "../../components/Common/SectionContact";
import SuMenh from "../../components/Common/SuMenh";

class SuMenhPage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-area" style={{ marginBottom: 100 }}>
          <div className="container">
            <div className="percent-80" style={{ marginTop: -50 }}>
              {/* TẦM NHÌN */}
              <div>
                <div style={{ marginBottom: 40, textAlign: "center" }}>
                  <label
                    style={{
                      display: "inline-block",
                      paddingBottom: 10,
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: 30,
                      fontWeight: "500",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #333",
                    }}
                  >
                    <span style={{ color: "#333" }}>TẦM NHÌN</span>{" "}
                  </label>
                </div>
                <div>
                  <p style={{ fontSize: 18, textAlign: "center" }}>
                    Trở thành một tập đoàn đầu tư và phân phối bất động sản hàng
                    đầu Việt Nam dựa trên việc phát triển năng lực thẩm định dự
                    án, giới thiệu cho khách hàng cơ hội đầu tư, an cư lạc
                    nghiệp. Đồng thời phát triển toàn diện nhân sự đủ TÂM – TẦM
                    – TÀI, tạo môi trường làm việc chuyên nghiệp, phát triển bản
                    thân, làm giàu chân chính cho thế hệ lao động Việt Nam.
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      style={{ width: "100%" }}
                      src={require("../../images/about-image/big-team.png")}
                    />
                  </p>
                </div>
              </div>

              {/* SỨ MỆNH */}
             
            </div>
            
            <SuMenh style={{ marginTop:70}} />
            
          </div>
        </section>
       
        <SectionContact />
      </React.Fragment>
    );
  }
}

export default SuMenhPage;

import Link from "next/link";
import React, { Component } from "react";
import GiatriCotLoi from "../../components/Common/GiaTriCotLoi";

import SectionContact from "../../components/Common/SectionContact";

class AboutGiaTri extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-area" style={{ marginBottom:100}}>
           <GiatriCotLoi style={{ marginTop:-50}} />
        </section>
        <section>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className=" col-lg-5 col-md-12">
              <img
                style={{ height: 400 }}
                src="https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2Fpham-chat-Sao-chep.jpg?alt=media&token=423f07e9-a84b-4eae-a230-51ea373cba60"
              />
            </div>
            <div
              className="col-lg-7 col-md-12"
              style={{
                background: "#009245",
                width: "100%",
                color: "#fff",
                marginLeft: -15,
              }}
            >
              <div className="col-inner dark" style={{ padding: 30 }}>
                <h2 style={{ color: "#fff", marginBottom: 20 }}>
                  5 PHẨM CHẤT SUPER SALE BẤT ĐỘNG SẢN CENTER LAND
                </h2>
                <ol style={{ fontSize: 18 }}>
                  <li>Khát vọng tiến thủ</li>
                  <li>Tích cực vững vàng</li>
                  <li>Khiêm nhường học hỏi</li>
                  <li>Tư duy cùng thắng</li>
                  <li>Kiên trì phi thường</li>
                  
                </ol>
              </div>
            </div>
          </div>
        </section>

        <SectionContact />
      </React.Fragment>
    );
  }
}

export default AboutGiaTri;

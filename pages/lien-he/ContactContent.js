import detectForm from "../../hook/before/detectForm";
import { doPost, Helper } from "../../hook/ultil";

import React, { Component } from "react";
import Link from "next/link";

const initState = {
  isSubmit: false,
  type: "lien-he",
  cus_fullname: "",
  cus_email: "",
  cus_content: "",
};

class ContactContent extends Component {
  constructor(props) {
    super(props);

    this.state = initState;
  }

  _updateValue(field, value) {
    this.setState({
      [field]: value,
    });
  }

  _submit(e) {
    e.preventDefault();

    if (Helper.invalidEmail(this.state.cus_email)) {
      const postData = this.state;
      delete postData.isSubmit;

      doPost("feedbacks", postData).then((res) => {
        if (res.name === "success") {
          this.setState({ isSubmit: true });
        }
      });
    } else {
      let el = document.querySelector("#form-err");
      el.innerHTML =
        '<span class="text-danger"> Email của bạn không hợp lệ </span>';
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="contact-area ptb-100">
          <div
            className="container"
            style={{
              marginTop: -300,
              padding: 40,
              borderRadius: 12,
              background: "rgba(255,255,255,1)",
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="section-title">
                  <h2>Liên Hệ </h2>
                  <p></p>
                </div>

                <div className="contact-info">
                  <ul className="contact-list">
                    <li>
                      <div className="icon">
                        <i className="flaticon-location"></i>
                      </div>
                      <span>Trụ sở chính</span>Số 49, Đường số 5 - Khu đô thị Vạn Phúc - P.Hiệp Bình Phước - TP.HCM
                    </li>

                    

                    <li>
                      <div className="icon">
                        <i className="flaticon-email"></i>
                      </div>
                      <span>Email</span>
                      info@bdscenterland.vn
                      <br />
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-volume"></i>
                      </div>
                      <span>Phone</span>
                      +84 0905 459 039 <br />
                    </li>
                  </ul>

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

              <div className="col-lg-6 col-md-12">
                <div className="section-title">
                  <h2>Hãy liên hệ chúng tôi</h2>
                  <p>Chúng tôi chân thành cám ơn sự quan tâm của bạn</p>
                </div>

                <div className="contact-form">
                  {!this.state.isSubmit ? (
                    <form
                      id="contactForm"
                      onSubmit={(e) => {
                        this._submit(e);
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <input
                              defaultValue={this.state.cus_fullname}
                              onKeyUp={(e) => {
                                this._updateValue(
                                  "cus_fullname",
                                  e.target.value
                                );
                              }}
                              type="text"
                              name="name"
                              id="cus_fullname"
                              className="form-control"
                              required
                              data-error="Please enter your name"
                              placeholder="Họ & tên bạn"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <input
                              defaultValue={this.state.cus_email}
                              onKeyUp={(e) => {
                                this._updateValue("cus_email", e.target.value);
                              }}
                              type="email"
                              name="email"
                              id="cus_email"
                              className="form-control"
                              required
                              data-error="Please enter your email"
                              placeholder="Email"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <textarea
                              onKeyUp={(e) => {
                                this._updateValue(
                                  "cus_content",
                                  e.target.value
                                );
                              }}
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="6"
                              required
                              data-error="Write your message"
                              placeholder="Nội dung"
                            >
                              {this.state.cus_content}
                            </textarea>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <button
                            type="submit"
                            className="default-btn"
                            style={{ fontWeight: "500" }}
                          >
                            Gủi ngay <span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <div style={{ textAlign: "center", fontSize: 20 }}>
                        <i
                          className="fa fa-check-circle"
                          style={{ fontSize: 100, color: "#00946f" }}
                        ></i>
                        <div style={{ paddingTop: 50 }} className="btn-box">
                          Đã gủi thành công!
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-map">
            <img src={require("../../images/bg-map.png")} alt="image" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactContent;

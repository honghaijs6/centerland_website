import detectForm from "../../hook/before/detectForm";
import { doPost, Helper } from "../../hook/ultil";

import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";

import Link from "next/link";

const initState = {
  type: "tuyen-dung",
  cus_fullname: "",
  cus_phone: "",
  cus_email: "",
  content_ref: "",
};

const UngTuyen = ({ isOpen = false, onHide = () => {}, data = null }) => {
  const [isPostSuccess, setPostSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [state, setState] = useState(initState);

  useEffect(() => {
    if (data !== null) {
      _updateValue("content_ref", data.title);
    }

    return () => {};
  }, [data]);

  const _updateValue = (field = "", value = "") => {
    setState((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const _submitForm = (e) => {
    e.preventDefault();

    if (detectForm(["cus_fullname", "cus_phone", "cus_email"], state) === "") {
      // DETECT EMAIL INVALID
      if (Helper.invalidEmail(state.cus_email)) {
        setLoading(true);
        doPost("feedbacks", state).then((res) => {
          if (res.name === "success") {
            setPostSuccess(true);
            setLoading(false);
            setState(initState);
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
    <Modal show={isOpen} onHide={onHide}>
      <Modal.Body style={{ background: "#F3F4F7", padding: 40 }}>
        <h4
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "#00946F",
            textTransform: "uppercase",
          }}
        >
          {!isPostSuccess ? "Ứng Tuyển" : "Gửi Thành công!"}
        </h4>

        <div
          style={{
            marginBottom: 30,
            fontSize: 13,
            color: "#777",
            textAlign: "center",
            width: "95%",
            color: "#777",
          }}
        >
          {!isPostSuccess
            ? `Bạn vui lòng để lại thông tin cá nhân, chúng tôi sẽ sắp xếp hẹn bạn
          đến văn phòng phỏng vấn 1 cách nhanh nhất có thể.`
            : `Chúng tôi đã nhận được thông tin của bạn, bộ phận tuyển dụng sẽ liên hệ với bạn trong thời gian sớm nhất`}
        </div>

        {!isPostSuccess ? (
          <Form
            onSubmit={(e) => {
              _submitForm(e);
            }}
          >
            <Row style={{ marginBottom: 15 }}>
              <Col>
                <label
                  style={{ fontSize: 13, color: "#666", fontWeight: "500" }}
                >
                  Họ & Tên
                </label>
                <input
                  id="cus_fullname"
                  onKeyUp={(e) => {
                    _updateValue("cus_fullname", e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: 15 }}>
              <Col>
                <label
                  style={{ fontSize: 13, color: "#666", fontWeight: "500" }}
                >
                  Số ĐTDĐ
                </label>
                <input
                  id="cus_phone"
                  onKeyUp={(e) => {
                    _updateValue("cus_phone", e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </Col>
              <Col>
                <label
                  style={{ fontSize: 13, color: "#666", fontWeight: "500" }}
                >
                  E-mail
                </label>
                <input
                  id="cus_email"
                  onKeyUp={(e) => {
                    _updateValue("cus_email", e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </Col>
            </Row>

            <div style={{ height: 30, lineHeight: "30px" }} id="form-err"></div>

            <button
             className="btn btn-secondary"
              disabled={isLoading}
              size="lg"
              
              variant="info"
              type="submit"
              style={{ backgroundColor:'#00946f', border:`1px solid rgba(1,1,1,0.1)`, marginTop:20}}
            >
              {isLoading ? "Đang xử lý.." : "Gửi thông tin"}
            </button>

            <div style={{ paddingTop: 30 }}>
              <div style={{ textAlign: "center" }}>
                <div className="single-footer-widget">
                  <ul className="social">
                    <li>
                      <Link href="https://www.facebook.com/batdongsankimcuong.bd">
                        <a target="_blank">
                          <i className="flaticon-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/KimCuongLand1">
                        <a target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.instagram.com/kimcuongland">
                        <a target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Form>
        ) : (
          <div style={{ paddingBottom: 50, textAlign: "center", fontSize: 22 }}>
            <img src="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2018/12/SuccessSteps.5c093a205a8f0.png?auto=format&fit=max&w=300" />
            <div>Cám ơn bạn đã quan tâm đến kênh tuyển dụng của chúng tôi.</div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default UngTuyen;

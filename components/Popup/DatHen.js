import detectForm from "../../hook/before/detectForm";
import { doPost } from "../../hook/ultil";

import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";

import Link from "next/link";

const initState = {
  type: "dat-hen",
  cus_fullname: "",
  cus_phone: "",
  cus_email: "",
  content_ref: "",
};

const DatHen = ({ isOpen = false, onHide = () => {}, data = null }) => {
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

    if (detectForm(["cus_fullname", "cus_phone"], state) === "") {
      // DETECT EMAIL INVALID

      setLoading(true);
      doPost("feedbacks", state).then((res) => {
        if (res.name === "success") {
          setPostSuccess(true);
          setLoading(false);
          setState(initState);
        }
      });
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
          {!isPostSuccess ? "ĐẶT HẸN" : "Gửi Thành công!"}
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
            ? `Khi Bạn gủi yêu cầu lịch hẹn, chúng tôi sẽ liên hệ lại để tư vấn cũng như đặt lịch hẹn một cách nhanh chóng.`
            : `Chúng tôi đã nhận được thông tin của quý khách, chúng tôi liên hệ với quý khách trong thời gian sớm nhất`}
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
                  Tên quý khách
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
            </Row>

            <div style={{ height: 30, lineHeight: "30px" }} id="form-err"></div>

            <button
              className="btn btn-secondary btn-lg"
              disabled={isLoading}
              size="lg"
              variant="info"
              type="submit"
              style={{
                backgroundColor: "#00946f",
                border: `1px solid rgba(1,1,1,0.1)`,
                marginTop: 20,
              }}
            >
              {isLoading ? "Đang xử lý.." : "Gửi thông tin"}
            </button>

            <div style={{ paddingTop: 30 }}>
              <div style={{ textAlign: "center" }}>
                <div className="single-footer-widget">
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
            </div>
          </Form>
        ) : (
          <div style={{ textAlign: "center", fontSize: 20 }}>
            <i
              className="fa fa-check-circle"
              style={{ fontSize: 100, color: "#00946f" }}
            ></i>
            <div style={{ paddingTop: 50 }} className="btn-box">
              <a onClick={onHide} className="optional-btn">
                {" "}
                Khám phá thêm{" "}
              </a>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DatHen;

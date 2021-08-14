import detectForm from "../../hook/before/detectForm";
import { doPost } from "../../hook/ultil";

import React, { useState } from "react";
import { Modal, Form, Button, Col, Row, Input } from "react-bootstrap";

import GiatriCotLoi from "../../components/Common/GiaTriCotLoi";
import UngTuyen from "../../components/Popup/UngTuyen";
import ViSao from "../../components/Common/ViSao";

const TuyenDung = ({ listpost = [] }) => {
  const [isOpen, setOpen] = useState(false);
  const [curInfo, setCurInfo] = useState(null);

  /* PROCESS FORM */
  const _openForm = (info) => {
    setOpen(true);
    setCurInfo(info);
  };

  return (
    <div className="container">
      {/* TIN TUYEN DUNG CONTENT */}
      <div className="bang-tuyen-dung">
        <div className="title">
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
            <span style={{ color: "#009245" }}>Center Land</span> đang tuyển
            dụng
          </label>
        </div>
        <div style={{ marginTop: 30 }} className="percent-80">
          {listpost.map((item) => {
            return (
              <div className="item">
                <div className="desc">{item.title}</div>
                <div className="btn">
                  <button
                    onClick={() => {
                      _openForm(item);
                    }}
                    type="button"
                    className="btn btn-success"
                  >
                    Ứng tuyển
                  </button>
                </div>
              </div>
            );
          })}

          {listpost.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              Tin tuyển dụng đang cập nhật...
            </div>
          ) : null}
        </div>

        {/* VÌ SAO CHỌN Center Land */}
        <ViSao />
      
      </div>

      <GiatriCotLoi style={{ marginTop: 70 }} />

      {/* MODAL */}
      <UngTuyen
        isOpen={isOpen}
        onHide={() => {
          setOpen(false);
        }}
        data={curInfo}
      />
    </div>
  );
};

export default TuyenDung;

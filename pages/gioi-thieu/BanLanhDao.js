const BanLanhDao = (props) => {
  return (
    <section className="about-area" style={{ marginBottom: 100 }}>
      <div className="container">
        <div style={{ marginTop: -50 }}>
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
                <span style={{ color: "#333" }}>BAN LÃNH ĐẠO </span>{" "}
              </label>
            </div>
            <div className="row">
              <div className="col-md-4 mt-5">
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img
                     style={{ borderRadius: "50%", width:250, height:250 }}
                    src={require("../../images/lanh-dao/yen.png")}
                  />
                  <div style={{ marginTop: 15, textAlign: "center" }}>
                    <h4> Nguyễn Dạ Yến </h4>
                    <p>Giám Đốc Kinh Doanh</p>
                  </div>
                </div>
              </div>
              {/*<div className="col-md-4 mt-5">
                <div style={{ width: "100%", display:'none', textAlign: "center" }}>
                  <img
                    style={{ borderRadius: "50%", width:250, height:250 }}
                    src={require("../../images/lanh-dao/hieu.png")}
                  />
                  <div style={{ marginTop: 15, textAlign: "center" }}>
                    <h4> Phạm Văn Hiệu </h4>
                    <p>Chủ tịch HĐQT</p>
                  </div>
                </div>
              </div>*/}
              <div className="col-md-4 mt-5">
                <div style={{ width: "100%",   textAlign: "center" }}>
                  <img
                     style={{ borderRadius: "50%", width:250, height:250 }}
                    src={require("../../images/lanh-dao/thuy.png")}
                  />
                  <div style={{ marginTop: 15, textAlign: "center" }}>
                    <h4> Nguyễn An Thúy </h4>
                    <p>Cổ đông sáng lập</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanLanhDao;

const GiatriCotLoi = ({ style = {} }) => {
  return (
    <div className="container" style={style}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "#555",

            paddingBottom: 10,

            textTransform: "uppercase",
            fontWeight: "500",

            width: 230,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            borderBottom: "1px solid #555",
          }}
        >
          <div
            style={{
              color: "#009245",
              height: 40,
              width: 40,
              fontSize: 60,
              lineHeight: 0.7,
              fontWeight: "500",
            }}
          >
            3
          </div>
          <div style={{ textAlign: "left", marginLeft: 10, fontSize: 20 }}>
            <div>Giá trị cốt lõi</div>
            <div>Center Land</div>
          </div>
        </div>
      </div>

      {/* CONTENT 7 QUI TẮC */}
      <div className="row gia-tri-cot-loi" style={{ marginTop: 70 }}>
        <div className="col-lg-4 col-md-12">
          <div
            className="item"
            style={{
              backgroundImage: `url(https://news.blr.com/app/uploads/sites/3/2012/12/trust1.jpg)`,
            }}
          >
            <div className="number">1</div>
            <div className="title">Trung thực, đáng tin cậy</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div
            className="item"
            style={{
              backgroundImage: `url(https://img.etimg.com/thumb/msid-65768840,width-640,resizemode-4,imgsize-161713/successful-professional-traits.jpg)`,
            }}
          >
            <div className="number">2</div>
            <div className="title">Chuyên nghiệp</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div
            className="item"
            style={{
              backgroundImage: `url(https://imgix.bustle.com/rehost/2016/9/13/e73dab51-956e-4fbd-bf0f-bf23b0e50a39.jpeg?w=800&fit=crop&crop=faces&auto=format%2Ccompress)`,
            }}
          >
            <div className="number">3</div>
            <div className="title">Tinh thần trách nhiệm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiatriCotLoi;

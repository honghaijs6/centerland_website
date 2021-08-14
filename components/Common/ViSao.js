const ViSao = ({ style = {} }) => {
  return (
    <section className="section-visao">
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
          <span style={{ color: "#333" }}>Vì sao chọn</span>{" "}
          <span style={{ color: "#009245" }}>Center Land</span>
        </label>
      </div>

      <div className="row">
        <div style={{ backgroundColor: "#F4F5F9" }} className="col-md-4 item">
          <div style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-leaf" style={{ fontSize: 50 }} />
            <h3 style={{ marginTop: 10, marginBottom: 10 }}>Phúc lợi cao</h3>
            <p>
              Các chế độ, bảo hiểm, nghỉ lễ, ký kết hợp đồng lao động theo quy
              định hiện hành.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "#EDEEF2" }} className="col-md-4 item">
          <div style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-desktop" style={{ fontSize: 50 }} />
            <h3 style={{ marginTop: 10, marginBottom: 10 }}>
              Môi trường làm việc
            </h3>
            <p>
              Cơ hội thăng tiến cao, môi trường chuyên nghiệp năng động, sáng
              tạo
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "#E1E2E6" }} className="col-md-4 item">
          <div style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-graduation-cap" style={{ fontSize: 50 }} />
            <h3 style={{ marginTop: 10, marginBottom: 10 }}>Đào tạo</h3>
            <p>
              Giúp các bạn hoàn thiện các kỹ năng với lịch học hàng tuần đa dạng
              phù hợp
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "#E1E2E6" }} className="col-md-6 item">
          <div style={{ width: "100%", textAlign: "center" }}>
            <i className="fa  fa-rocket" style={{ fontSize: 50 }} />
            <h3 style={{ marginTop: 10, marginBottom: 10 }}>Công nghệ</h3>
            <p>
              Vận hành các công cụ tối ưu hóa tiên tiến nhất , bán hàng, tiếp
              thị, v.v
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "#F4F5F9" }} className="col-md-6 item">
          <div style={{ width: "100%", textAlign: "center" }}>
            <i className="fa fa-bicycle" style={{ fontSize: 50 }} />
            <h3 style={{ marginTop: 10, marginBottom: 10 }}>Thể thao</h3>
            <p>
              Tham gia hằng tuần các hoạt động thể thao như cùng đội nhóm Kim
              Cương
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViSao;




const SuMenh = ({style={}})=>{

    return(
        <div className="container" style={style}>
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
          <span style={{ color: "#333" }}>SỨ MỆNH</span>{" "}
          
        </label>
      </div>


        {/* CONTENT 7 QUI TẮC */}
        <div className="row gia-tri-cot-loi" style={{ marginTop: 70 }}>
          <div className="col-lg-4 col-md-12 mt-125">
            <div
              className="item"
              style={{
                backgroundImage: `url(https://nairametrics.com/wp-content/uploads/2020/03/Invest.jpg)`,
              }}
            >
                <div className="mask"></div>
                <div className="number">1</div>
              <div className="title-2">Giúp Khách Hàng Đầu Tư An Toàn, Hiệu Quả</div>
            </div>

            
          </div>
          <div className="col-lg-4 col-md-12">
            <div
              className="item"
              style={{
                backgroundImage: `url(https://timviec365.vn/pictures/news/2019/11/19/roo1574132459.jpg)`,
              }}
            >
                 <div className="mask"></div>
                <div className="number">2</div>
              <div className="title-2">Mang lại cơ hội thành công giàu có và hạnh phúc trọn vẹn bền vững cho thế hệ lao động Việt Nam.</div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: `url(https://delawareagency.com/wp-content/uploads/2019/08/corporate-business-team-and-manager-in-a-meeting-P2L6MPQ-1.jpg)`,
              }}
            >
                 <div className="mask"></div>
                <div className="number">3</div>
              <div className="title-2">Nâng tầm hình ảnh người môi giới bất động sản và ngành bất động sản tại Việt Nam.</div>
            </div>

          
          </div>
          <div className="col-lg-4 col-md-12 mt-125">
            <div
              className="item"
              style={{
                backgroundImage: `url(https://cms.luatvietnam.vn/uploaded/Images/Original/2019/11/27/cong-bo-cong-khai-cac-khoan-dong-gop_2711132632.jpg)`,
              }}
            >
                 <div className="mask"></div>
                <div className="number">4</div>
              <div className="title-2">Đóng góp tích cực cho xã hội.</div>
            </div>

            
          </div>
        </div>
      
      </div>
    )
}

export default SuMenh ;
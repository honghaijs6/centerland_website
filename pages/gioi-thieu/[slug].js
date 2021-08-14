import config from "../../config/default.json";
import server from "../../config/server";

import React, { useState, useEffect, useContext } from "react";

import { useRouter } from "next/router";

import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Layout/PageHeader";

import SuMenhPage from "./SuMenhPage";
import AboutGiaTri from "./AboutGiaTri";
import BanLanhDao from './BanLanhDao' ; 

import Footer from "../../components/Layout/Footer";

import { AppContext } from "../../context/AppStateProvider";

const bgImages = config.header;

const AboutUs = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const [cats, setCate] = useState([]);
  const { webCate } = useContext(AppContext);

  useEffect(() => {
    if (webCate.length > 0) {
      setCate(webCate);
    }
  }, [webCate]);


  
  return (
    <React.Fragment>
      <Navbar data={cats} />
      <PageHeader height={450} webcate={cats} />
      <div style={{ marginTop: 150 }}>
        
        {slug === "gia-tri-cot-loi" ? <AboutGiaTri /> : slug === 'tam-nhin-va-su-menh' ? <SuMenhPage /> : <BanLanhDao /> }
      </div>
      <Footer />
    </React.Fragment>
  );
};

AboutUs.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const arrTitle = {
    "ban-lanh-dao":`Ban lãnh đạo - Center Land`,
    "gia-tri-cot-loi":`Giá trị cốt lõi - - Center Land`,
    "tam-nhin-va-su-menh":`Tầm nhìn và sứ mệnh - Center Land`

  }

  const arrDesc = {
    "gia-tri-cot-loi": `Giá trị cốt lõi BĐS Center Land
    🤝 Trung thực, đáng tin cậy
    🤝 Chuyên nghiệp
    🤝 Tinh thần trách nhiệm
    ** Chi Nhánh KDC Vạn Phúc - Thủ Đức - TP HCM`,

    "tam-nhin-va-su-menh": `Trở thành một tập đoàn đầu tư và phân phối bất động sản hàng đầu Việt Nam, dựa trên việc phát triển năng lực thẩm định dự án, giới thiệu cho khách hàng, cơ hội đầu tư, an cư lạc nghiệp, đồng thời phát triển toàn diện nhân sự đủ TÂM – TẦM – TÀI, tạo môi trường làm việc chuyên nghiệp, phát triển bản thân làm giàu chân chính cho thế hệ lao động Việt Nam.`,
  };

  const siteGraph = {
    type: "website",
    locale: "vi",
    url: server.host,
    site_name: arrTitle[query.slug],
    description: arrDesc[query.slug],
    images: [
      {
        url: bgImages[query.slug],
        alt: "bdskimcuong",
      },
    ],
  };

  return {
    siteGraph,
  };
};

export default AboutUs;

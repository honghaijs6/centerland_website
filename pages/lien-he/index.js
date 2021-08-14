import server from "../../config/server";

import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";

import PageHeader from "./PageHeader";
import ContactContent from "./ContactContent";
import Footer from "../../components/Layout/Footer";

import { AppContext } from '../../context/AppStateProvider';



const Contact = (props) => {

  const { webCate } = useContext(AppContext);

  const [data, setData] = useState([]);

  useEffect(()=>{

    setData(webCate) ;
    
  },[webCate]);

  return (
    <React.Fragment>
      <Navbar data={data} />
      <PageHeader /> 
      <ContactContent />
      <Footer />
    </React.Fragment>
  );
}; 


Contact.getInitialProps = async ()=>{


  const siteGraph = {
    type: "website",
    locale: "vi",
    url: server.host,
    site_name: "Liên hệ - Center Land",
    description: `Trụ sở chính : Ô 8, DC 35, KDC Viet-Sing, KP.4, P. An Phú, TX. Thuận An, T.Bình Dương`,
    images: [
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2Fbig-team.png?alt=media",
        alt: "bdskimcuong",
      },
    ],
  };
  return { siteGraph };
}



export default Contact;

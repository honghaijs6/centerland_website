import server from '../../config/server' ;
import { Helper } from '../../hook/ultil' ;



import { loadListPost } from '../../hook/before';

import React, { useState, useEffect, useContext } from 'react';



import Navbar from '../../components/Layout/Navbar';
import PageHeader from '../../components/Layout/PageHeader';


import CateSideBar from '../../components/Common/CateSideBar'; 


import ListPost from '../../components/Common/ListPost' ; 

import Footer from '../../components/Layout/Footer';
import { useRouter } from "next/router";


import { AppContext } from '../../context/AppStateProvider';




const TuyenDungDaoTao = (props)=>{

    const { webCate } = useContext(AppContext);
    const [webcate, setCates] = useState([]);
    const [listPost, setListPost] = useState([]) ; 
    const [pathRoute, setPathRoute] = useState('') ; 

    const router = useRouter();
 

    useEffect(()=>{
        
        if(webCate.length > 0){
            setCates(webCate); 

            const { slug } = router.query ; 
            loadListPost(webCate,slug ).then((listPost)=>{
                setListPost(listPost);
    
            }); 
        }
        
        setPathRoute(Helper.extractPathRoute(router.pathname));
        
        return ()=>{}
        

    },[webCate,router.query]);
    return (
        <React.Fragment>
            <Navbar data={ webcate } />
            <PageHeader webcate={ webcate } /> 

            {/* Blog Area */}
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row"> 
                        
                        <div className="col-lg-4 col-md-12">
                            <CateSideBar data={ webcate } route={pathRoute} />
                        </div> 
                        <div className="col-lg-8 col-md-12">
                            <ListPost listpost={listPost} webcate={webcate } route={pathRoute} />
                        </div>

                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            <Footer />
        </React.Fragment>
    );
}

TuyenDungDaoTao.getInitialProps = async(ctx)=>{

    const { query, asPath } = ctx ; 
    
    const siteGraph = {
        type: "website",
        locale: "vi",
        url: server.host+asPath,
        site_name: "Tin tức - Center Land",
        images: [
          {
            url:
              "https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2Ftam-nhin.jpg?alt=media",
            alt: "bdskimcuong",
          },
        ],
      };
      return { siteGraph };

    
    return {}

}
export default TuyenDungDaoTao;
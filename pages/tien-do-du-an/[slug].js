
// CONFIG
import server from '../../config/server';



import React, { useState, useEffect, useContext} from "react";


import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Details from '../../components/News/Details' ; 

import PageHeader from "./PageHeader";


import { AppContext } from '../../context/AppStateProvider';


function MySlug({post={}}){
    
  const { webCate } = useContext(AppContext) ;
  const [webcate, setWebCate] = useState([]) ; 


  useEffect(()=>{

    if(webCate.length>0){

      setWebCate(webCate);

      
    }

    return ()=>{}
  },[webCate]);
  return (
    <React.Fragment>
      <Navbar data={webcate }/>
      <PageHeader post={post} webcate={webcate} /> 
      
      <Details  post={post} />
      
      <Footer />
    </React.Fragment> 
  );
};

MySlug.getInitialProps = async (ctx) => {

    const { query } = ctx ; 
    
    
    const url = `${server.host}/posts/getInfo/${query.slug}` ;  //`${server.host}/api/posts/${query.slug}`;
    const res = await fetch(url)
    const json = await res.json(); 




    
    
    return {post:json}

}

export default MySlug;

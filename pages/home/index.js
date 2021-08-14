
import React,{ useEffect, useContext, useState } from 'react' ; 
import Navbar from '../../components/Layout/Navbar';
import WeOfferSlider from '../../components/Common/WeOfferSlider';
import VideoArea from '../../components/Common/VideoArea' ;
import Partner from '../../components/Common/Partner';


import Footer from '../../components/Layout/Footer';


import Banner from './Banner';
import AboutUS from './AboutUs' ; 
import OurProject from './OurProject';
import TienDoDuAn from './TienDoDuAn';
import KyGui from './KyGui';

import { AppContext } from '../../context/AppStateProvider';

const Home = (props)=>{

    const [cats, setCates] = useState([]);
    const { webCate } = useContext(AppContext) ; 


    useEffect(()=>{
        setCates(webCate);
    },[webCate])

    
    return(
        <React.Fragment>
            <Navbar data={cats} />  
            <Banner />
            <TienDoDuAn /> 
            <AboutUS />
            <VideoArea /> 
            <OurProject />
            <KyGui />
            <Partner />
            <Footer />
        </React.Fragment>
    )
}

export default Home ; 
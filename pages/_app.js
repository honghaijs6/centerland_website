import "../assets/css/bootstrap.min.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/style.scss";
import "../assets/css/responsive.css";

import server from '../config/server';
import { Helper } from '../hook/ultil';

import App from "next/app";
import Router from 'next/router';

import NProgress from 'nprogress';

import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { AppStateProvider } from "../context/AppStateProvider";

import { NextSeo  } from "next-seo";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

import MessengerChat from '../components/Common/MessengerChat' ; 

class MyApp extends App {

  
  static async getInitialProps({ Component, router, ctx }) {
    let cookies = parseCookies(ctx)
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, cookies }
  }


  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    
    
      

    /*Router.events.on('routeChangeStart',()=>{
      alert('adasd')
      this.setState({loading:true});
    });

    Router.events.on('routeChangeComplete',()=>{
      this.setState({loading:false});
    });*/

    Router.events.on('routeChangeStart', () => this.setState({ loading: true }));
    Router.events.on('routeChangeComplete', () => this.setState({ loading: false }));


    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      1000
    );



  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  _extractArticle(post) {

    let url = server.host + '/'+ Helper.doSlug(post['CAT_NAME'])+'/'+post['slug']
    const photoURL = JSON.parse(post.images)[0]['url'] ;



    return {
      type: "article",
      locale: "vi",
      url,
      site_name: post.title,
      description: post.summary,
      article: {
        publishedTime: post.date_created,
        modifiedTime: post.date_modified,
        
        tags: post.meta_title.split(','),
      },
      images: [
        {
          url:photoURL,
          alt: "centerland",
        },
      ],
    };
  }
  
  render() {
    
    const { Component, pageProps, router, cookies } = this.props

    const { post, siteGraph } = pageProps;

    

    let openGraph = siteGraph ? siteGraph : {
      type:  "website",
      locale: "vi",
      url: server.host,
      site_name: "Center Land - Giúp khách hàng đầu tư An toàn - Hiệu quả",
      description: "Center Land - Kênh phân phối đất nền tái định cư Becamex Chơn Thành, Bình Phước",
      images: [
        {
          url:"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/kimcuong%2F111.jpg?alt=media",
          alt: "centerland",
        },
      ],
    }

    
    openGraph =  post && JSON.stringify(post) !=='{}' ? this._extractArticle(post) : openGraph
    

    return (
      <React.Fragment>
        <NextSeo
          title= { openGraph.site_name } 
          description={ openGraph.description }
          openGraph={openGraph}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: 'none',
            maxVideoPreview: -1,
          }}
        />

          
        <Component {...pageProps} />
        

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </React.Fragment>
    );
  }
}

const iniApp = ({ Component, pageProps }) => {
  return (
    <AppStateProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </AppStateProvider>
  );
};

export default iniApp;

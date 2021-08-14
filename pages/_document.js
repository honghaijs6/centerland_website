import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/centerland%2Ffavicon.png?alt=media"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300;1,700&display=swap" rel="stylesheet"></link>

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61180f86eda829bc"></script>

         

          <div id="fb-root"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
       window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v10.0'
        });
      };

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
      `,
            }}
          ></script>

          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="102376335464439"
            theme_color="#F65B22"
            logged_in_greeting="Cảm ơn bạn đã liên hệ với Center Land!
            Bạn để lại SĐT, KCL sẽ gọi tư vấn cho bạn nhé!"
            logged_out_greeting="Cảm ơn bạn đã liên hệ với Center Land!
            Bạn để lại SĐT, KCL sẽ gọi tư vấn cho bạn nhé!"
          ></div>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

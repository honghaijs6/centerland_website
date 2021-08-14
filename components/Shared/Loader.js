import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
              
            /*height: 5,
            background: "transparent",*/
          }}
          className={`preloader ${
            this.props.loading ? "" : "preloader-deactivate"
          }`}
        >
          <div className="loader5"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;

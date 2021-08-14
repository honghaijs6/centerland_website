import React, { useState, useEffect } from "react";
import Link from "../../ultils/ActiveLink";

const Navbar = ({ data = [] }) => {
  const [state, setState] = useState({
    display: false,
    collapsed: true,

    root: [],
    sub: [],
    data: [],
  });

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);

    setState((prev) => {
      return {
        ...prev,
        data,
      };
    });
  }, [data]);
  const toggleNavbar = () => {
    const collapsed = !state.collapsed;

    setState((prev) => {
      return {
        ...prev,
        collapsed,
      };
    });
  };

  const _haveSubList = (id = 0) => {
    return state.data.some((item) => item.parent_id === id);
  };

  const { collapsed } = state;
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="tuam-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  {/* For mobile device */}
                  <img
                    src={require("../../images/logo.png")}
                    alt="logo"
                    className="logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li>
                    <Link href="/">
                      <a
                        className="navbar-brand"
                        style={{ marginTop: 10, marginRight: 70 }}
                      >
                        <img
                          src={require("../../images/logo.png")}
                          alt="logo"
                          className="white-logo"
                          style={{ height: 60 }}
                        />
                      </a>
                    </Link>
                  </li>
                  {state.data.map((item, index) => {
                    if (item.parent_id === 0) {
                      const parentLink = !_haveSubList(item.id)
                        ? "/" + item.route
                        : "#";
                      return (
                        <li key={item.id} className="nav-item">
                          <Link href={parentLink}>
                            <a className="nav-link">
                              {item.title}

                              {_haveSubList(item.id) ? (
                                <i
                                  style={{ marginLeft: 5 }}
                                  className="flaticon-down-arrow"
                                ></i>
                              ) : null}
                            </a>
                          </Link>

                          {/* SUB LIST */}
                          {_haveSubList(item.id) ? (
                            <ul className="dropdown-menu">
                              {state.data.map((subList, index) => {
                                if (subList.parent_id === item.id) {
                                  return (
                                    <li key={subList.id} className="nav-item">
                                      <Link
                                        href={
                                          "/" + item.route + "/" + subList.slug
                                        }
                                        activeClassName="active"
                                      >
                                        <a className="nav-link">
                                          {subList.title}
                                        </a>
                                      </Link>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          ) : null}
                        </li>
                      );
                    }
                  })}

                  <li className="nav-item">
                    <Link href="/lien-he" activeClassName="active">
                      <a className="nav-link">Liên hệ</a>
                    </Link>
                  </li>

                  <li>
                    <div
                      className="others-option"
                      style={{ marginLeft: 70, marginTop: 17 }}
                    >
                      <div className="call-us">
                        <div className="icon">
                          <i className="flaticon-call"></i>
                        </div>
                        <span style={{ color:'#009245'}}> Gọi ngay:</span>
                        <span className="number">0905 459 039 </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

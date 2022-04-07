import React from "react";

export default function Member() {
  return (
    <div className="container py-4">
      <ul
        className="nav nav-pills sort-source sort-source-style-3 justify-content-center"
        data-sort-id="team"
        data-option-key="filter"
      >
        <li className="nav-item active" data-option-value="*">
          <a className="nav-link text-1 text-uppercase active" href="#">
            Show All
          </a>
        </li>
        <li className="nav-item" data-option-value=".leadership">
          <a className="nav-link text-1 text-uppercase" href="#">
            Leadership
          </a>
        </li>
        <li className="nav-item" data-option-value=".marketing">
          <a className="nav-link text-1 text-uppercase" href="#">
            Marketing
          </a>
        </li>
        <li className="nav-item" data-option-value=".development">
          <a className="nav-link text-1 text-uppercase" href="#">
            Development
          </a>
        </li>
        <li className="nav-item" data-option-value=".design">
          <a className="nav-link text-1 text-uppercase" href="#">
            Design
          </a>
        </li>
      </ul>
      <div className="sort-destination-loader mt-4 pt-2 sort-destination-loader-loaded">
        <div
          className="row team-list sort-destination"
          data-sort-id="team"
          data-filter="*"
          style={{ position: "relative", height: "894px" }}
        >
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item leadership"
            style={{ position: "absolute", left: "0px", top: "0px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-1.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Md Kayda Azam</span>
                    <span className="thumb-info-type">CEO</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item marketing"
            style={{ position: "absolute", left: "285px", top: "0px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-2.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">larry page</span>
                    <span className="thumb-info-type">Marketing</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item development"
            style={{ position: "absolute", left: "570px", top: "0px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-3.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Mark zuckerberg</span>
                    <span className="thumb-info-type">Developer</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item design"
            style={{ position: "absolute", left: "855px", top: "0px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-4.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Elon musk</span>
                    <span className="thumb-info-type">Design</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item development"
            style={{ position: "absolute", left: "0px", top: "447px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-5.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Bill Gates</span>
                    <span className="thumb-info-type">Design</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item marketing"
            style={{ position: "absolute", left: "285px", top: "447px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-6.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Steve Jobs</span>
                    <span className="thumb-info-type">Marketing</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item development"
            style={{ position: "absolute", left: "570px", top: "447px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-7.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Judit Pacsai</span>
                    <span className="thumb-info-type">Developer</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 isotope-item development"
            style={{ position: "absolute", left: "855px", top: "447px" }}
          >
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href="about-me.html">
                  <img src="img/team/team-8.jpg" className="img-fluid" alt="" />
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">Jeff Bezos </span>
                    <span className="thumb-info-type">Developer</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption">
                <span className="thumb-info-caption-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac ligula mi, non suscipitaccumsan.
                </span>
                <span className="thumb-info-social-icons mb-4">
                  <a target="_blank" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                  <a href="http://www.linkedin.com">
                    <i className="fab fa-linkedin-in" />
                    <span>Linkedin</span>
                  </a>
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="bounce-loader">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    </div>
  );
}

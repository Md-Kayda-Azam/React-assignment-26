import React from "react";

export default function Scale() {
  return (
    <section className="section bg-color-grey-scale-1 section-height-3 border-0 m-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="font-weight-normal text-center text-6 pb-3">
              Our <strong className="font-weight-extra-bold">Services</strong>
            </h2>
          </div>
        </div>
        <div className="row mb-lg-4">
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInLeftShorter"
            data-appear-animation-delay={300}
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-support text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">Customer Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  <span className="alternative-font">metus.</span> elit. Quisque
                  rutrum pellentesque imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-layers text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">Sliders</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis
                  nulla.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay={300}
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-menu text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">Buttons</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInLeftShorter"
            data-appear-animation-delay={300}
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-doc text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">HTML5 / CSS3 / JS</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis
                  nulla.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-user text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">Icons</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  <span className="alternative-font">metus.</span> elit. Quisque
                  rutrum pellentesque imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 appear-animation animated appear-animation-visible"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay={300}
          >
            <div className="feature-box feature-box-style-2">
              <div className="feature-box-icon">
                <i className="icons icon-screen-desktop text-color-primary" />
              </div>
              <div className="feature-box-info">
                <h4 className="font-weight-bold mb-2">Lightbox</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

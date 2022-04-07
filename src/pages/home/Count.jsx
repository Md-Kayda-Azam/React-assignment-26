import React from "react";

export default function Count() {
  return (
    <div className="container">
      <div className="row counters counters-sm py-4 mt-5">
        <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <div className="counter">
            <i className="icons icon-user text-color-dark" />
            <strong
              className="text-color-dark font-weight-extra-bold"
              data-to={45000}
              data-append="+"
            >
              45000+
            </strong>
            <label className="text-4 mt-1">Happy Clients</label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <div className="counter">
            <i className="icons icon-badge text-color-dark" />
            <strong
              className="text-color-dark font-weight-extra-bold"
              data-to={15}
            >
              15
            </strong>
            <label className="text-4 mt-1">Years In Business</label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-5 mb-sm-0">
          <div className="counter">
            <i className="icons icon-graph text-color-dark" />
            <strong
              className="text-color-dark font-weight-extra-bold"
              data-to={178}
            >
              178
            </strong>
            <label className="text-4 mt-1">High Score</label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="counter">
            <i className="icons icon-cup text-color-dark" />
            <strong
              className="text-color-dark font-weight-extra-bold"
              data-to={352}
            >
              352
            </strong>
            <label className="text-4 mt-1">Cups of Coffee</label>
          </div>
        </div>
      </div>
      <hr className="solid my-5" />
      <div
        className="row align-items-center pt-4 appear-animation animated appear-animation-visible"
        data-appear-animation="fadeInLeftShorter"
      >
        <div className="col-md-4 mb-4 mb-md-0">
          <img
            className="img-fluid scale-2 pe-5 pe-md-0 my-4"
            src="img/layout-styles.png"
            alt="layout styles"
          />
        </div>
        <div className="col-md-8 ps-md-5">
          <h2 className="font-weight-normal text-6 mb-3">
            <strong className="font-weight-extra-bold">Layout</strong> Styles
            &amp; Variants
          </h2>
          <p className="text-4">
            There are so many styles you can combine that is possible to create
            almost any kind of layout based on Porto Template, navigate in our
            preview and see the header variations, the colors, and the page
            content types that you will be able to use.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet hendrerit volutpat. Sed in nunc nec ligula consectetur
            mollis in vel justo. Vestibulum ante ipsum primis in faucibus orci.
          </p>
        </div>
      </div>
      <hr className="solid my-5" />
      <div
        className="row align-items-center py-5 appear-animation animated appear-animation-visible"
        data-appear-animation="fadeInRightShorter"
      >
        <div className="col-md-8 pe-md-5 mb-5 mb-md-0">
          <h2 className="font-weight-normal text-6 mb-3">
            <strong className="font-weight-extra-bold">Exclusive</strong> Style
            Switcher
          </h2>
          <p className="text-4">
            With our exlusive Style Switcher you will be able to choose any
            color you want for your website, choose the layout style (wide /
            boxed), website type (one page / normal), then generate the css that
            will be compiled by a {"{"}less{"}"} proccessor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet hendrerit volutpat. Sed in nunc nec ligula consectetur
            mollis in vel justo. Vestibulum ante ipsum primis in faucibus orci.
          </p>
        </div>
        <div className="col-md-4 px-5 px-md-3">
          <img
            className="img-fluid scale-2 my-4"
            src="img/style-switcher.png"
            alt="style switcher"
          />
        </div>
      </div>
      <hr className="solid my-5" />
      <div className="row text-center">
        <div className="col">
          <h2 className="font-weight-normal text-6 mt-4">
            Our <strong className="font-weight-extra-bold">Portfolio</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

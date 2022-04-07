import React from "react";

export default function Intro() {
  return (
    <div className="home-intro mb-0" id="home-intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p>
              The fastest way to grow your business with the leader in{" "}
              <span className="highlighted-word highlighted-word-animation-1 text-color-primary font-weight-semibold text-5">
                Technology
              </span>
              <span>Check out our options and features included.</span>
            </p>
          </div>
          <div className="col-lg-4">
            <div className="get-started text-start text-lg-end">
              <a
                href="#"
                className="btn btn-primary btn-lg text-3 font-weight-semibold px-4 py-3"
              >
                Get Started Now!
              </a>
              <div className="learn-more">
                or <a href="index.html">learn more.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

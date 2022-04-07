import React from "react";

export default function Banner() {
  return (
    <section
      className="page-header page-header-modern page-header-background page-header-background-md overlay overlay-color-dark overlay-show overlay-op-5"
      style={{
        backgroundImage: "url(img/page-header/page-header-background.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
            <h1>
              Our <strong>Team</strong>
            </h1>
            <span className="sub-title">
              We are proud to introduce you to our team.
            </span>
          </div>
          <div className="col-md-4 order-1 order-md-2 align-self-center">
            <ul className="breadcrumb breadcrumb-light d-block text-md-end">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

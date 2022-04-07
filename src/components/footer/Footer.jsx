import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="border-0"
        style={{
          background: 'url("img/parallax/parallax-8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "0 100%",
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-md-center py-5 mt-3">
            <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start mb-5 mb-lg-0">
              <a href="index.html">
                <img
                  src="img/logo-flat-light.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </a>
            </div>
            <div className="col-md-6 col-lg-2 text-center text-lg-start mb-5 mb-lg-0">
              <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                Pages
              </h5>
              <ul className="list list-unstyled">
                <li className="mb-1">
                  <a href="page-services.html" className="link-hover-style-1">
                    {" "}
                    Our Services
                  </a>
                </li>
                <li className="mb-1">
                  <a href="about-us.html" className="link-hover-style-1">
                    {" "}
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="contact-us.html" className="link-hover-style-1">
                    {" "}
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 text-center text-lg-start mb-5 mb-lg-0">
              <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                Links
              </h5>
              <ul className="list list-unstyled">
                <li className="mb-1">
                  <a href="page-faq.html" className="link-hover-style-1">
                    {" "}
                    FAQ's
                  </a>
                </li>
                <li className="mb-1">
                  <a href="sitemap.html" className="link-hover-style-1">
                    {" "}
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-5 text-center text-lg-start">
              <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                Newsletter
              </h5>
              <div
                className="alert alert-success d-none"
                id="newsletterSuccess"
              >
                <strong>Success!</strong> You've been added to our email list.
              </div>
              <div className="alert alert-danger d-none" id="newsletterError" />
              <form
                id="newsletterForm"
                action="php/newsletter-subscribe.php"
                method="POST"
                className="mb-3 mb-md-0"
              >
                <div className="input-group input-group-rounded">
                  <input
                    className="form-control form-control-sm bg-light"
                    placeholder="Email Address"
                    name="newsletterEmail"
                    id="newsletterEmail"
                    type="email"
                  />
                  <button
                    className="btn btn-light text-color-dark"
                    type="submit"
                  >
                    <strong>GO!</strong>
                  </button>
                </div>
              </form>
              <p className="mt-3 mb-0 text-center text-lg-start">
                <i className="fab fa-whatsapp text-color-primary" />
                <span className="text-color-light opacity-7 ps-2">
                  (800) 123-4567
                </span>
                <i className="far fa-envelope text-color-primary ms-4" />
                <a
                  href="/cdn-cgi/l/email-protection#9af7fbf3f6daffe2fbf7eaf6ffb4f9f5f7"
                  className="opacity-7 ps-2 text-color-light"
                >
                  <span
                    className="__cf_email__"
                    data-cfemail="8be6eae2e7cbeef3eae6fbe7eea5e8e4e6"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright footer-copyright-style-2 bg-transparent footer-top-light-border">
          <div className="container py-2">
            <div className="row py-4">
              <div className="col d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                <p>© Copyright 2022. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

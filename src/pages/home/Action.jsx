import React from "react";

export default function Action() {
  return (
    <section className="call-to-action call-to-action-strong-grey content-align-center call-to-action-in-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <div className="call-to-action-content">
              <h2 className="font-weight-normal text-6 mb-0">
                Porto is <strong>everything</strong> you need to create an{" "}
                <strong>awesome</strong> website!
              </h2>
              <p className="mb-0">
                The best HTML template for your new website.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="call-to-action-btn">
              <a
                href="https://themeforest.net/item/porto-responsive-html5-template/4106987"
                target="_blank"
                className="btn btn-modern btn-primary"
              >
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

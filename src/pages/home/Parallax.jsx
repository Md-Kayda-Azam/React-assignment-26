import React from "react";

export default function Parallax() {
  return (
    <section
      className="section section-parallax section-height-3 border-0 m-0"
      data-plugin-parallax
      data-plugin-options="{'speed': 7, 'parallaxHeight': '150%', 'offset': 100}"
      data-image-src="img/parallax/parallax-corporate-1-1.jpg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="parallax-background"
        style={{
          backgroundImage: 'url("img/parallax/parallax-corporate-1-1.jpg")',
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "150%",
          transform: "translate3d(0px, 48.691px, 0px)",
          backgroundPositionX: "50%",
        }}
      />
      <div className="container pb-5 mb-5">
        <div className="row text-center pb-5 mb-5">
          <div className="col-md-10 mx-md-auto pb-5 mb-5">
            <h1
              className="word-rotator slide font-weight-bold text-8 mb-3 appear-animation animated appear-animation-visible"
              data-appear-animation="fadeInUpShorter"
            >
              <span>Porto is </span>
              <span
                className="word-rotator-words bg-dark"
                style={{ width: "170.281px" }}
              >
                <b className="is-visible">incredibly</b>
                <b className="is-hidden">especially</b>
                <b className="is-hidden">extremely</b>
              </span>
              <span> beautiful and fully responsive.</span>
            </h1>
            <p
              className="lead appear-animation animated fadeInUpShorter appear-animation-visible"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay={300}
              style={{ animationDelay: "300ms" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              elementum, nulla vel pellentesque consequat, ante nulla hendrerit
              arcu, ac tincidunt mauris lacus sed leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Form() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-lg-6">
          <h2 className="font-weight-bold text-8 mt-2 mb-0">Contact Us</h2>
          <p className="mb-4">
            Feel free to ask for details, don't save any questions!
          </p>
          <form
            className="contact-form"
            action="php/contact-form.php"
            method="POST"
            noValidate="novalidate"
          >
            <div className="contact-form-success alert alert-success d-none mt-4">
              <strong>Success!</strong> Your message has been sent to us.
            </div>
            <div className="contact-form-error alert alert-danger d-none mt-4">
              <strong>Error!</strong> There was an error sending your message.
              <span className="mail-error-message text-1 d-block" />
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Full Name</label>
                <input
                  type="text"
                  defaultValue
                  data-msg-required="Please enter your name."
                  maxLength={100}
                  className="form-control text-3 h-auto py-2"
                  name="name"
                  required
                />
              </div>
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Email Address</label>
                <input
                  type="email"
                  defaultValue
                  data-msg-required="Please enter your email address."
                  data-msg-email="Please enter a valid email address."
                  maxLength={100}
                  className="form-control text-3 h-auto py-2"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label className="form-label mb-1 text-2">Subject</label>
                <input
                  type="text"
                  defaultValue
                  data-msg-required="Please enter the subject."
                  maxLength={100}
                  className="form-control text-3 h-auto py-2"
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label className="form-label mb-1 text-2">Message</label>
                <textarea
                  maxLength={5000}
                  data-msg-required="Please enter your message."
                  rows={8}
                  className="form-control text-3 h-auto py-2"
                  name="message"
                  required
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary btn-modern"
                  data-loading-text="Loading..."
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div
            className="appear-animation animated fadeIn appear-animation-visible"
            data-appear-animation="fadeIn"
            data-appear-animation-delay={800}
            style={{ animationDelay: "800ms" }}
          >
            <h4 className="mt-2 mb-1">
              Our <strong>Office</strong>
            </h4>
            <ul className="list list-icons list-icons-style-2 mt-2">
              <li>
                <i className="fas fa-map-marker-alt top-6" />{" "}
                <strong className="text-dark">Address:</strong> 1234 Street
                Name, City Name, United States
              </li>
              <li>
                <i className="fas fa-phone top-6" />{" "}
                <strong className="text-dark">Phone:</strong> (123) 456-789
              </li>
              <li>
                <i className="fas fa-envelope top-6" />{" "}
                <strong className="text-dark">Email:</strong>{" "}
                <a href="mailto:mail@example.com">mail@example.com</a>
              </li>
            </ul>
          </div>
          <div
            className="appear-animation animated fadeIn appear-animation-visible"
            data-appear-animation="fadeIn"
            data-appear-animation-delay={950}
            style={{ animationDelay: "950ms" }}
          >
            <h4 className="pt-5">
              Business <strong>Hours</strong>
            </h4>
            <ul className="list list-icons list-dark mt-2">
              <li>
                <i className="far fa-clock top-6" /> Monday - Friday - 9am to
                5pm
              </li>
              <li>
                <i className="far fa-clock top-6" /> Saturday - 9am to 2pm
              </li>
              <li>
                <i className="far fa-clock top-6" /> Sunday - Closed
              </li>
            </ul>
          </div>
          <h4 className="pt-5">
            Get in <strong>Touch</strong>
          </h4>
          <p className="lead mb-0 text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget leo at velit imperdiet varius. In eu ipsum vitae velit congue
            iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

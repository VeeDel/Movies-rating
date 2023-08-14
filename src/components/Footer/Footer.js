import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1 btn-round btn-round"
            style={{ backgroundColor: "#3b5998", borderRadius: "18px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-primary btn-floating m-1 btn-round"
            style={{ backgroundColor: "#55acee", borderRadius: "20px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-primary btn-floating m-1 btn-round"
            style={{ backgroundColor: "#dd4b39", borderRadius: "20px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            className="btn btn-primary btn-floating m-1 btn-round"
            style={{ backgroundColor: "#ac2bac", borderRadius: "20px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-primary btn-floating m-1 btn-round"
            style={{ backgroundColor: "#0082ca", borderRadius: "20px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-primary btn-floating m-1 btn-round"
            style={{ backgroundColor: "#333333", borderRadius: "20px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "#262626",
        }}
      >
        © {new Date().getFullYear()} VeeMDB
      </div>
    </footer>
  );
}

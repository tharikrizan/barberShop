import React from "react";
import "./style/footer.css";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <h4>Contact Venus</h4>
      <div className="shopContact">
        <i className="fa fa-map-marker" style={{ width: "30px" }}></i>
        78,HillStreet, Kalutara
        <br />
        <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone:
        +940767936896
        <br />
        <i className="fa fa-envelope" style={{ width: "30px" }}></i>
        Email: tharikrizan98@gmail.com
        <br />
      </div>
      <br />
      <hr />
      <h5>Developer Contact</h5>
      <div className="developerContact">
        <i className="fa fa-twitter w3-hover-opacity">
          <a
            href="https://www.linkedin.com/in/tharik-rizan-6806b016a"
            title="THARIK RIZAN"
            target="_blank"
            className="w3-hover-text-green"
          >
            @tharikrizan
          </a>
        </i>
        <br />
        <i className="fa fa-linkedin w3-hover-opacity">
          <a
            href="https://twitter.com/TharikRizan"
            title="THARIK RIZAN"
            target="_blank"
            className="w3-hover-text-green"
          >
            @tharikrizan
          </a>
        </i>
        <br />
      </div>
      <p>
        Powered by
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="w3-hover-text-green"
        >
          {" "}
          THE FAKTUR
        </a>
      </p>
    </footer>
  );
};

export default Footer;

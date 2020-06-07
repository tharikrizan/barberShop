import React from "react";
import "./style/footer.css";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <h4>Contact Venus</h4>
      <div className="shopContact">
        <i className="fa fa-map-marker" style={{ width: "30px" }}></i>
        78,HillStreet, Kalutara
        <button style={{ fontWeight: "bold" }}>
          <a
            style={{ textDecorationLine: "none", color: "black" }}
            href="https://www.google.com/maps/dir//New+Lanka+Hardware+Stores,+No.28+Good+Shed+Rd,+Kalutara/@6.5747411,79.9923292,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae23721c7eac689:0x3b828d47f402bbdc!2m2!1d79.9604536!2d6.5824969"
            target="_blank"
          >
            GET DIRRECTIONS
          </a>
        </button>
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

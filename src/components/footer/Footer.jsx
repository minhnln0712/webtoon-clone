import "./Footer.css";
import googleLogo from "../../images/google-play-logo.png";
import appleLogo from "../../images/app-store-logo.png";
import webtoonLogo from "../../images/footer-logo.jpg";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer(params) {
  return (
    <div id="footer">
      <div className="footer-content">
        <p>
          Notice &gt; Changes to Twitter API - End of Free AccessFeb 7, 2023
        </p>
      </div>
      <div className="footer-content">
        <div className="footer-download-text">
          <p>Download WEBTOON now!</p>
        </div>
        <div className="footer-store">
          <a className="footer-store-logo" href="#">
            <img src={googleLogo} alt="google-play" />
          </a>
          <a className="footer-store-logo" href="#">
            <img src={appleLogo} alt="apple-store" />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-social-network">
          <a className="button-social-network" href="#">
            <BsFacebook />
          </a>
          <a className="button-social-network" href="#">
            <BsInstagram />
          </a>
          <a className="button-social-network" href="#">
            <BsTwitter />
          </a>
          <a className="button-social-network" href="#">
            <BsYoutube />
          </a>
        </div>
        <div className="footer-links">
          <a className="footer-link" href="#">
            About
          </a>
          <a className="footer-link" href="#">
            Feedback
          </a>
          <a className="footer-link" href="#">
            Help
          </a>
          <a className="footer-link" href="#">
            Terms
          </a>
          <a className="footer-link" href="#">
            Privacy
          </a>
          <a className="footer-link" href="#">
            Advertise
          </a>
          <select id="select-language">
            <option value="en">English</option>
            <option value="vn">Tiếng Việt</option>
          </select>
        </div>
        <div className="footer-copyright">
          <p>&#169; WEBTOON Entertainment Inc.</p>
        </div>
        <div className="footer-logo">
          <img src={webtoonLogo} alt="Webtoon Logo" />
        </div>
      </div>
    </div>
  );
}

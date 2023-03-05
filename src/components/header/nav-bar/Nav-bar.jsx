import "./Nav-bar.css";
import logo from "../../../images/logo.png";
import { SlBookOpen } from "react-icons/sl";
import { RxMagnifyingGlass } from "react-icons/rx";

export default function NavigationBar() {
  return (
    <>
      <div className="nav-bar">
        <a className="button-logo" href="">
          <img className="logo" src={logo} alt="Webtoon Logo" loading="eager" />
        </a>
        <div className="left-side">
          <a className="nav-link" href="#">
            ORIGINALS
          </a>
          <a className="nav-link" href="#">
            GENRES
          </a>
          <a className="nav-link" href="#">
            POPULAR
          </a>
          <a className="nav-link" href="#">
            CANVAS
          </a>
        </div>
        <div className="right-side">
          <a className="nav-link" href="#">
            <SlBookOpen /> Creators 101
          </a>
          <a className="button-black" href="#">
            Publish
          </a>
          <a className="button-white" href="#">
            Log in
          </a>
          <a className="button-search" href="#">
            {<RxMagnifyingGlass />}
          </a>
        </div>
      </div>
    </>
  );
}

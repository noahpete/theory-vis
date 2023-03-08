import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>by Noah Peters, nope@umich.edu,</p>
        <a href="https://github.com/noahpete/theory-vis.git">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

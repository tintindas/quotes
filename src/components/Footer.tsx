import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();
  console.log(location);

  return (
    <footer>
      {location.pathname === "/" && (
        <Link to="/about">
          <img src="./info.svg" alt="Go to about page" />
        </Link>
      )}

      {location.pathname === "/about" && (
        <Link to="/">
          <img src="./home.svg" alt="Go to home page" />
        </Link>
      )}

      <a href="https://github.com/tintindas">
        <img src="./github.svg" alt="Github link" />
      </a>
      <a href="https://www.linkedin.com/in/upamanyu-das/">
        <img src="./linkedin.svg" alt="LinkedIn link" />
      </a>
    </footer>
  );
};

export default Footer;

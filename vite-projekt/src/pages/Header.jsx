import { Link } from "react-router-dom";
import "../styles/Navi.module.css"

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
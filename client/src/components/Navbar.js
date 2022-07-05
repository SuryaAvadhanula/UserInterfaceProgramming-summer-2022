import logo from "../assets/Friends-logo.png";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="100" height="50" alt="logo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link  className="navbar-brand" to="/login">
                  / Login /
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="navbar-brand" to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;

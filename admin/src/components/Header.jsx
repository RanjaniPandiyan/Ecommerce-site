import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  };
  return (
    <header className="app-header ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <Link
              className="nav-link sidebartoggler "
              id="headerCollapse"
              to="#"
            >
              <i className="ti ti-menu-2"></i>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link
              className="nav-link "
              to="#"
              id="drop1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <iconify-icon
                icon="solar:bell-linear"
                className="fs-6"
              ></iconify-icon>
              <div className="notification bg-primary rounded-circle"></div>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-animate-up"
              aria-labelledby="drop1"
            >
              <div className="message-body">
                <a to="#" className="dropdown-item">
                  Item 1
                </a>
                <a to="#" className="dropdown-item">
                  Item 2
                </a>
              </div>
            </div>
          </li> */}
        </ul>
        <div
          className="navbar-collapse justify-content-end px-0"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li className="nav-item dropdown">
              <Link
                className="nav-link "
                to="#"
                id="drop2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/logos/favicon.png"
                  alt=""
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                aria-labelledby="drop2"
              >
                <div className="message-body">
                  <button
                    className="btn btn-outline-primary mx-5 mt-2 d-block"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

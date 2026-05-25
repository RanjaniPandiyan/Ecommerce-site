import { Link } from "react-router-dom";

function Navbar() {
  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            <img
              src="/images/logos/Logo.png"
              alt=""
              style={{ width: "200px", height: "60px" }}
            />
          </Link>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <iconify-icon
                icon="solar:menu-dots-linear"
                className="nav-small-cap-icon fs-4"
              ></iconify-icon>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link primary-hover-bg"
                to="/"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:atom-line-duotone"></iconify-icon>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link primary-hover-bg"
                to="/category"
                aria-expanded="false"
              >
                <iconify-icon icon="icon-park-outline:shopping"></iconify-icon>
                <span className="hide-menu">Category</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link primary-hover-bg"
                to="/products"
                aria-expanded="false"
              >
                <iconify-icon icon="material-symbols:library-add-outline"></iconify-icon>
                <span className="hide-menu">Add Products</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link primary-hover-bg"
                to="/vproduct"
                aria-expanded="false"
              >
                <iconify-icon icon="material-symbols:view-cozy-outline-sharp"></iconify-icon>

                <span className="hide-menu">View Products</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;

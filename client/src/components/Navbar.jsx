import { Link, NavLink } from "react-router-dom";
import brand from "/images/brand.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { clearCart } from "../redux/cartSlice";
import { clearWishlist } from "../redux/wishlistSlice";
function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={brand} alt="brand" style={{ width: 50, height: 50 }}></img>
          <b
            style={{
              fontSize: "30px",
              fontFamily: "georgia",
              marginRight: 30,
            }}
          >
            Shopy
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex align-items-center d-lg-none">
          <Link to="/login" className="text-dark me-3">
            <i className="fa fa-user-o fs-5"></i>
          </Link>

          <Link to="/wishlist" className="text-dark  position-relative me-3">
            <i className="fa fa-heart-o fs-5"></i>
            {wishlist.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bs danger">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="text-dark position-relative me-3">
            <i className="fa fa-shopping-basket fs-5"></i>

            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-dark ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/"
                style={{ fontFamily: "georgia" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-dark ${isActive ? "active" : ""}`
                }
                to="/category"
                style={{ fontFamily: "georgia" }}
              >
                Collections
              </NavLink>
            </li>
            {/* <li className="nav-item mt-2">
              <Link className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
            </li> */}
          </ul>

          <ul className="navbar-nav ms-auto d-none d-lg-flex d-flex flex-row align-items-center ">
            <li className="nav-item mx-1" title="Profile">
              {!isAuthenticated ? (
                <Link to="/login" className="text-dark position-relative">
                  <i
                    className="fa fa-user-o fs-5"
                    aria-hidden="true"
                    style={{ textDecoration: "none", color: "black" }}
                  ></i>
                </Link>
              ) : (
                <div className="dropdown show">
                  <i
                    className="fa fa-user-o fs-5  dropdown-toggle"
                    aria-hidden="true"
                    style={{ textDecoration: "none", color: "black" }}
                    id="dropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <button
                      className=" btn btn-outline-danger dropdown-item"
                      onClick={() => {
                        dispatch(logout());
                        dispatch(clearWishlist());
                        dispatch(clearCart());
                      }}
                    >
                      LOGOUT
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item mx-1" title="Wishlist">
              <Link to="/login" className="text-dark position-relative">
                <i className="fa fa-heart-o fs-5" aria-hidden="true"></i>
                {wishlist.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "10px" }}
                  >
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item mx-1" title="Cart">
              <Link to="/login" className="text-dark position-relative">
                <i
                  className="fa fa-shopping-basket fs-5"
                  aria-hidden="true"
                ></i>
                {cartItems.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "10px" }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

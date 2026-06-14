import { Link } from "react-router-dom";
import brand from "/images/brand.png";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlist = useSelector((state) => state.wishlist.items);
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/products/Mens"
                style={{ fontFamily: "georgia" }}
              >
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products/Womens"
                style={{ fontFamily: "georgia" }}
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products/Kids"
                style={{ fontFamily: "georgia" }}
              >
                Kids
              </Link>
            </li>
            <li className="nav-item mt-2">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-none d-lg-flex d-flex flex-row align-items-center ">
            <li className="nav-item mx-1" title="Profile">
              <Link to="/Login">
                <i
                  className="fa fa-user-o fs-5"
                  aria-hidden="true"
                  style={{ textDecoration: "none", color: "black" }}
                ></i>
              </Link>
            </li>
            <li className="nav-item mx-1" title="Wishlist">
              <Link to="/Login" className="text-dark position-relative">
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
              <Link to="/Login" className="text-dark position-relative">
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

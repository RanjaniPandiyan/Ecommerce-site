import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer py-4 mt-auto bg-light border-top">
      <div className="text-center text-md-start">
        {" "}
        {/* Center text on mobile */}
        <h4 className="text-gray mb-3">About Us</h4>
        <p className="text-muted  p-0">
          We provide simple and reliable solutions to improve your daily digital
          experience. Built with a focus on quality, performance, and user
          satisfaction. Helping users identify genuine products using modern
          technology.
        </p>
        {/* Navigation Links */}
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="text-muted text-decoration-none">
            Home
          </Link>
          <span className="text-muted">|</span>
          <Link to="/men" className="text-muted text-decoration-none">
            Mens Collection
          </Link>
          <span className="text-muted">|</span>
          <Link to="/women" className="text-muted text-decoration-none">
            Womens Collection
          </Link>
          <span className="text-muted">|</span>
          <Link to="/kids" className="text-muted text-decoration-none">
            Kids Collection
          </Link>
        </div>
        {/* Copyright */}
        <div className="mt-4 pt-3 border-top text-center text-muted small">
          © 2026 shopy Collections. All rights reserved. Designed and developed
          with care.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1" style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
      <button
        className="btn btn-dark position-fixed bottom-0 end-0 m-3 rounded-circle"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Layout;

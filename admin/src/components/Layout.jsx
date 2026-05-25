import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="static"
    >
      <Navbar></Navbar>
      <div className="body-wrapper pt-2">
        <div className="body-wrapper-inner">
          <div className="container-fluid">
            <Header></Header>
            <Outlet></Outlet>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`page-wrapper ${isSidebarOpen ? "show-sidebar" : ""}`}
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="static"
    >
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Header toggleSidebar={toggleSidebar}></Header>
      <div className="body-wrapper pt-2">
        <div className="body-wrapper-inner">
          <div className="container-fluid">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Order from "./pages/Order";
import Confirm from "./components/Confirm";
import Category from "./pages/Category";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/confirm/:id"
            element={
              <ProtectedRoutes>
                <Confirm />
              </ProtectedRoutes>
            }
          />
          <Route path="/category" element={<Category />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

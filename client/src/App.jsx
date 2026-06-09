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
import PlaceOrder from "./pages/PlaceOrder";
import Confirm from "./components/Confirm";

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
          <Route path="/order" element={<Order />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm" element={<Confirm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

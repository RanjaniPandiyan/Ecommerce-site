import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/useAuth";
function Login() {
  const [input, setInput] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        input,
        { withCredentials: true },
      );

      console.log(res.data);
      setUser(res.data.admin);
      navigate("/");
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 overflow-hidden bg-white"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* GIF SIDE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center ">
          <img
            src="/images/backgrounds/Login.gif"
            alt="login gif"
            className="img-fluid p-3"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* LOGIN FORM */}
        <div className="col-12 col-md-6 p-5">
          <h2 className="text-center mb-4 fw-bold">Admin Login</h2>

          <form onSubmit={handleClick}>
            <div className="mb-3">
              <label className="form-label text-dark">Enter Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="name"
                value={input.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={input.password}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <button className="btn btn-outline-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

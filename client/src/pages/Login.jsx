import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ user: "", password: "" });
  const [msg, setMsg] = useState("");
  const handleinput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await axios.post("http://localhost:5000/api/user/login", input, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      const backendError =
        err.response?.data?.message ||
        err.response?.data ||
        "Something went wrong.";
      setMsg(backendError);
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
            src="/images/login.gif"
            alt="login gif"
            className="img-fluid p-3"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* LOGIN FORM */}
        <div className="col-12 col-md-6 p-5">
          <h2 className="text-center mb-4 fw-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Email Id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Id"
                name="user"
                value={input.user}
                onChange={handleinput}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={input.password}
                onChange={handleinput}
                required
              />
            </div>
            <div className="m-3">
              <span className="text-danger">{msg}</span>
            </div>
            <button className="btn btn-dark w-100">Login</button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/register">
              {" "}
              <span className="text-primary">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

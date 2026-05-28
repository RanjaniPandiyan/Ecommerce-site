import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    user: "",
    password: "",
    cpassword: "",
  });
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password !== input.cpassword) {
      setMsg("Password Doesn't Match");
      return;
    } else {
      setMsg("");
      try {
        const userData = async () => {
          await axios.post("http://localhost:5000/api/user", {
            user: input.user,
            password: input.password,
          });
          navigate("/login");
        };
        userData();
      } catch (err) {
        console.log(err);
      }
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
            src="/images/register.gif"
            alt="login gif"
            className="img-fluid p-3"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* LOGIN FORM */}
        <div className="col-12 col-md-6 p-5">
          <h2 className="text-center mb-4 fw-bold">Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Email Id</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Mail Id"
                name="user"
                value={input.user}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="new-password"
                name="password"
                value={input.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-Enter password"
                autoComplete="new-password"
                name="cpassword"
                value={input.cpassword}
                onChange={handleChange}
                required
              />
              <span className="text-danger">{msg}</span>
            </div>
            <button className="btn btn-dark w-100">Register</button>
          </form>

          <p className="text-center mt-3">
            No Need? Back to{" "}
            <Link to="/login">
              {" "}
              <span className="text-primary">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

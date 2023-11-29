import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authReducer";
import axios from "axios";

interface LoginForData {
  username: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForData>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) {
        dispatch(loginSuccess());
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log;
    }
  };

  return (
    <div className="container mt-15">
      <h2>Login</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email or Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <button className="btn btn-primary" onClick={handleLogin} type="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

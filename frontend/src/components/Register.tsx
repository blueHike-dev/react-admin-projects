// Register.tsx

import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<RegisterFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    const errors: Partial<RegisterFormData> = {};

    // Perform validation similar to the login component

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response: AxiosResponse<any> = await axios.post("/api/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        // Registration successful, handle accordingly (e.g., redirect)
      } else {
        console.error("Registration failed:", response.data.message);
        // Display an error message or handle accordingly
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // Display an error message or handle network errors
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form>
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
        <button
          className="btn btn-primary"
          onClick={handleRegistration}
          type="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

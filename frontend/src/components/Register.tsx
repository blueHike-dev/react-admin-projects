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
        {/* Similar input fields as in the login component */}
        {/* Handle input changes and display errors as needed */}
        {/* Handle registration button click to trigger the registration process */}
      </form>
    </div>
  );
};

export default Register;

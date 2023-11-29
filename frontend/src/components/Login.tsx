import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="container mt-5">
      <h2>Login</h2>
    </div>
  );
};

export default Login;

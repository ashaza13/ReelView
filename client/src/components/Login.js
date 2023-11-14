import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are valid
    if (!email) {
      setEmailError("Email is required");
    } else if (!password) {
      setPasswordError("Password is required");
    } else {
    //   // Log the user in
    //   fetch("/api/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   })
    //     .then((response) => {
    //       if (response.status === 200) {
    //         // The user was logged in successfully
    //         navigate("/");
    //       } else {
    //         // The user was not logged in successfully
    //         setEmailError("Invalid email or password");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setEmailError("Something went wrong");
    //     });
        if (email === 'admin@gmail.com' && password === 'admin') {
            navigate("/");
        } else {
            setEmailError("Invalid email or password");
        }

    }
    
  };

  return (
    <div className={`${styles.paddingY} min-h-full flex flex-col justify-center items-center`}>
      <div className="max-w-xs bg-white rounded shadow-md p-4">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control w-full px-3 py-2 text-sm text-gray-700 bg-white rounded border-0 shadow-sm focus:outline-none focus:ring"
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control w-full px-3 py-2 text-sm text-gray-700 bg-white rounded border-0 shadow-sm focus:outline-none focus:ring"
            />
            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
          </div>
          <div className="flex items-center">
            <input type="submit" value="Login" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded shadow-sm hover:bg-blue-800 focus:outline-none focus:ring" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
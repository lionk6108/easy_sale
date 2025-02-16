import React, { useState } from "react";
import "./SignIn.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/orebiSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Define valid credentials
  const validCredentials = {
    admin: {
      email: "admin@example.com",
      password: "admin123",
      role: "admin"
    },
    user: {
      email: "user@example.com",
      password: "user123",
      role: "user"
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Check admin credentials
    if (email === validCredentials.admin.email && password === validCredentials.admin.password) {
      dispatch(loginUser({ 
        email, 
        password,
        role: "admin",
        name: "Admin User" 
      }));
      setError("");
      navigate("/dashboard");
      return;
    }

    // Check user credentials
    if (email === validCredentials.user.email && password === validCredentials.user.password) {
      dispatch(loginUser({ 
        email, 
        password,
        role: "user",
        name: "Regular User" 
      }));
      setError("");
      navigate("/");
      return;
    }

    // If no match found
    setError("Invalid email or password.");
  };

  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="signin-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaLinkedinIn />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebookF />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaLinkedinIn />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password">Forgot your password?</Link>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
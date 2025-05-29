import React, { useContext, useState } from "react";
import "./LoginForm.css";
import AuthContext from "../context/AuthContext";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const {loggedin} = useContext(AuthContext);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [signup, setSignup] = useState({ email: '', password: '', confirm: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    loggedin(login);
    // Add authentication logic here
  };

  // Handle signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    if (signup.password !== signup.confirm) {
      alert("Not Same Password Bro !");
      return;
    }
    console.log("Signup:", signup);
    // Add registration logic here
  };

  // Clear fields when switching forms
  const switchToLogin = () => {
    setIsLogin(true);
    setLogin({ email: '', password: '' });
  };
  const switchToSignup = () => {
    setIsLogin(false);
    setSignup({ email: '', password: '', confirm: '' });
  };

  return (
    <div className="login-background">
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={switchToLogin}
              type="button"
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={switchToSignup}
              type="button"
            >
              SignUp
            </button>
          </div>
          {isLogin ? (
            <form className="form" onSubmit={handleLogin}>
              <h2>Login Form</h2>
              <input
                type="email"
                placeholder="Email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                required
              />
              <button id="forgot-pass" type="button" onClick={() => alert("Password reset flow here")}>
                Forgot Password
              </button>
              <button type="submit">Login</button>
              <p>
                Not a Member?{" "}
                <button id="signup-now" type="button" className="link" onClick={switchToSignup}>
                  SignUp now
                </button>
              </p>
            </form>
          ) : (
            <form className="form" onSubmit={handleSignup}>
              <h2>SignUp Form</h2>
              <input
                type="email"
                placeholder="Email"
                value={signup.email}
                onChange={(e) => setSignup({ ...signup, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={signup.password}
                onChange={(e) => setSignup({ ...signup, password: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signup.confirm}
                onChange={(e) => setSignup({ ...signup, confirm: e.target.value })}
                required
              />
              <button type="submit">SignUp</button>
              <p>
                Already a Member?{" "}
                <button id="login-now" type="button" className="link" onClick={switchToLogin}>
                  Login now
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

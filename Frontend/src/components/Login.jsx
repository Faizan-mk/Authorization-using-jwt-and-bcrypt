import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        const userRes = await fetch("/api/getuser", {
          headers: {
            "Authorization": `Bearer ${data.token}`
          }
        });

        if (userRes.ok) {
          const userData = await userRes.json();
          localStorage.setItem("user", JSON.stringify(userData));
          window.location.href = "/";
        } else {
          const errorData = await userRes.json();
          alert("Profile Error: " + (errorData.message || "Could not fetch user profile"));
        }
      } else {
        alert("Login Error: " + (data.message || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Network Error: Backend is likely not running or unreachable.");
    }
  };

  return (
    <div className="card-center">
      <div className="auth-card">
        <h2 className="card-title">Welcome Back</h2>
        <p className="card-subtitle">Connect with your next career opportunity.</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. alex@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn full">
            Sign In to Account
          </button>
        </form>

        <div className="card-footer">
          <span>Don't have an account?</span>
          <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
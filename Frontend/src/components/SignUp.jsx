import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL || "";

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.mobile, // Mapping frontend 'mobile' to backend 'phone'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="card-center">
      <div className="auth-card">
        <h2 className="card-title">Faizi Job Portal</h2>
        <p className="card-subtitle">Land your dream job with just a few clicks.</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+92 300 000 0000"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="faizi@example.com"
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
              placeholder="Minimum 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn full">
            Create Free Account
          </button>
        </form>

        <div className="card-footer">
          <span>Already have an account?</span>
          <Link to="/login">LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
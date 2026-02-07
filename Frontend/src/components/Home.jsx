import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1 className="hero-title">Your Future Starts <br /> Here at JobPortal</h1>
        <p className="hero-subtitle">
          Over 10,000+ jobs from top-tier tech companies and innovative startups are waiting for you.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-btn primary">
            Create  Account
          </Link>
          <Link to="/jobs" className="cta-btn secondary">
            Browse All Jobs
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Smart Matching</h3>
          <p>Our AI analyzes your skills to find the perfect role for your career growth.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Verified Companies</h3>
          <p>Every company on our platform is manually verified for your safety and trust.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Career Growth</h3>
          <p>Access exclusive resources and mentorship to level up your professional life.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

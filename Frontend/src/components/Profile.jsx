import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (!stored) {
            navigate("/login");
            return;
        }
        try {
            setUser(JSON.parse(stored));
        } catch {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="profile-wrapper">
            <div className="profile-card">
                <div className="profile-cover"></div>
                <div className="profile-content">
                    <div className="profile-avatar">👤</div>

                    <div className="profile-header">
                        <div>
                            <h1 className="profile-name">{user.username || "User"}</h1>
                            <p className="profile-email">{user.email}</p>
                        </div>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </div>

                    <div className="profile-section">
                        <h3 className="section-title">Account Details</h3>
                        <div className="info-grid">
                            <div className="info-box">
                                <span className="info-label">Full Name</span>
                                <span className="info-value">{user.username || "Not Provided"}</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Email Address</span>
                                <span className="info-value">{user.email}</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Phone Number</span>
                                <span className="info-value">{user.phone || "Not Provided"}</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Member Since</span>
                                <span className="info-value">Feb 2026</span>
                            </div>
                            <div className="info-box">
                                <span className="info-label">Status</span>
                                <span className="info-value" style={{ color: '#10b981' }}>Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

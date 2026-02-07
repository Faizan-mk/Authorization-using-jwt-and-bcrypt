import { useState, useEffect } from "react";

const JOBS_DATA = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "$80k - $120k", type: "Full-time" },
    { id: 2, title: "Backend Engineer", company: "DataFlow", location: "New York, NY", salary: "$100k - $150k", type: "Full-time" },
    { id: 3, title: "UI/UX Designer", company: "Creative Minds", location: "Austin, TX", salary: "$70k - $110k", type: "Contract" },
    { id: 4, title: "Full Stack Developer", company: "StartUp Inc", location: "Remote", salary: "$90k - $130k", type: "Full-time" },
    { id: 5, title: "Product Manager", company: "Global Solutions", location: "San Francisco, CA", salary: "$120k - $180k", type: "Full-time" },
];

function Jobs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(JOBS_DATA);

    useEffect(() => {
        const results = JOBS_DATA.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(results);
    }, [searchTerm]);

    return (
        <div className="jobs-container">
            <div className="jobs-header">
                <h1>Available Jobs</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="jobs-grid">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <div key={job.id} className="job-card">
                            <div className="job-type-badge">{job.type}</div>
                            <h3 className="job-title">{job.title}</h3>
                            <p className="company-tag">{job.company}</p>
                            <div className="job-meta">
                                <span>📍 {job.location}</span>
                                <span>💰 {job.salary}</span>
                            </div>
                            <button className="apply-button">View Details & Apply</button>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No jobs found matching your search.</p>
                )}
            </div>
        </div>
    );
}

export default Jobs;

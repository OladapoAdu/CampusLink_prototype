import { useState } from 'react';

const ParentDashboard = ({ onLogout }) => {
  const [selectedChild, setSelectedChild] = useState('Amara Okafor (JSS 2A)');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span className="material-icons">school</span> CampusLink - Parent Portal
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small d-none d-md-inline">Parent Account: <strong>Mr. Okafor</strong></span>
            <button className="btn btn-outline-light btn-sm" onClick={onLogout}>
              Log Out
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Multi-Child Switcher Banner */}
        <div className="card bg-white border-0 shadow-sm p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <span className="badge bg-success-subtle text-success mb-2 fw-bold">FAMILY DASHBOARD</span>
              <h3 className="fw-bold text-dark">Welcome back, Mr. Okafor!</h3>
              <p className="text-muted mb-0">Monitor your children's academic progress, attendance, and fee status from one place.</p>
            </div>
            
            {/* Multi-Child Switcher Dropdown */}
            <div className="col-md-5 text-md-end mt-3 mt-md-0">
              <label className="form-label small fw-bold text-muted d-block text-md-end">Select Active Child:</label>
              <select 
                className="form-select d-inline-block w-auto" 
                value={selectedChild}
                onChange={(e) => setSelectedChild(e.target.value)}
              >
                <option value="Amara Okafor (JSS 2A)">Amara Okafor - JSS 2A</option>
                <option value="Chidi Okafor (SS 1B)">Chidi Okafor - SS 1B</option>
              </select>
            </div>
          </div>
        </div>

        {/* Selected Student Quick Info Bar */}
        <div className="alert alert-primary d-flex justify-content-between align-items-center mb-4 shadow-sm">
          <div>
            <span className="material-icons align-middle me-2">child_care</span>
            Viewing records for: <strong>{selectedChild}</strong>
          </div>
          <span className="badge bg-primary">Active Term: First Term</span>
        </div>

        {/* Financial & Academic Overview Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100 border-start border-danger border-4">
              <div className="d-flex align-items-center text-danger mb-2">
                <span className="material-icons me-1">account_balance_wallet</span>
                <small className="fw-bold">Outstanding Fees</small>
              </div>
              <h4 className="fw-bold mb-1">#45,000</h4>
              <button className="btn btn-outline-danger btn-sm mt-2">Pay Online Now</button>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100 border-start border-success border-4">
              <div className="d-flex align-items-center text-success mb-2">
                <span className="material-icons me-1">event_available</span>
                <small className="fw-bold">Attendance</small>
              </div>
              <h4 className="fw-bold mb-1">94%</h4>
              <small className="text-muted mt-2 d-block">Good standing</small>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100 border-start border-primary border-4">
              <div className="d-flex align-items-center text-primary mb-2">
                <span className="material-icons me-1">school</span>
                <small className="fw-bold">Average Score</small>
              </div>
              <h4 className="fw-bold mb-1">78%</h4>
              <small className="text-muted mt-2 d-block">Sample results</small>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 h-100 border-start border-warning border-4">
              <div className="d-flex align-items-center text-warning mb-2">
                <span className="material-icons me-1">receipt</span>
                <small className="fw-bold">Fee Receipts</small>
              </div>
              <h4 className="fw-bold mb-1">2 Verified</h4>
              <button className="btn btn-outline-secondary btn-sm mt-2">Download PDF</button>
            </div>
          </div>
        </div>

        {/* Announcements & Communication Section */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="material-icons text-primary">campaign</span> School Announcements & Notices
              </h5>
              <div className="p-3 bg-light rounded mb-3">
                <h6 className="fw-bold text-dark">Parents' Consultation Day</h6>
                <p className="small text-muted mb-1">You are invited to discuss academic progress with teachers on October 28.</p>
                <span className="badge bg-secondary">School Announcement</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="material-icons text-primary">support_agent</span> Teacher Communication
              </h5>
              <p className="small text-muted">Need to speak with a class teacher or request a meeting?</p>
              <button className="btn btn-primary btn-sm w-100">Send Direct Message</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentDashboard;
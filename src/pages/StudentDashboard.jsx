import { useState } from 'react';

const StudentDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span className="material-icons">school</span> CampusLink
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small d-none d-md-inline">Logged in as: <strong>Amara Okafor (JSS 2A)</strong></span>
            <button className="btn btn-outline-light btn-sm" onClick={onLogout}>
              Log Out
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Welcome Banner */}
        <div className="card bg-white border-0 shadow-sm p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <span className="badge bg-primary-subtle text-primary mb-2 fw-bold">STUDENT PORTAL</span>
              <h3 className="fw-bold text-dark">Welcome back, Amara!</h3>
              <p className="text-muted mb-0">Here is a summary of your academic progress and upcoming schedule for this term.</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="bg-light p-2 rounded border d-inline-block text-start">
                <small className="text-muted d-block">Student ID</small>
                <strong className="text-dark">GSS-0241</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills mb-4 gap-2">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'overview' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'timetable' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('timetable')}
            >
              Timetable & Subjects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'results' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('results')}
            >
              Results & Grades
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'assignments' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('assignments')}
            >
              Assignments
            </button>
          </li>
        </ul>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Quick Stats Grid */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <div className="d-flex align-items-center text-success mb-2">
                    <span className="material-icons me-1">event_available</span>
                    <small className="fw-bold">Attendance</small>
                  </div>
                  <h4 className="fw-bold mb-1">94%</h4>
                  <small className="text-muted">Present this term</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <div className="d-flex align-items-center text-primary mb-2">
                    <span className="material-icons me-1">school</span>
                    <small className="fw-bold">Average Score</small>
                  </div>
                  <h4 className="fw-bold mb-1">78%</h4>
                  <small className="text-muted">Current term average</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 h-100">
                  <div className="d-flex align-items-center text-warning mb-2">
                    <span className="material-icons me-1">book</span>
                    <small className="fw-bold">Enrolled Subjects</small>
                  </div>
                  <h4 className="fw-bold mb-1">12</h4>
                  <small className="text-muted">Active subjects</small>
                </div>
              </div>
            </div>

            {/* Notice Board & Events */}
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                    <span className="material-icons text-primary">event</span> Upcoming School Events
                  </h5>
                  <div className="d-flex align-items-start p-3 mb-3 bg-light rounded">
                    <div className="bg-primary text-white text-center rounded p-2 me-3 fw-bold" style={{ minWidth: '60px' }}>
                      <span className="d-block fs-4">21</span>
                      <small className="text-uppercase">Oct</small>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Mid-term assessments begin</h6>
                      <span className="badge bg-secondary">Academic calendar</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm p-4">
                  <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                    <span className="material-icons text-primary">campaign</span> Notice
                  </h5>
                  <p className="small text-muted">The new term timetable and assessment schedule are now available for download.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timetable' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Class Timetable & Subjects</h4>
            <p className="text-muted">Here are your scheduled classes and assigned subject teachers for JSS 2A.</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>08:00 AM - 09:00 AM</td>
                    <td>Mathematics</td>
                    <td>Mr. Adebayo</td>
                  </tr>
                  <tr>
                    <td>Monday</td>
                    <td>09:00 AM - 10:00 AM</td>
                    <td>English Language</td>
                    <td>Mrs. Okoro</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>08:00 AM - 09:00 AM</td>
                    <td>Basic Science</td>
                    <td>Mr. Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Released Academic Results</h4>
            <p className="text-muted">View your continuous assessments and examination grades.</p>
            <div className="alert alert-info">
              First Term Continuous Assessment results have been published.
            </div>
          </div>
        )}

        {activeTab === 'assignments' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Assignments & Learning Resources</h4>
            <p className="text-muted">Download notes and submit your pending homework.</p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Algebra Practice Exercise</h6>
                  <small className="text-muted">Mathematics • Due: Oct 24</small>
                </div>
                <button className="btn btn-outline-primary btn-sm">Download</button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default StudentDashboard;
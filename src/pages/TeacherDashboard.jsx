import { useState } from 'react';

const TeacherDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('classes');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span className="material-icons">school</span> CampusLink - Teacher Portal
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small d-none d-md-inline">Logged in: <strong>Mr. Adebayo (Mathematics Dept.)</strong></span>
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
              <span className="badge bg-warning-subtle text-dark mb-2 fw-bold">ACADEMIC STAFF PORTAL</span>
              <h3 className="fw-bold text-dark">Welcome back, Mr. Adebayo!</h3>
              <p className="text-muted mb-0">Manage your assigned classes, record daily attendance, and upload continuous assessment scores.</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="bg-light p-2 rounded border d-inline-block text-start">
                <small className="text-muted d-block">Assigned Classes</small>
                <strong className="text-dark">JSS 2A, JSS 2B, SS 1A</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills mb-4 gap-2">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'classes' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('classes')}
            >
              My Classes & Subjects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'attendance' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('attendance')}
            >
              Record Attendance
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'scores' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('scores')}
            >
              Continuous Assessment & Scores
            </button>
          </li>
        </ul>

        {/* Tab Content: Classes */}
        {activeTab === 'classes' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Assigned Teaching Schedule</h4>
            <p className="text-muted">Here are your active classes and subject allocations for the current term.</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Class Arm</th>
                    <th>Subject</th>
                    <th>Total Students</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JSS 2A</td>
                    <td>Mathematics</td>
                    <td>42</td>
                    <td><button className="btn btn-outline-primary btn-sm">View Roster</button></td>
                  </tr>
                  <tr>
                    <td>JSS 2B</td>
                    <td>Mathematics</td>
                    <td>38</td>
                    <td><button className="btn btn-outline-primary btn-sm">View Roster</button></td>
                  </tr>
                  <tr>
                    <td>SS 1A</td>
                    <td>Further Mathematics</td>
                    <td>25</td>
                    <td><button className="btn btn-outline-primary btn-sm">View Roster</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Attendance */}
        {activeTab === 'attendance' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Daily Attendance Register</h4>
            <p className="text-muted">Select a class to mark present or absent students for today.</p>
            <div className="mb-3 w-50">
              <label className="form-label small fw-bold text-muted">Select Class</label>
              <select className="form-select">
                <option>JSS 2A (Mathematics)</option>
                <option>JSS 2B (Mathematics)</option>
              </select>
            </div>
            <div className="alert alert-secondary">
              Attendance sheet ready. Marking feature mockup active for prototype demonstration.
            </div>
            <button className="btn btn-success">Save Attendance Register</button>
          </div>
        )}

        {/* Tab Content: Scores */}
        {activeTab === 'scores' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Upload Examination & CA Scores</h4>
            <p className="text-muted">Enter continuous assessments (Tests, Projects) and exam scores before submission.</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>CA Test (20 marks)</th>
                    <th>Exam (80 marks)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amara Okafor</td>
                    <td>GSS-0241</td>
                    <td><input type="number" className="form-control form-control-sm w-50" defaultValue="18" /></td>
                    <td><input type="number" className="form-control form-control-sm w-50" defaultValue="72" /></td>
                    <td className="fw-bold text-success">90%</td>
                  </tr>
                  <tr>
                    <td>Chidi Okafor</td>
                    <td>GSS-0298</td>
                    <td><input type="number" className="form-control form-control-sm w-50" defaultValue="15" /></td>
                    <td><input type="number" className="form-control form-control-sm w-50" defaultValue="65" /></td>
                    <td className="fw-bold text-success">80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary">Submit Scores for Review</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TeacherDashboard;
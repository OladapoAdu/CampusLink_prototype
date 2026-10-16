import { useState } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('admissions');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span className="material-icons">school</span> CampusLink - Admin Portal
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small d-none d-md-inline">Logged in: <strong>Dr. Mrs. Alabi (Principal)</strong></span>
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
              <span className="badge bg-danger-subtle text-danger mb-2 fw-bold">SCHOOL ADMINISTRATION PORTAL</span>
              <h3 className="fw-bold text-dark">Welcome, Dr. Alabi</h3>
              <p className="text-muted mb-0">Manage student admissions, school-wide records, staff assignments, and academic terms.</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="bg-light p-2 rounded border d-inline-block text-start">
                <small className="text-muted d-block">Active Session</small>
                <strong className="text-dark">2026/2027 Academic Year</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills mb-4 gap-2">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'admissions' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('admissions')}
            >
              Admissions & Records
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'classes' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('classes')}
            >
              Classes & Arms
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'staff' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('staff')}
            >
              Staff & Teachers
            </button>
          </li>
        </ul>

        {/* Tab Content: Admissions */}
        {activeTab === 'admissions' && (
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Student Admissions & Enrollment</h4>
              <button className="btn btn-primary btn-sm">+ Admit New Student</button>
            </div>
            <p className="text-muted">Review applications, assign admission numbers, and manage student profiles.</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Applicant Name</th>
                    <th>Proposed Class</th>
                    <th>Application Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tunde Bakare</td>
                    <td>JSS 1</td>
                    <td>14 Oct 2026</td>
                    <td><span className="badge bg-warning text-dark">Pending Review</span></td>
                    <td>
                      <button className="btn btn-success btn-sm me-2">Approve & Assign ID</button>
                      <button className="btn btn-outline-danger btn-sm">Reject</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Amara Okafor</td>
                    <td>JSS 2</td>
                    <td>02 Sep 2025</td>
                    <td><span className="badge bg-success">Admitted (GSS-0241)</span></td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm">View Profile</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Classes */}
        {activeTab === 'classes' && (
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Class & Arm Setup</h4>
              <button className="btn btn-primary btn-sm">+ Add New Class Arm</button>
            </div>
            <p className="text-muted">Configure secondary school arms and promote students across years.</p>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card border p-3 bg-light">
                  <h5 className="fw-bold">JSS 1</h5>
                  <p className="small text-muted mb-2">Arms: JSS 1A, JSS 1B, JSS 1C</p>
                  <span className="badge bg-primary">120 Total Students</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border p-3 bg-light">
                  <h5 className="fw-bold">JSS 2</h5>
                  <p className="small text-muted mb-2">Arms: JSS 2A, JSS 2B</p>
                  <span className="badge bg-primary">115 Total Students</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border p-3 bg-light">
                  <h5 className="fw-bold">SS 1</h5>
                  <p className="small text-muted mb-2">Arms: SS 1A, SS 1B</p>
                  <span className="badge bg-primary">98 Total Students</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Staff */}
        {activeTab === 'staff' && (
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Staff & Teacher Management</h4>
              <button className="btn btn-primary btn-sm">+ Register New Staff</button>
            </div>
            <p className="text-muted">Manage teacher profiles and subject assignments.</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Staff Name</th>
                    <th>Department</th>
                    <th>Assigned Subjects</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mr. Adebayo</td>
                    <td>Science & Mathematics</td>
                    <td>Mathematics, Further Maths</td>
                    <td>Teacher</td>
                  </tr>
                  <tr>
                    <td>Mrs. Okoro</td>
                    <td>Arts & Humanities</td>
                    <td>English Language, Literature</td>
                    <td>Senior Teacher</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
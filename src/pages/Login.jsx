import { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [selectedRole, setSelectedRole] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginSuccess(selectedRole);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            
            {/* Branding Header */}
            <div className="text-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle p-3 mb-3 shadow-sm" style={{width: '64px', height: '64px'}}>
                <span className="material-icons fs-2">school</span>
              </div>
              <h2 className="fw-bold text-dark">CampusLink</h2>
              <p className="text-muted small">Unified Secondary School Management System</p>
            </div>

            {/* Login Card */}
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3 text-dark">Sign in to your portal</h5>
              
              <form onSubmit={handleLogin}>
                {/* Role Selector */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-muted">Select Portal Role</label>
                  <select 
                    className="form-select" 
                    value={selectedRole} 
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="student">Student Portal</option>
                    <option value="parent">Parent / Guardian Portal</option>
                    <option value="teacher">Teacher Portal</option>
                    <option value="admin">School Administration Portal</option>
                    <option value="bursary">Bursary & Accounts Portal</option>
                  </select>
                </div>

                {/* Username Input */}
                <div className="mb-3">
                  <label className="form-label small fw-bold text-muted">Username or ID</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white"><span className="material-icons text-muted fs-6">person</span></span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g., GSS-0241" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="form-label small fw-bold text-muted">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white"><span className="material-icons text-muted fs-6">lock</span></span>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Enter password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm">
                  Access Portal
                </button>
              </form>
            </div>

            {/* Prototype Note */}
            <div className="text-center mt-4 text-muted small">
              Prototype Mode: Selecting any role will instantly open its demo dashboard.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
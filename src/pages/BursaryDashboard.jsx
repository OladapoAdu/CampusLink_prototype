import { useState } from 'react';

const BursaryDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
        <div className="container">
          <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span className="material-icons">school</span> CampusLink - Bursary & Finance Portal
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50 small d-none d-md-inline">Accounts Department</span>
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
              <span className="badge bg-success-subtle text-success mb-2 fw-bold">FINANCE & ACCOUNTS COMMAND CENTER</span>
              <h3 className="fw-bold text-dark">Bursary Management Dashboard</h3>
              <p className="text-muted mb-0">Define fee structures, review itemized invoices, and match verified electronic payments.</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="bg-light p-2 rounded border d-inline-block text-start">
                <small className="text-muted d-block">Term Revenue Collected</small>
                <strong className="text-success fs-5">#14,250,000</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills mb-4 gap-2">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'invoices' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('invoices')}
            >
              Fee Structures & Invoices
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'transactions' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('transactions')}
            >
              Transaction Matching
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'reports' ? 'active' : 'bg-white text-dark shadow-sm'}`} 
              onClick={() => setActiveTab('reports')}
            >
              Outstanding Revenue Reports
            </button>
          </li>
        </ul>

        {/* Tab Content: Fee Structures & Itemized Invoices */}
        {activeTab === 'invoices' && (
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold mb-0">Junior Secondary (JSS) Term Bill</h4>
                  <button className="btn btn-outline-primary btn-sm">+ Edit Structure</button>
                </div>
                <p className="text-muted small">Standard itemized breakdown applied to all JSS student accounts.</p>
                
                <table className="table align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Description</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition & Instruction Fee</td>
                      <td className="text-end">#45,000</td>
                    </tr>
                    <tr>
                      <td>ICT & Portal Access Levy</td>
                      <td className="text-end">#10,000</td>
                    </tr>
                    <tr>
                      <td>Development & Maintenance</td>
                      <td className="text-end">#10,000</td>
                    </tr>
                    <tr>
                      <td>Sports & Library Fee</td>
                      <td className="text-end">#10,000</td>
                    </tr>
                    <tr className="table-active fw-bold">
                      <td>Total Term Invoice Value</td>
                      <td className="text-end">#75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">Senior Secondary (SSS) Bill</h4>
                <p className="text-muted small">Includes specialized science lab and vocational levies.</p>
                <table className="table align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Description</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition & Instruction Fee</td>
                      <td className="text-end">#55,000</td>
                    </tr>
                    <tr>
                      <td>Science Laboratory Levy</td>
                      <td className="text-end">#20,000</td>
                    </tr>
                    <tr>
                      <td>ICT & Portal Access Levy</td>
                      <td className="text-end">#10,000</td>
                    </tr>
                    <tr>
                      <td>Development & Sports</td>
                      <td className="text-end">#10,000</td>
                    </tr>
                    <tr className="table-active fw-bold">
                      <td>Total Term Invoice Value</td>
                      <td className="text-end">#95,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Transaction Matching */}
        {activeTab === 'transactions' && (
          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold mb-0">Online Payment Reconciliation</h4>
              <span className="badge bg-primary">Gateway: Paystack / Flutterwave</span>
            </div>
            <p className="text-muted">Match verified electronic payments from parents to respective student accounts and generate verified digital receipts[cite: 5, 6].</p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Reference ID</th>
                    <th>Student Name</th>
                    <th>Amount Paid</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TXN-984120</td>
                    <td>Amara Okafor (GSS-0241)</td>
                    <td>#45,000</td>
                    <td>16 Oct 2026</td>
                    <td><span className="badge bg-success">Verified</span></td>
                    <td><button className="btn btn-outline-success btn-sm">Issue Receipt</button></td>
                  </tr>
                  <tr>
                    <td>TXN-984195</td>
                    <td>Chidi Okafor (SS-1B)</td>
                    <td>#60,000</td>
                    <td>15 Oct 2026</td>
                    <td><span className="badge bg-warning text-dark">Pending Match</span></td>
                    <td><button className="btn btn-primary btn-sm">Match Transaction</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Outstanding Reports */}
        {activeTab === 'reports' && (
          <div className="card border-0 shadow-sm p-4">
            <h4 className="fw-bold mb-3">Revenue & Outstanding Balance Summaries</h4>
            <p className="text-muted">Analyze termly fee collection performance and flag accounts with pending balances.</p>
            <div className="alert alert-secondary">
              Financial reporting filters, CSV exports, and automated parent payment reminders are active for demonstration.
            </div>
            <button className="btn btn-outline-dark btn-sm">Download Term Financial Report (PDF)</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BursaryDashboard;
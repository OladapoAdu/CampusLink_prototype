import { useState } from 'react';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BursaryDashboard from './pages/BursaryDashboard';

export default function App() {
  const [currentRole, setCurrentRole] = useState(null);

  if (!currentRole) {
    return <Login onLoginSuccess={(role) => setCurrentRole(role)} />;
  }

  if (currentRole === 'student') {
    return <StudentDashboard onLogout={() => setCurrentRole(null)} />;
  }

  if (currentRole === 'parent') {
    return <ParentDashboard onLogout={() => setCurrentRole(null)} />;
  }

  if (currentRole === 'teacher') {
    return <TeacherDashboard onLogout={() => setCurrentRole(null)} />;
  }

  if (currentRole === 'admin') {
    return <AdminDashboard onLogout={() => setCurrentRole(null)} />;
  }

  if (currentRole === 'bursary') {
    return <BursaryDashboard onLogout={() => setCurrentRole(null)} />;
  }

  return null;
}
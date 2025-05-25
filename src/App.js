import "./App.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/z_coder/" element={<LoginForm />} />
        <Route path="/z_coder/login" element={<LoginForm />} />
        <Route
          path="/z_coder/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />

      </Routes>
    </Router>
  );
}

export default App;

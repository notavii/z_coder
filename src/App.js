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
    <Router basename="/z_coder">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
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

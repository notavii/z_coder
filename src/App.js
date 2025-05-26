import "./App.css";
import LoginForm from "./components/LoginForm";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from "./components/UserDashboard";
import Questions from "./components/Questions";
import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/UserDashboard"
          element={
            // <ProtectedRoute>
              <UserDashboard />
            // </ProtectedRoute>
          }
        />

         <Route
          path="/Questions"
          element={
            // <ProtectedRoute>
              <Questions />
            // </ProtectedRoute>
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />

      </Routes>
    </Router>
  );
}

export default App;

// import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./components/context/AuthContext";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Questions from "./components/Questions/Questions"



function App() {
  return (

    <AuthProvider>

    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
              <UserDashboard />
            // </ProtectedRoute>
          }
        />

         <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <Questions/>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />

      </Routes>
    </Router>
    </AuthProvider>
  );

  
}

export default App;

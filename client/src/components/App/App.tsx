import '../../components/App/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import ProtectedRoute from '../../components/ProtectedRoute';
import Home from '../../pages/Home';

const App: React.FC = () => {
  const routes = [
    <Route path="/register" element={<Register />} />,
    <Route path="/login" element={<Login />} />
  ];

  return (
    <div className='app'>
      <div className='container'>
        <Router>
          <Routes>
            {routes}
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </div>
    </div >
  );
};

export default App;
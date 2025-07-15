import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };
  const handleRegister = (userData) => {
    setUser(userData);
    setShowRegister(false);
  };
  const handleSwitchToRegister = () => setShowRegister(true);
  const handleSwitchToLogin = () => setShowRegister(false);

  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(120deg,#f8fafc 0%,#e9edfa 100%)', padding: '0', margin: '0' }}>
      {!user ? (
        showRegister ? (
          <Register onRegister={handleRegister} onSwitch={handleSwitchToLogin} />
        ) : (
          <Login onLogin={handleLogin} onSwitch={handleSwitchToRegister} />
        )
      ) : (
        <div style={{ maxWidth: 700, margin: '48px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.06)', padding: '32px 36px' }}>
          <h2 style={{ color: '#2b2d42', fontWeight: 700 }}>Bienvenue, {user.name} !</h2>
          <p style={{ color: '#5c7cfa', fontWeight: 500, marginBottom: 24 }}>Vous êtes connecté en tant que <b>{user.role}</b>.</p>
          <Dashboard user={user} />
        </div>
      )}
    </div>
  );
}

export default App;

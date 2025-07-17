import React, { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-0 m-0 flex flex-col items-center">
      <div className="mt-10 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-green-400 to-yellow-300 flex items-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{verticalAlign:'middle',marginRight:14}} xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="4" width="18" height="18" rx="4" fill="#fff" stroke="#bbb" strokeWidth="1.5"/>
  <polyline points="7,13 11,17 17,9" fill="none" stroke="#43ea7c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        CheckApp
      </div>
      {!user ? (
        showRegister ? (
          <Register onRegister={handleRegister} onSwitch={handleSwitchToLogin} />
        ) : (
          <Login onLogin={handleLogin} onSwitch={handleSwitchToRegister} />
        )
      ) : (
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Bienvenue, {user.name} !</h2>
          <p style={{ color: '#5c7cfa', fontWeight: 500, marginBottom: 24 }}>Vous êtes connecté en tant que <b>{user.role}</b>.</p>
          <Dashboard user={user} />
        </div>
      )}
    </div>
  );
}

export default App;

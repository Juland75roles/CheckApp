import React, { useState } from 'react';
import './AuthForm.css';

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        onLogin(data.user);
      } else {
        setError(data.message || 'Identifiants incorrects');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email&nbsp;:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe&nbsp;:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Connexion...' : 'Se connecter'}</button>
      </form>
      <p className="switch-link">Pas encore de compte ? <span onClick={onSwitch}>S'inscrire</span></p>
    </div>
  );
}

export default Login;

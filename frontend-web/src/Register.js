import React, { useState } from 'react';
import './AuthForm.css';

function Register({ onRegister, onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('etudiant');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        onRegister(data.user);
      } else {
        setError(data.message || 'Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom&nbsp;:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email&nbsp;:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mot de passe&nbsp;:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Rôle&nbsp;:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="etudiant">Étudiant</option>
            <option value="professeur">Professeur</option>
            <option value="responsable">Responsable</option>
          </select>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Inscription...' : 'S\'inscrire'}</button>
      </form>
      <p className="switch-link">Déjà un compte ? <span onClick={onSwitch}>Se connecter</span></p>
    </div>
  );
}

export default Register;

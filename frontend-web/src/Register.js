import React, { useState } from 'react';

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
    <div className="max-w-md mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Inscription</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom&nbsp;:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email&nbsp;:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mot de passe&nbsp;:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rôle&nbsp;:</label>
          <select value={role} onChange={e => setRole(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="etudiant">Étudiant</option>
            <option value="professeur">Professeur</option>
            <option value="responsable">Responsable</option>
          </select>
        </div>
        {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-3 text-sm">{error}</div>}
        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:bg-blue-300">
          {loading ? 'Inscription...' : "S'inscrire"}
        </button>
      </form>
      <p className="mt-5 text-sm text-center text-gray-600">Déjà un compte ? <span onClick={onSwitch} className="text-blue-600 underline cursor-pointer">Se connecter</span></p>
    </div>
  );
}

export default Register;

import React from 'react';

function Dashboard({ user }) {
  if (!user) return null;

  if (user.role === 'professeur') {
    return (
      <div>
        <h2>Espace Professeur</h2>
        <ul>
          <li>Gérer les cours</li>
          <li>Générer/valider les codes de présence</li>
          <li>Consulter les présences et absences</li>
        </ul>
      </div>
    );
  }
  if (user.role === 'responsable') {
    return (
      <div>
        <h2>Espace Responsable académique</h2>
        <ul>
          <li>Voir tous les cours et filières</li>
          <li>Consulter/valider les justificatifs</li>
          <li>Rapports d’assiduité</li>
        </ul>
      </div>
    );
  }
  if (user.role === 'etudiant') {
    return (
      <div>
        <h2>Espace Étudiant</h2>
        <ul>
          <li>Voir mes cours</li>
          <li>Pointer ma présence</li>
          <li>Déposer un justificatif d’absence</li>
        </ul>
      </div>
    );
  }
  return <div>Rôle inconnu.</div>;
}

export default Dashboard;

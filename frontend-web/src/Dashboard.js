import React from 'react';

function Sidebar({ role }) {
  const navItems = [
    { label: 'Accueil', icon: '🏠' },
    { label: 'Cours', icon: '📚' },
    { label: 'Présences', icon: '✅' },
    { label: 'Justificatifs', icon: '📄' },
    { label: 'Utilisateurs', icon: '👥' },
    { label: 'Rapports', icon: '📊' },
    { label: 'Notifications', icon: '🔔' },
  ];
  let filteredItems = navItems;
  if (role === 'etudiant') filteredItems = navItems.filter(item => ['Accueil','Cours','Présences','Justificatifs','Notifications'].includes(item.label));
  if (role === 'professeur') filteredItems = navItems.filter(item => ['Accueil','Cours','Présences','Justificatifs'].includes(item.label));
  // Responsable a tout
  return (
    <aside className="hidden md:flex flex-col min-h-screen w-48 bg-gradient-to-b from-blue-50 to-white border-r border-blue-100 py-8 px-0 fixed left-0 top-0 z-10">
      <div className="text-lg font-bold text-blue-600 mb-8 text-center">Menu</div>
      <ul className="flex-1">
        {filteredItems.map(item => (
          <li key={item.label} className="flex items-center px-6 py-3 text-gray-700 font-medium rounded-l-lg mb-2 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition">
            <span className="text-xl mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function DashCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md mb-8 p-0 transition hover:shadow-lg">
      <div className="flex items-center border-b border-gray-100 px-7 py-4">
        <span className="text-2xl mr-4">{icon}</span>
        <span className="text-lg font-semibold text-gray-800 flex-1">{title}</span>
      </div>
      <div className="px-7 py-5 flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function Dashboard({ user }) {
  if (!user) return null;
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Sidebar role={user.role} />
      <main className="flex-1 md:ml-48 p-5 md:p-12">
        <h2 className="mb-8 text-2xl font-bold text-gray-800">
          {user.role === 'professeur' && 'Tableau de bord Professeur'}
          {user.role === 'responsable' && 'Tableau de bord Responsable'}
          {user.role === 'etudiant' && 'Tableau de bord Étudiant'}
        </h2>
        {user.role === 'professeur' && (
          <>
            <DashCard title="Gestion des cours" icon="📚">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Créer un cours</button>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-5 py-2 rounded-lg shadow">Voir mes cours</button>
            </DashCard>
            <DashCard title="Présences" icon="✅">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Générer un code de présence</button>
              <button className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-5 py-2 rounded-lg shadow mr-2">Valider les présences</button>
              <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold px-5 py-2 rounded-lg shadow">Consulter les absences</button>
            </DashCard>
            <DashCard title="Justificatifs" icon="📄">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg shadow">Consulter les justificatifs d'absence</button>
            </DashCard>
          </>
        )}
        {user.role === 'responsable' && (
          <>
            <DashCard title="Suivi global" icon="📚">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Voir tous les cours</button>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-5 py-2 rounded-lg shadow">Voir toutes les filières</button>
            </DashCard>
            <DashCard title="Gestion des justificatifs" icon="📄">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg shadow">Consulter/valider les justificatifs</button>
            </DashCard>
            <DashCard title="Rapports & Statistiques" icon="📊">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Rapports d’assiduité</button>
              <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold px-5 py-2 rounded-lg shadow">Exporter les données</button>
            </DashCard>
            <DashCard title="Gestion des utilisateurs" icon="👥">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Voir tous les étudiants</button>
              <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold px-5 py-2 rounded-lg shadow">Voir tous les professeurs</button>
            </DashCard>
          </>
        )}
        {user.role === 'etudiant' && (
          <>
            <DashCard title="Mes cours" icon="📚">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Voir mes cours</button>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-5 py-2 rounded-lg shadow">Emploi du temps</button>
            </DashCard>
            <DashCard title="Présence" icon="✅">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Pointer ma présence</button>
              <button className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-5 py-2 rounded-lg shadow">Historique de mes présences</button>
            </DashCard>
            <DashCard title="Justificatifs" icon="📄">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg shadow mr-2">Déposer un justificatif d’absence</button>
              <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold px-5 py-2 rounded-lg shadow">Voir mes justificatifs</button>
            </DashCard>
            <DashCard title="Notifications" icon="🔔">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-lg shadow">Voir les notifications</button>
            </DashCard>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;

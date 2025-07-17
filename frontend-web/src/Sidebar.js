import React from 'react';


const navItems = [
  { label: 'Accueil', icon: '🏠' },
  { label: 'Cours', icon: '📚' },
  { label: 'Présences', icon: '✅' },
  { label: 'Justificatifs', icon: '📄' },
  { label: 'Utilisateurs', icon: '👥' },
  { label: 'Rapports', icon: '📊' },
  { label: 'Notifications', icon: '🔔' },
];

function Sidebar({ role }) {
  // Filtrage des items selon le rôle si besoin
  let filteredItems = navItems;
  if (role === 'etudiant') {
    filteredItems = navItems.filter(item => ['Accueil','Cours','Présences','Justificatifs','Notifications'].includes(item.label));
  }
  if (role === 'professeur') {
    filteredItems = navItems.filter(item => ['Accueil','Cours','Présences','Justificatifs'].includes(item.label));
  }
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

export default Sidebar;

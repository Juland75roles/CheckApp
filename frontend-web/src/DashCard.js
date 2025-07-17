import React from 'react';


function DashCard({ title, icon, children, badge }) {
  return (
    <div className="bg-white rounded-xl shadow-md mb-8 p-0 transition hover:shadow-lg">
      <div className="flex items-center border-b border-gray-100 px-7 py-4">
        <span className="text-2xl mr-4">{icon}</span>
        <span className="text-lg font-semibold text-gray-800 flex-1">{title}</span>
        {badge && <span className="ml-2 bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs">{badge}</span>}
      </div>
      <div className="px-7 py-5 flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );
}

export default DashCard;

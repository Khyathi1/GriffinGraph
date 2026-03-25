import React from 'react';
import { LayoutDashboard, TrendingUp, Users, Settings } from 'lucide-react';

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
    active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col hidden lg:flex h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 text-indigo-400 mb-10">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">P</div>
          <span className="text-xl font-bold tracking-tight text-white">PrismCharts</span>
        </div>
        
        <nav className="space-y-1">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<TrendingUp size={20}/>} label="Analytics" />
          <NavItem icon={<Users size={20}/>} label="Customers" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>
      </div>
    </aside>
  );
}
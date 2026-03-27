import React from 'react';
import { LayoutDashboard, FolderPlus, Database, Settings, BarChart2 } from 'lucide-react';

export default function Sidebar({ activeFolder, setActiveFolder, folders }) {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          {/* Logo Placeholder - Replace src with your Gemini Image URL */}
          <img 
            src="https://github.com/Khyathi1/GriffinGraph/blob/main/Gemini_Generated_Image_bu32anbu32anbu32.png?raw=true" 
            className="w-10 h-10 rounded-lg object-cover border border-indigo-500"
            alt="Griffin Graph Logo"
          />
          <span className="text-xl font-bold tracking-tight">Griffin Graph</span>
        </div>
        
        <nav className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-4">Workspace</p>
            <div className="space-y-1">
              <NavItem icon={<LayoutDashboard size={18}/>} label="Overview" active />
              <NavItem icon={<BarChart2 size={18}/>} label="PrismCharts" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs font-semibold text-slate-500 uppercase">Folders</p>
              <FolderPlus size={14} className="cursor-pointer hover:text-indigo-400" />
            </div>
            <div className="space-y-1">
              {folders.map(folder => (
                <div 
                  key={folder.id}
                  onClick={() => setActiveFolder(folder.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm ${
                    activeFolder === folder.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <Database size={16} /> {folder.name}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition ${
      active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}
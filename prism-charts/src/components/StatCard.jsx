import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function StatCard({ title, value, growth, isNegative = false }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
        <span className={`text-sm font-semibold flex items-center gap-1 ${
          isNegative ? 'text-red-500' : 'text-emerald-500'
        }`}>
          {growth} 
          <ArrowUpRight size={14} className={isNegative ? 'rotate-90' : ''}/>
        </span>
      </div>
    </div>
  );
}
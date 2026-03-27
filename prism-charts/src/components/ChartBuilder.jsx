import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Trash2 } from 'lucide-react';

export default function ChartBuilder({ data, onClear }) {
  const columns = Object.keys(data[0] || {});
  const [xAxis, setXAxis] = useState(columns[0]);
  const [yAxis, setYAxis] = useState(columns[1]);
  const [chartType, setChartType] = useState('line');

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-slate-800">PrismChart Generator</h2>
        <button onClick={onClear} className="text-red-500 flex items-center gap-2 text-sm hover:bg-red-50 p-2 rounded">
          <Trash2 size={16}/> Clear Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">X-Axis Column</label>
          <select value={xAxis} onChange={(e) => setXAxis(e.target.value)} className="w-full border-slate-200 rounded-lg p-2 bg-slate-50">
            {columns.map(col => <option key={col} value={col}>{col}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">Y-Axis Column</label>
          <select value={yAxis} onChange={(e) => setYAxis(e.target.value)} className="w-full border-slate-200 rounded-lg p-2 bg-slate-50">
            {columns.map(col => <option key={col} value={col}>{col}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">Visualization Type</label>
          <div className="flex gap-2">
            <button onClick={() => setChartType('line')} className={`flex-1 py-2 rounded-lg text-sm ${chartType === 'line' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Line</button>
            <button onClick={() => setChartType('bar')} className={`flex-1 py-2 rounded-lg text-sm ${chartType === 'bar' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Bar</button>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full bg-slate-50 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={yAxis} stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={yAxis} fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
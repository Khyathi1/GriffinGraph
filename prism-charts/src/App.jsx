import React from 'react'; 
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import LineChartComponent from './components/charts/LineChart';
import BarChartComponent from './components/charts/BarChart';
import PieChartComponent from './components/charts/PieChart';
import { TrendingUp, PieChart as PieIcon, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Component - Imported from components/Sidebar.jsx */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Prism Dashboard</h1>
              <p className="text-slate-500 text-sm">Real-time data visualization overview</p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
              Export Report
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats Cards - Using the StatCard component */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Revenue" value="$42,500" growth="+12.5%" />
            <StatCard title="Active Users" value="1,284" growth="+3.2%" />
            <StatCard title="Conversion Rate" value="4.8%" growth="-0.4%" isNegative />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-indigo-500"/> Revenue Over Time
              </h3>
              <LineChartComponent />
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-emerald-500"/> Profit Analysis
              </h3>
              <BarChartComponent />
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <PieIcon size={20} className="text-amber-500"/> Market Share
              </h3>
              <PieChartComponent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
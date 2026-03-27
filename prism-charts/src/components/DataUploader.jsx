import React from 'react';
import Papa from 'papaparse';
import { Upload } from 'lucide-react';

export default function DataUploader({ onUpload }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          onUpload(results.data, file.name);
        },
      });
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center bg-white hover:border-indigo-400 transition-colors cursor-pointer relative">
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFile} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
      />
      <Upload className="mx-auto text-slate-400 mb-4" size={48} />
      <h3 className="text-xl font-semibold text-slate-700">Upload CSV Dataset</h3>
      <p className="text-slate-500 mt-2">Click or drag and drop your data file here to start PrismCharts</p>
    </div>
  );
}
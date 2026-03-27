import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DataUploader from './components/DataUploader';
import ChartBuilder from './components/ChartBuilder';
import { Plus } from 'lucide-react';

function App() {
  const [folders, setFolders] = useState([
    { id: '1', name: 'Market Research', files: [] }
  ]);
  const [activeFolderId, setActiveFolderId] = useState('1');
  const [selectedFileData, setSelectedFileData] = useState(null);

  const activeFolder = folders.find(f => f.id === activeFolderId);

  const addFolder = () => {
    const name = prompt("Enter folder name:");
    if (name) {
      setFolders([...folders, { id: Date.now().toString(), name, files: [] }]);
    }
  };

  const onFileUpload = (data, fileName) => {
    const updatedFolders = folders.map(f => {
      if (f.id === activeFolderId) {
        return { ...f, files: [...f.files, { name: fileName, data }] };
      }
      return f;
    });
    setFolders(updatedFolders);
    setSelectedFileData(data); // Preview immediately
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        folders={folders} 
        activeFolder={activeFolderId} 
        setActiveFolder={setActiveFolderId} 
      />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{activeFolder?.name}</h1>
              <p className="text-slate-500">Manage your datasets and generate PrismCharts</p>
            </div>
            <button 
              onClick={addFolder}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Plus size={18} /> New Folder
            </button>
          </header>

          <div className="grid grid-cols-1 gap-8">
            {/* Uploader Section */}
            {!selectedFileData && (
              <DataUploader onUpload={onFileUpload} />
            )}

            {/* List existing files in folder */}
            <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
              {activeFolder?.files.map((file, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedFileData(file.data)}
                  className="bg-white border border-slate-200 px-4 py-2 rounded-md text-sm font-medium hover:border-indigo-500 transition"
                >
                  📄 {file.name}
                </button>
              ))}
            </div>

            {/* Chart Builder Section */}
            {selectedFileData && (
              <ChartBuilder data={selectedFileData} onClear={() => setSelectedFileData(null)} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
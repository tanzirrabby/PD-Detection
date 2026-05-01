import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import IoTSimulationPage from './pages/IoTSimulationPage';
import ReportsPage from './pages/ReportsPage';
import ConsultationPage from './pages/ConsultationPage';
import DiseaseInfoPage from './pages/DiseaseInfoPage';
import { mockPrediction } from './data/mockData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [prediction, setPrediction] = useState(mockPrediction());
  const metrics = useMemo(() => ({ eeg: 91, emg: 88, tremor: '0.41' }), []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">This system is for research and demonstration purposes only. It is not a medical diagnosis tool and does not provide treatment or medication recommendations.</div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage prediction={prediction} metrics={metrics} />} />
          <Route path="/iot" element={<IoTSimulationPage onPredict={setPrediction} />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/disease-info" element={<DiseaseInfoPage />} />
        </Routes>
      </main>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockPrediction, randomSignal } from '../data/mockData';

export default function IoTSimulationPage({ onPredict }) {
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{ t: 0, eeg: 50, emg: 60 }]);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setData((d) => [...d.slice(-24), { t: d.length, eeg: randomSignal(), emg: randomSignal() }]), 1000);
    return () => clearInterval(id);
  }, [running]);

  const handlePredict = () => { setLoading(true); setTimeout(() => { onPredict(mockPrediction()); setLoading(false); }, 1800); };
  return <div className="space-y-4"><div className="medical-card"><h2 className="font-semibold">Live EEG / EMG IoT Stream</h2><div className="mt-4 h-72"><ResponsiveContainer><LineChart data={data}><XAxis dataKey="t" /><YAxis /><Tooltip /><Line dataKey="eeg" stroke="#1d4ed8" /><Line dataKey="emg" stroke="#059669" /></LineChart></ResponsiveContainer></div><div className="mt-4 flex gap-3"><button className="rounded bg-medicalGreen px-4 py-2 text-white" onClick={() => setRunning(!running)}>{running ? 'Stop IoT Checkup' : 'Start IoT Checkup'}</button><button className="rounded bg-medicalBlue px-4 py-2 text-white" onClick={handlePredict}>Send Data to AI Model</button></div>{loading && <div className="mt-4"><p>Analyzing signals...</p><div className="h-2 w-full overflow-hidden rounded bg-slate-200"><div className="h-2 w-2/3 animate-pulse bg-medicalBlue" /></div></div>}</div></div>;
}

export default function DashboardPage({ prediction, metrics }) {
  const cards = [
    ['Risk Level', prediction.status],
    ['Confidence Score', `${prediction.confidence}%`],
    ['EEG Signal Quality', `${metrics.eeg}%`],
    ['EMG Signal Quality', `${metrics.emg}%`],
    ['Tremor Index', metrics.tremor],
    ['Recent Prediction', `${(prediction.probability * 100).toFixed(0)}%`],
  ];
  return <div className="grid gap-4 md:grid-cols-3">{cards.map(([k,v]) => <div className="medical-card" key={k}><p className="text-sm text-slate-500">{k}</p><p className="mt-2 text-2xl font-bold text-medicalBlue">{v}</p></div>)}</div>;
}

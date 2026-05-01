import { reports } from '../data/mockData';
export default function ReportsPage() {
  return <div className="medical-card overflow-x-auto"><h2 className="mb-4 text-xl font-semibold">Previous Reports</h2><table className="w-full text-left text-sm"><thead><tr className="border-b"><th>Date</th><th>Risk Score</th><th>Confidence</th><th>Status</th></tr></thead><tbody>{reports.map((r)=><tr key={r.date} className="border-b"><td>{r.date}</td><td>{(r.risk*100).toFixed(0)}%</td><td>{r.confidence}%</td><td>{r.status}</td></tr>)}</tbody></table></div>;
}

import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="space-y-6">
      <section className="medical-card bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <h1 className="text-3xl font-bold">EEG-EMG Multimodal Fusion Framework for Early Parkinson’s Disease Detection</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">A capstone prototype demonstrating future AI + IoT healthcare integration.</p>
        <Link to="/iot" className="mt-4 inline-block rounded-xl bg-medicalBlue px-5 py-2 text-white">Start Monitoring</Link>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="medical-card"><h2 className="font-semibold">What is Parkinson’s disease?</h2><p className="mt-2">A progressive neurological disorder affecting movement, often with tremor, rigidity, and slowed motion.</p></article>
        <article className="medical-card"><h2 className="font-semibold">Why EEG + EMG Fusion?</h2><p className="mt-2">EEG captures brain activity while EMG captures muscle behavior, giving richer early biomarkers together than alone.</p></article>
      </section>
    </div>
  );
}

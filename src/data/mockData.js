export const reports = [
  { date: '2026-04-28', risk: 0.28, confidence: 84, status: 'Low' },
  { date: '2026-04-29', risk: 0.44, confidence: 80, status: 'Moderate' },
  { date: '2026-04-30', risk: 0.62, confidence: 87, status: 'High' },
];

export const shapFeatures = [
  { feature: 'EEG Beta Band', impact: 0.35 },
  { feature: 'EEG Alpha Ratio', impact: 0.22 },
  { feature: 'EMG Tremor Burst', impact: 0.27 },
  { feature: 'Muscle Fatigue', impact: 0.16 },
];

export const randomSignal = () => Number((Math.random() * 100).toFixed(2));

export const mockPrediction = () => {
  const probability = Number((0.25 + Math.random() * 0.65).toFixed(2));
  const status = probability > 0.66 ? 'High' : probability > 0.4 ? 'Moderate' : 'Low';
  return { status, probability, confidence: Math.floor(78 + Math.random() * 20) };
};

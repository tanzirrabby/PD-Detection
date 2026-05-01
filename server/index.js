import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/predict', (_req, res) => {
  const probability = Number((0.25 + Math.random() * 0.65).toFixed(2));
  const riskLevel = probability > 0.66 ? 'High' : probability > 0.4 ? 'Moderate' : 'Low';
  res.json({ riskLevel, probability, confidence: Math.floor(78 + Math.random() * 20) });
});

app.get('/api/reports', (_req, res) => {
  res.json([
    { date: '2026-04-28', risk: 0.28, confidence: 84, status: 'Low' },
    { date: '2026-04-29', risk: 0.44, confidence: 80, status: 'Moderate' },
    { date: '2026-04-30', risk: 0.62, confidence: 87, status: 'High' },
  ]);
});

app.listen(4000, () => console.log('Mock API running on http://localhost:4000'));

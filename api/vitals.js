module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = req.body && typeof req.body === 'object' ? req.body : null;

  if (!payload || typeof payload.name !== 'string' || typeof payload.value !== 'number') {
    return res.status(400).json({ error: 'Invalid web vitals payload' });
  }

  // Logs appear in Vercel Function Logs. Forward this to storage/analytics when ready.
  console.log(
    JSON.stringify({
      type: 'web-vitals',
      name: payload.name,
      value: payload.value,
      id: payload.id || null,
      rating: payload.rating || null,
      delta: typeof payload.delta === 'number' ? payload.delta : null,
      route: payload.route || null,
      capturedAt: payload.capturedAt || new Date().toISOString(),
      userAgent: payload.userAgent || null,
    })
  );

  return res.status(204).end();
};

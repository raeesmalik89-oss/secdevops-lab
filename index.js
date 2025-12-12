
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, SecDevOps! Security testing lab.');
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'SecDevOps Lab',
    timestamp: new Date().toISOString() 
  });
});

app.listen(port, () => {
  console.log(`SecDevOps app running on http://localhost:${port}`);
});


const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Set default route to aboutMe.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'aboutMe.html'));
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'aboutMe.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/scifi', (req, res) => {
  res.sendFile(path.join(__dirname, 'scifi.html'));
});

app.get('/tech', (req, res) => {
  res.sendFile(path.join(__dirname, 'tech.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

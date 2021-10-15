import { config } from './config.js';
import path from 'path';
import express from 'express';

const { HOSTNAME, PORT, NODE_ENV } = config;

const app = express();

app.get('/', (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
});

app.listen(
  PORT,
  HOSTNAME,
  console.log(`Server running in ${NODE_ENV} mode at: ${HOSTNAME}:${PORT}`)
);

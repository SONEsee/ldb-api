import * as express from 'express';
import * as cors from 'cors';
import { urlencoded } from 'body-parser';
import environment from './environment';
import api from './api';
import { resolve } from 'path';

const app = express();

const baseUrl = `/api/v${environment.api_version}`;

app.use(express.json());

app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  );

  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`);
  if (Object.entries(req.query).length > 0) {
    console.log('query params:');
    Object.keys(req.query).forEach((key) =>
      console.log(` - ${key}: ${req.query[key]}`)
    );
  }
  if (Object.entries(req.body).length > 0) {
    console.log('request body:');
    Object.keys(req.body).forEach((key) =>
      console.log(` - ${key}: ${req.body[key]}`)
    );
  }
  console.log();
  next();
});

app.use('/uploads', express.static(resolve(__dirname, '.', 'uploads')));

app.use(baseUrl, api);

export default app;

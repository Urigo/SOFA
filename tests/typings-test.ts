import express from 'express';
import { useSofa } from '../src/index';

const app = express();

app.use('/api', useSofa({
    basePath: '/api',
    schema: {} as any,
}));

import express from "express";
import animeRoutes from './routes/animeRoutes';

const app = express();

app.use(express.json());

app.use('/anime', animeRoutes);

export default app;

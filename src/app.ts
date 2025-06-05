import express from 'express';
import dotenv from 'dotenv';
import hotelRoutes from './routes/hotelRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
//midware fro parsing json reqs
app.use(express.json());
//mounting hotels&auth routes
app.use('/', hotelRoutes);
app.use('/', authRoutes);

export default app;

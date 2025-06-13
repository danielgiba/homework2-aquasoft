import express from 'express';
import dotenv from 'dotenv';
import hotelRoutes from './routes/hotelRoutes';
import authRoutes from './routes/authRoutes';
import reviewRoutes from './routes/reviewRoutes';

dotenv.config();

const app = express();
//midware for parsing json reqs
app.use(express.json());
//mounting hotels&auth routes
app.use('/', hotelRoutes);
app.use('/', authRoutes);
app.use('/', reviewRoutes);

export default app;

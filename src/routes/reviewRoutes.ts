import express from 'express';
import { getReviewsForHotel } from '../controllers/reviewCtrl';

const router = express.Router();

router.get('/hotels/:hotelId/reviews', getReviewsForHotel);

export default router;

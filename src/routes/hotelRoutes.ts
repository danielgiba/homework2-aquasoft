import express from 'express';
import {
  getAllHotels,
  getHotelByName,
  createHotel,
  updateHotel,
  deleteHotel
} from '../controllers/hotelCtrl';
//is for JWT auth middleware
import {authToken} from '../midware/auth';

const router = express.Router();
//GET hotels
router.get('/hotels', getAllHotels);
//GET hotel_name
router.get('/hotels/:name', getHotelByName);
//POST hotel
router.post('/hotels', authToken, createHotel);
//PUT hotel
router.put('/hotels/:id', authToken, updateHotel);
//DELETE hotel
router.delete('/hotels/:id', authToken, deleteHotel);

export default router;

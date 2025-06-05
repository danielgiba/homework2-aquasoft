import { Request, Response } from 'express';
import { Hotel } from '../../models';

//get all infos about hotels from pg -> for GET /hotels
export const getAllHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({error: 'error taking info about hotels' });
  }
};

//for searching by name -> GET /hotel_name
export const getHotelByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const hotel = await Hotel.findOne({where: {GlobalPropertyName: name}});
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({error: 'hotel not found' });
    }
  } catch (error) {
    res.status(500).json({error: 'error taking info about hotels' });
  }
};

//for POST /hotels
export const createHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({error: 'error creating hotel', details: error });
  }
};

//updating data about hotel by id <=> PUT by id
export const updateHotel = async (req: Request, res: Response) => {
  try {
    const [updated] = await Hotel.update(req.body, {
      where: {GlobalPropertyID: req.params.id}
    });
    res.json({ updated });
  } catch (error) {
    res.status(400).json({error: 'error updating hotel' });
  }
};

//DELETE hotel
export const deleteHotel = async (req: Request, res: Response) => {
  try {
    await Hotel.destroy({where: { GlobalPropertyID: req.params.id}});
    res.json({ message: 'hotel deleted!' });
  } catch (error) {
    res.status(400).json({error: 'error deleting hotel' });
  }
};

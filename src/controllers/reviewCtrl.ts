import { Request, Response } from 'express';
import { Review } from '../../models';

export const getReviewsForHotel = async (req: Request, res: Response) => {
  try {
    const hotelId = Number(req.params.hotelId);

    const reviews = await Review.findAll({
      where: { HotelID: hotelId },
      order: [['ReviewDate', 'DESC']]
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'failed to fetch reviews!'});
  }
};

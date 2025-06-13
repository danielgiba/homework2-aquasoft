import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { Review, Hotel } from '../models';
import { sequelize } from '../models';

const fileMap: { file: string; hotelName: string }[] = [
  { file: 'conrad-agoda.html', hotelName: 'Conrad Dubai' },
  { file: 'hilton-al-habtoor.html', hotelName: 'Hilton Dubai Al Habtoor City' },
  { file: 'dusit-abu-dhabi.html', hotelName: 'Dusit Thani Abu Dhabi' },
  { file: 'al-habtoor-palace.html', hotelName: 'Al Habtoor Palace' },
  { file: 'hilton-dubai-jumeirah.html', hotelName: 'Hilton Dubai Jumeirah' },
  { file: 'dusit-thani-dubai.html', hotelName: 'Dusit Thani Dubai' },
  { file: 'shangri-la-dubai.html', hotelName: 'Shangri-La Hotel Dubai' },
  { file: 'grand-hyatt-dubai.html', hotelName: 'Grand Hyatt Dubai' },
  { file: 'aavri-deira.html', hotelName: 'Aavri Hotel Deira' },
  { file: 'roda-al-murooj.html', hotelName: 'Roda Al Murooj Residences' }
];

(async () => {
  await sequelize.sync();

  for (const entry of fileMap) {
    console.log(`processing: ${entry.hotelName}`);

    const filePath = path.join(__dirname, '../data', entry.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`file not found: ${entry.file}`);
      continue;
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);

    const hotel = await Hotel.findOne({ where: { GlobalPropertyName: entry.hotelName } });
    if (!hotel) {
      console.warn(`hotel not found in db: ${entry.hotelName}`);
      continue;
    }
    const hotelId = (hotel as any).GlobalPropertyID;

    const reviews = $('.Review-comment').slice(0, 10);

    let index = 1;
    for (const el of reviews.toArray()) {
      const name = $(el).find('.Review-comment-reviewerName').text().trim();
      const content = $(el).find('.Review-comment-body').text().trim();
      const ratingStr = $(el).find('.Review-comment-score').text().trim();
      const rating = parseFloat(ratingStr) || 8.0;

      await Review.create({
        HotelID: hotelId,
        ReviewerName: name || `guest ${index}`,
        ReviewSubject: content.slice(0, 30),
        ReviewContent: content,
        ReviewDate: new Date(Date.now() - index * 86400000),
        OverallRating: rating,
        CleanlinessRating: rating,
        LocationRating: rating,
        ServiceRating: rating,
        ValueRating: rating,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      index++;
    }

    console.log(`inserted ${reviews.length} reviews for ${entry.hotelName}`);
  }

  console.log('done importing all reviews');
  process.exit(0);
})();

import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

import hotelModel from './hotel';
import cityModel from './city';
import regionModel from './region';
import reviewModel from './review';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false
  }
);

const Hotel = hotelModel(sequelize, DataTypes);
const City = cityModel(sequelize, DataTypes);
const Region = regionModel(sequelize, DataTypes);
const Review = reviewModel(sequelize); 

if (Hotel.associate) Hotel.associate({ City, Region, Review });
if (City.associate) City.associate({ Hotel });
if (Region.associate) Region.associate({ Hotel });
if (Review.associate) Review.associate({ Hotel });

export { sequelize, Hotel, City, Region, Review };

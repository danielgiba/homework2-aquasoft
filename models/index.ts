import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
//import models
import hotelModel from './hotel';
import cityModel from './city';
import regionModel from './region';

dotenv.config();
//connect to pg
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
//init models w/ sequelize
const Hotel = hotelModel(sequelize, DataTypes);
const City = cityModel(sequelize, DataTypes);
const Region = regionModel(sequelize, DataTypes);

if (Hotel && typeof Hotel.associate === 'function') {
  Hotel.associate({ City, Region });
}
if (City && typeof City.associate === 'function') {
  City.associate({ Hotel });
}
if (Region && typeof Region.associate === 'function') {
  Region.associate({ Hotel });
}

export { sequelize, Hotel, City, Region };

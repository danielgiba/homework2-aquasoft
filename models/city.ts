import { Model, Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  //one-to-many <=> one city has many hotels
  class City extends Model {
    static associate(models: any) {
      City.hasMany(models.Hotel, {
        foreignKey: 'CityID',
        as: 'Hotels'
      });
    }
  }
  //create table
  City.init(
    {
      CityID: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      CityName: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
      Country: {
        type: dataTypes.STRING(50),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'Cities',
      timestamps: true
    }
  );

  return City;
};
